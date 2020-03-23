import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Settings from './components/Settings'
import Board from './components/Board'

import { bringRickCharacters } from './actions'
import createDeck from './assets/functions/createDeck'

const App = (props) => {

    const { bringRickCharacters,
            rickCharacters } = props

    const [boardStatus, setBoardStatus] = useState({
        deck: null,
        pairsPlaying: 5,
    })   

    useEffect(() => {
        if (!rickCharacters) {
            bringRickCharacters()
        }
    }, [])

    useEffect(() => {
        if(rickCharacters) {
            setBoardStatus(prev => ({
                ...prev,
                deck: createDeck(boardStatus.pairsPlaying, rickCharacters, rickCharacters.length)
            }))
        }
    }, [boardStatus.pairsPlaying, rickCharacters])

    console.log('app se renderiza')

    return(
        <>
            <Settings boardStatus={boardStatus} setBoardStatus={setBoardStatus}/> 
            <Board deck={boardStatus.deck}/>
        </>
    )
}

const connectActions = {
    bringRickCharacters   
}

const connectStore = store => store

export default connect(connectStore, connectActions)(App)
