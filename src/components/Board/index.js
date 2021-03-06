import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import WonModal from '../PlayerWonModal'
import Loader from '../Loader'
import Card from '../Card'

import { startNewGame } from '../../redux/actions'

import './index.scss'

const Board = (props) => {

    const { loading, error, rickCharacters,
            game: {cardsFounded, pairSelected, deck, numOfPairsOnDeck,
                isFirstRender}, startNewGame } = props

    //Start a game(create newDeck):
    //  *if rickCharacters are already here,
    //      and be aware when they arrive, thats why they're in [useEffect]
    //  *if player wants to play dif num of pairs
    useEffect(() => {
        if (rickCharacters) {
            startNewGame(numOfPairsOnDeck, rickCharacters)
        }
    }, [numOfPairsOnDeck, rickCharacters])

    const AllCards = () => {
        return(
            deck.map((char, i) => {

                let status 
                if (cardsFounded.includes(char)) {
                    status = 'founded'
                } else if (pairSelected.includes(char)) {
                    status = 'selected'
                } else {
                    status = 'normal'
                }
                const data = {
                    isFirstRender: isFirstRender,
                    delay: i * 70,
                    status: status
                }
                const renderId = Math.random()
                return (
                    <Card
                    key={renderId + char.key}                                                                                                                                                                       
                    data={data}
                    char={char}/>
                )
            })
        )
    }

    const displayContent = () => {
        if(loading) return <Loader />
        
        if(deck) return <AllCards />

        if(error) {
            return (
            <>
                <h1>Hubo un error :O</h1>
                <p>{error}</p>
            </>
            )
        }
    }

    let playerWon = false

    if (deck && cardsFounded.length) {
        playerWon = deck.length === cardsFounded.length ? true : false
    }

    // const setBoardWidth = () => {
    //     if (deck) {
    //         let boardWidth, baordHeight
    //         const CARD_MARGIN = 5
    //         const sqrtOfTotal = Math.sqrt(deck.length) + 1
    //         const cardWidth = parseInt(cardSize) + (CARD_MARGIN * 2)
    //         const windowWidth = window.innerWidth
    //         const windowHeight = window.innerHeight
    //         boardWidth = sqrtOfTotal * cardWidth
    //         if ()
    //         return 
    //     }
    // }

    return (
        <div className='board'>
            {displayContent()}
            {playerWon && 
                <WonModal />}
        </div>
    )
}

const connectActions = {
    startNewGame
}

const connectReducers = store => ({
    loading: store.loading,
    error: store.error,
    rickCharacters: store.rickCharacters,
    cardSize: store.cardSize,
    game: store.game
})

export default connect(connectReducers, connectActions)(Board)