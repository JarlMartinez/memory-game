import React, { useState, useEffect } from 'react'

import defaultCover from '../../assets/images/rym-redondo.png'

import './index.scss'

export default (props) => {

    const { char, cardClicked, status, dataForAnimation } = props

    const [cardState, setCardState] = useState(() => {
        if (status === 'founded' || status === 'selected') {
            return ({
                isFlippedUp: true,
                cover: char.image
            })
        } else {
            return ({
                isFlippedUp: false,
                cover: defaultCover
            })
        }
    })

    let classForCard = 'cardFromDeck'

    const handleClick = () => {
        classForCard ='cardFromDeck clicked'
        if (status === 'normal') {
            setTimeout(() => cardClicked(char), 300)
    
            if(cardState.isFlippedUp) {
                setCardState({
                    isFlippedUp: false,
                    cover: defaultCover
                })
            }
            if (!cardState.isFlippedUp) {
                setCardState({
                    isFlippedUp: true,
                    cover: char.image
                })
            }
        }
        if (status === 'selected') {
            setTimeout(() => cardClicked(char), 300)
        }
    }

    let initialAnimation

    if (dataForAnimation.firstRender) {
        initialAnimation = {
            opacity: 0,
            animation: 'entered .2s forwards',
            animationDelay: dataForAnimation.delay + 'ms'
        }
    }

    return (
        <div 
            className='cardFromDeck' 
            style={{...initialAnimation}}
            onClick={handleClick}>
            <img src={cardState.cover}/>
        </div>
    )
} 