import React, { useState, useEffect } from 'react'

import cardCover from '../../assets/images/rym-redondo.png'

import './index.scss'

export default (props) => {

    const {char, delay, cardClicked, game} = props
    const shouldShow = game.pairsFounded.includes(char) ? true : false

    const [cardState, setCardState] = useState({
        isFlippedUp: false,
        image: shouldShow ? char.image : cardCover
    })

    // Restore values every time char values change
    useEffect(() => {
        setCardState({
            isFlippedUp: false,
            image: cardCover
        })
    }, [char])

    const handleClick = () => {
        cardClicked(char)
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