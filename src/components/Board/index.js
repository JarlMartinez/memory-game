import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Loader from '../Loader'
import Card from '../Card'

import './index.scss'

// export default ({status, setStatus, cardClicked}) => {
const Board = (props) => {

    const { cardClicked,
            boardStatus,
            setBoardStatus,
            rickCharacters, 
            loading, error} = props

    const displayDeck = () => {
        if (boardStatus.deck) {
            console.log('el board recibe dec')
            return (
                boardStatus.deck.map((char, i) => (
                    <Card key={i} char={char} delay={i * 100} cardClicked={cardClicked}/>
                    ))
                )
            }
        }

    const displayStatus = () => {
        if(loading) {
            return <Loader />
        }
        if(error) {
            return (
            <>
                <h1>Hubo un error :O</h1>
                <p>{error}</p>
            </>
            )
        }
        return
    }

    return (
        <div className='board'>
            {displayStatus()}
            {rickCharacters && displayDeck()}
        </div>
    )

}

const connectReducers = store => store

export default connect(connectReducers, null)(Board)