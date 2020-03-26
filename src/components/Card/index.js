import React, { useState } from 'react'
import { connect } from 'react-redux'

import { cardClicked } from '../../redux/actions'

import defaultCover from '../../assets/images/rym-redondo.png'

import './index.scss'

const Card = (props) => {

    const { char, cardSize, cardClicked, pairSelected, cardsFounded,
            data: {status, delay, isFirstRender} } = props

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
            setTimeout(() => {
                cardClicked(char, pairSelected, cardsFounded)
            }, 400)
        }
    }

    let initialAnimation

    if (isFirstRender) {
        initialAnimation = {
            opacity: 0,
            animation: 'entered .15s forwards',
            animationDelay: delay + 'ms'
        }
    }

    return (
        <div 
            className='cardFromDeck' 
            style={{
                width: cardSize,
                height: cardSize,
                ...initialAnimation
            }}
            onClick={handleClick}>
            <img src={cardState.cover}/>
        </div>
    )
} 

const connectActions = {
    cardClicked
}

const connectStore = (store) => ({
    pairSelected: store.game.pairSelected,
    cardsFounded: store.game.cardsFounded,
    cardSize: store.cardSize,
})

export default connect(connectStore, connectActions)(Card)