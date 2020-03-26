import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Settings from './components/Settings'
import Board from './components/Board'

import { bringRickCharacters } from './redux/actions' 

const App = (props) => {

    const { themes, currentThemeIndex,
            bringRickCharacters,
            rickCharacters } = props

    document.body.style.background = themes[currentThemeIndex].gradient

    useEffect(() => {
        if (!rickCharacters) {
            bringRickCharacters()
        }
    }, [])

    return(
        <>
            <Settings /> 
            <Board />
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
