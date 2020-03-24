import React from 'react'

import './index.scss'
export default ({ newGame }) => {
    return (
        <div className='wonModalContainer'>
            <div className='wonModal'>
                <h1>Felicidades! Ganaste</h1>
                <p onClick={newGame}>Volver a jugar</p>
            </div>
        </div>
    )
}