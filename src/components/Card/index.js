import React, { useState } from 'react'
import { connect } from 'react-redux'

import { cardClicked } from '../../redux/actions'

import defaultCover from '../../assets/images/rym-redondo.png'

import './index.scss'

const Card = (props) => {

    const { char, cardSize, pairSelected, cardsFounded,
            displayingPairsFounded, cardClicked, deck,
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
        if (status === 'normal'|| status === 'selected') {
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

    let styles

    const initialAnimation = {
        opacity: 0,
        animation: 'entered .15s forwards',
        animationDelay: delay + 'ms'
    }

    if (isFirstRender) {
        styles = {
            ...initialAnimation
        }
    }
    if (status === 'founded' ) {
        styles = {
            opacity: 1,
            cursor: 'default'
        }
        if (!displayingPairsFounded) {
            styles = {
                opacity: 0,
                cursor: 'default'
            }
        }
    }

    if (cardsFounded.length === deck.length) {
        styles = {
            opacity: 1
        }
    }

    const opacityOfDefault = cardState.isFlippedUp ? 0 : 1
    const opacityOfCharCover = cardState.isFlippedUp ? 1 : 0

    return (
        <div 
            className='cardFromDeck' 
            style={{
                width: cardSize,
                height: cardSize,
                ...styles
            }}
            onClick={handleClick}>
            {/* I chose to place two images and change opacities so char.image gets
            loaded rigth away when page laods. Faster */}
            <img style={{opacity: opacityOfCharCover}} src={char.image}/>
            <img style={{opacity: opacityOfDefault}} src={defaultCover}/>
        </div>
    )
} 

const connectActions = {
    cardClicked
}

const connectStore = (store) => ({
    deck: store.game.deck,
    displayingPairsFounded: store.game.displayingPairsFounded,
    pairSelected: store.game.pairSelected,
    cardsFounded: store.game.cardsFounded,
    cardSize: store.cardSize,
})

export default connect(connectStore, connectActions)(Card)