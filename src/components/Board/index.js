import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Loader from '../Loader'
import Card from '../Card'

import './index.scss'

const Board = (props) => {

    console.log('boarrd se renderiza')

    const { deck,
            loading, error} = props

    // const [game, setGame] = useState({
    //     pairSelected: [],
    //     pairsFounded: []
    // }) 

    const game = {
        pairSelected: [],
        pairsFounded: []
    }

    const cardClicked = char => {
        if (game.pairSelected.length === 0) {
            game.pairSelected.push(char)
        return
        }
        if (game.pairSelected.length === 1) {
            if (game.pairSelected[0].id === char.id && game.pairSelected[0].key !== char.key) {
                game.pairsFounded.push(char)
                game.pairSelected.length = 0
                return
            } else {
                game.pairSelected.length = 0
                return
            }
                
        }
        console.log('hay algo raro seleccionando pares')
        return
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
            // i created a rndom number bc the key of all cards must be diferent every time, 
            // and so is tricky when there are 2 equal cards on deck; and if i use the index
            const ran = Math.random()
            return (
                deck.map((char, i) => (
                    <Card
                        game={game}
                        key={ran + i} 
                        char={{key: ran + i, ...char}} 
                        delay={i * 80} 
                        cardClicked={cardClicked}/>
                    ))
                )
            }
        return 
    }

    return (
        <div className='board'>
            {displayContent()}
        </div>
    )

}

const connectReducers = store => store

export default connect(connectReducers, null)(Board)