import React, { useState } from 'react'

import cardCover from '../../assets/images/rym-redondo.png'

import './index.scss'

export default ({char, delay}) => {

    const [cardState, setCardState] = useState({
        isFlippedUp: false,
        image: cardCover
    })

    const handleClick = () => {
        if (cardState.isFlippedUp) {
            setCardState({
                isFlippedUp: false,
                image: cardCover
            })
        }
        if (!cardState.isFlippedUp) {
            setCardState({
                isFlippedUp: true,
                image: char.image
            })
        }
    }

    return (
        <div 
            className='cardFromDeck' 
            style={{animationDelay: delay + 'ms'}}
            onClick={handleClick}>
            {/* <p>{char.name}</p> */}
            <img src={cardState.image}/>
        </div>
    )
} 