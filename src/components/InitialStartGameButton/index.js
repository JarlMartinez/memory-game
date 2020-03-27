import React from 'react'

import './index.scss'

const InitialStartGameButton = ({setHasGameStarted}) => {
    return (
        <div className='initialButton' 
            onClick={() => setHasGameStarted(true)}>
            <p>Start Game</p>
        </div>
    )
}

export default InitialStartGameButton