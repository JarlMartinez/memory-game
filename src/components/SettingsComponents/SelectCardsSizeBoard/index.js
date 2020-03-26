import React from 'react'
import { connect } from 'react-redux'

import { changeSizeOfCards } from '../../../redux/actions'

import './index.scss'

const Board = ({changeSizeOfCards, cardSize}) => {

    const sizes = [
        {
            percent: '25%',
            pixels: '50px',
        },
        {
            percent: '50%',
            pixels: '70px',
        },
        {
            percent: '75%',
            pixels: '100px',
        },
        {
            percent: '100%',
            pixels: '140px',
        },
    ]

    return (
        <div className='selectCardsSizeBoard'>
            {sizes.map((size, i) => {
                const optionClass = size.pixels === cardSize ? 'currentSetting' : ''
                return (
                <div
                key={i}
                className={optionClass}
                onClick={changeSizeOfCards}
                value={size.pixels}>
                    {size.percent}    
                </div>
            )
            })}
        </div>
    )
}

const connectActions = {
    changeSizeOfCards
}

const connectStore = store => ({
    cardSize: store.cardSize
})

export default connect(connectStore, connectActions)(Board)