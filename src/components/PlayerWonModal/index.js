import React from 'react'
import { connect } from 'react-redux'

import { startNewGame } from '../../redux/actions'

import './index.scss'

const WonModal = (props) => {

    const { rickCharacters, numberOfPairsSelected,
            startNewGame, numOfPairsOnDeck} = props

    return (
        <div className='wonModalContainer' >
            <div className='wonModal'>
                <h1>¡Ganaste!</h1>
                <p>Encontraste {numOfPairsOnDeck} pares en {numberOfPairsSelected} intentos</p>
                <p onClick={() => {
                    startNewGame(numOfPairsOnDeck, rickCharacters)}}>
                        Volver a jugar
                </p>
            </div>
        </div>
    )
}

const connectActions = {
    startNewGame
}

const connectStore = store => ({
    rickCharacters: store.rickCharacters,
    numOfPairsOnDeck: store.game.numOfPairsOnDeck,
    numberOfPairsSelected: store.game.numberOfPairsSelected
})

export default connect(connectStore, connectActions)(WonModal)