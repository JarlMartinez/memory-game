import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import InitialStartGameButton from './components/InitialStartGameButton'
import Settings from './components/Settings'
import Board from './components/Board'

import { bringRickCharacters } from './redux/actions' 

const App = (props) => {

    const { themes, currentThemeIndex,
            bringRickCharacters,
            rickCharacters } = props

    const [hasGameStarted, setHasGameStarted] = useState(false)
    
    document.body.style.background = themes[currentThemeIndex].gradient
    
    useEffect(() => {
        if (!rickCharacters) {
            bringRickCharacters()
        }
    }, [])

    return(
        <>
            <Settings /> 
            {!hasGameStarted && 
                <InitialStartGameButton setHasGameStarted={setHasGameStarted}/>}
            {hasGameStarted && <Board />}
        </>
    )
}

const connectActions = {
    bringRickCharacters   
}

const connectStore = store => ({
    themes: store.themes,
    currentThemeIndex: store.currentThemeIndex,
    rickCharacters: store.rickCharacters
})

export default connect(connectStore, connectActions)(App)
