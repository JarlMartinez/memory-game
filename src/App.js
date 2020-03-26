import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Settings from './components/Settings'
import Board from './components/Board'

import { bringRickCharacters } from './redux/actions'

const App = (props) => {

    const { bringRickCharacters,
            rickCharacters } = props

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

const connectStore = store => store

export default connect(connectStore, connectActions)(App)
