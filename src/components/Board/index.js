import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import WonModal from '../PlayerWonModal'
import Loader from '../Loader'
import Card from '../Card'

import './index.scss'

const Board = (props) => {

    const { newGame, deck, loading, error } = props

    const [game, setGame] = useState({
        isFirstRender: true,
        pairSelected: [],
        cardsFounded: []
    })
    // Restore values every time a new deck is created, a new game is initialized
    useEffect(() => {
        setGame({
            isFirstRender: true,
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
                        isFirstRender: false,
                        cardsFounded: [...prev.cardsFounded, ...game.pairSelected, char],
                        pairSelected: []
                    }))
            } else {
                setGame(prev => ({
                    ...prev,
                    isFirstRender: false,
                    pairSelected: []
                }))
            }
        } else {
            if (!game.cardsFounded.includes(char)) {
                setGame(prev => ({
                    ...prev,
                    isFirstRender: false,
                    pairSelected: [char]
                }))
            }
        }
    }

    const DisplayCards = () => {
        return(
            deck.map((char, i) => {

                let status 
                if (game.cardsFounded.includes(char)) {
                    status = 'founded'
                } else if (game.pairSelected.includes(char)) {
                    status = 'selected'
                } else {
                    status = 'normal'
                }
                const data = {
                    isFirstRender: game.isFirstRender,
                    delay: i * 80,
                    status: status
                }
                const renderId = Math.random()
                return (
                    <Card
                    key={renderId + char.key}                                                                                                                                                                       
                    data={data}
                    char={char} 
                    cardClicked={cardClicked}/>
                )
            })
        )
    }

    const displayStatus = () => {
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
        return 
    }

    let playerWon = false

    if (deck && game.cardsFounded.length) {
        playerWon = deck.length === game.cardsFounded.length ? true : false
    }

    return (
        <div className='board'>
            {displayStatus()}
            {deck && <DisplayCards />}
            {playerWon && <WonModal newGame={newGame} />}
        </div>
    )
}

const connectReducers = store => store

export default connect(connectReducers, null)(Board)