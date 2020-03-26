import React from 'react'
import { connect } from 'react-redux'

import { changeNumOfPairsOnBoard } from '../../../redux/actions'

import './index.scss'
const Board = ({ changeNumOfPairsOnBoard, numOfPairsOnDeck}) => {

    const options = [4, 6, 8, 10, 12, 14, 16, 18, 20]

    return (
        <div className='selectNumOfPairsBoard'>
            {options.map((val, i) => {
                const classSelec = val === numOfPairsOnDeck ? 'currentSetting' : ''
                return(
                    <div
                    key={i}
                    onClick={() => {
                        changeNumOfPairsOnBoard(val)
                    }}
                    className={classSelec}>
                        {val}
                    </div>
                )
            })}
        </div>
    )
}

const connectActions = {
    changeNumOfPairsOnBoard
}

const connectStore = store => ({
    numOfPairsOnDeck: store.game.numOfPairsOnDeck
})

export default connect(connectStore, connectActions)(Board)