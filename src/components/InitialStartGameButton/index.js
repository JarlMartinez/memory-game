import React from 'react'

import './index.scss'
import { connect } from 'react-redux'

const InitialStartGameButton = (props) => {

    const { setHasGameStarted, language } = props

    const text = language === 'spanish' ? 'Jugar' : 'Play'

    return (
        <div className='initialButton' 
            onClick={() => setHasGameStarted(true)}>
            <p>{text}</p>
        </div>
    )
}

const connectStore = store => ({
    language: store.language
})

export default connect(connectStore, null)(InitialStartGameButton) 