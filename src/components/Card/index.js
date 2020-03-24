import React, { useState, useEffect } from 'react'
import { connct, connect } from 'react-redux'

import defaultCover from '../../assets/images/rym-redondo.png'

import './index.scss'

const Card = (props) => {

    const { char, cardClicked, cardSize,
            data: {status, delay, isFirstRender} } = props

    // console.log(props)
    // The card initialize its state depending if
    // already has been founded, its currently selected, or neither
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

    const handleClick = () => {
        if (status === 'normal'|| 'selected') {
            if (status === 'normal') {
                    setCardState({
                        isFlippedUp: true,
                        cover: char.image
                    })
            }
            setTimeout(() => cardClicked(char), 300)
        }
    }

    let initialAnimation

    if (isFirstRender) {
        initialAnimation = {
            opacity: 0,
            animation: 'entered .2s forwards',
            animationDelay: delay + 'ms'
        }
    }

    let cardSize2 = {
        width: cardSize,
        height: cardSize
    }

    return (
        <div 
            className='cardFromDeck' 
            style={{
                width: cardSize2.width,
                height: cardSize2.height,
                ...initialAnimation
            }}
            onClick={handleClick}>
            <img src={cardState.cover}/>
        </div>
    )
} 

const connectStore = (store) => store

export default connect(connectStore, null)(Card)