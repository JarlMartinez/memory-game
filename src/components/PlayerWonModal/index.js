import React from 'react'
import { connect } from 'react-redux'

import { startNewGame } from '../../redux/actions'

import './index.scss'

const WonModal = (props) => {

    const { rickCharacters, numberOfPairsSelected,
            startNewGame, numOfPairsOnDeck, language } = props

    let playAgainText, congratsText, infoText1, infoText2, infoText3
    
    switch (language) {
        case 'spanish':
            playAgainText = 'Jugar de nuevo'
            congratsText = 'Ganaste!'
            infoText1 = 'Encontraste '
            infoText2 = ' pares en '
            infoText3 = ' intentos'
            break
        case 'english':
            playAgainText = 'Play again'
            congratsText = 'Congrats!'
            infoText1 = 'You found '
            infoText2 = ' pairs within '
            infoText3 = ' tries'
            break
    }

    return (
        <div className='wonModalContainer' >
            <div className='wonModal'>
                <h1>{congratsText}</h1>
                <p>{infoText1}{numOfPairsOnDeck}{infoText2}{numberOfPairsSelected}{infoText3}</p>
                <p onClick={() => {
                    startNewGame(numOfPairsOnDeck, rickCharacters)}}>
                        {playAgainText}
                </p>
            </div>
        </div>
    )
}

const connectActions = {
    startNewGame
}

const connectStore = store => ({
    language: store.language,
    rickCharacters: store.rickCharacters,
    numOfPairsOnDeck: store.game.numOfPairsOnDeck,
    numberOfPairsSelected: store.game.numberOfPairsSelected
})

export default connect(connectStore, connectActions)(WonModal)