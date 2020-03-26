import React from 'react'

import './index.scss'
export default ({ newGame, tries }) => {
    return (
        <div className='wonModalContainer'>
            <div className='wonModal'>
                <h1>Ganaste</h1>
                <p>¡Lo lograste en {tries} intentos!</p>
                <p onClick={newGame}>Volver a jugar</p>
            </div>
        </div>
    )
}