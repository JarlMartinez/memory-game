import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Loader from '../Loader'
import Card from '../Card'

import './index.scss'

const Board = (props) => {

    const { newGame, deck, loading, error } = props

    const [game, setGame] = useState({
        firstRender: true,
        pairSelected: [],
        cardsFounded: []
    })

    // Restore values every time a new deck is created, a new game is initialized
    useEffect(() => {
        setGame({
            firstRender: true,
            pairSelected: [],
            cardsFounded: []
        })
    }, [deck])

    const cardClicked = char => {
        if(game.pairSelected.length === 1) {
            if (game.pairSelected[0].id === char.id &&
                game.pairSelected[0].key !== char.key) {
                    setGame(prev => ({
                        ...prev,
                        firstRender: false,
                        cardsFounded: [...prev.cardsFounded, ...game.pairSelected, char],
                        pairSelected: []
                    }))
            } else {
                setGame(prev => ({
                    ...prev,
                    firstRender: false,
                    pairSelected: []
                }))
            }
        } else {
            setGame(prev => ({
                ...prev,
                firstRender: false,
                pairSelected: [char]
            }))
        }
    }

    const displayContent = () => {
        if(loading) {
            return <Loader />
        }
        if(error) {
            return (
            <>
                <h1>Hubo un error :O</h1>
                <p>{error}</p>
            </>
            )
        }
        if (deck) {
            // i created a rndom number bc the key of all cards must be diferent every re-render, 
            // and so is tricky when there are 2 equal cards on deck; and if i use the index
            return (
                deck.map((char, i) => {

                    let status 
                    if (game.cardsFounded.includes(char)) {
                        status = 'founded'
                    } else if (game.pairSelected.includes(char)) {
                        status = 'selected'
                    } else {
                        status = 'normal'
                    }
                    const dataForAnimation = {
                        firstRender: game.firstRender,
                        delay: i * 80
                    }
                    const renderId = Math.random()
                    return (
                        <Card
                        key={renderId + char.key}                                                                                                                                                                       
                        status={status}
                        dataForAnimation={dataForAnimation}
                        char={char} 
                        cardClicked={cardClicked}/>
                    )
                })
            )
        }
        return 
    }

    const WonModal = () => {
        return (
            <div className='wonModalContainer'>
                <div className='wonModal'>
                    <h1>Felicidades! Ganaste</h1>
                    <p onClick={newGame}>Volver a jugar</p>
                </div>
            </div>
        )
    }

    let playerWon = false

    if (deck && game.cardsFounded.length) {
        playerWon = deck.length === game.cardsFounded.length ? true : false
    }

    return (
        <div className='board'>
            {displayContent()}
            {playerWon && <WonModal />}
        </div>
    )

}

const connectReducers = store => store

export default connect(connectReducers, null)(Board)