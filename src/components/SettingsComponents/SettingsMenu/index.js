import React from 'react'
import { connect } from 'react-redux'

import { showOrHideFoundedCars } from '../../../redux/actions'

import './index.scss'

const Menu = (props) => {

    const { showBoardToSetSometting,
            showOrHideFoundedCars,
            displayingPairsFounded } = props


    const onShowOrHideCardsFounded = displayingPairsFounded
        ?{
            onOrOffText: 'on',
            switchButtonPosition: {
                transform: 'translateX(30px)',
            },
            switchStyles: {
                backgroundColor: 'rgb(51, 51, 51)'
            }
        }
        :{
            onOrOffText: 'off',
            switchButtonPosition: {
                transform: 'translateX(0)'
            },
            switchStyles: {
                backgroundColor: 'rgb(150, 150, 150)'
            }
        }

    return (
        <div className='settingsMenu'>
            <div className='showHideFoundedCardsDiv' 
                onClick={e => {
                        e.stopPropagation()
                        showOrHideFoundedCars()
                    }}>
                <p>Show founded cards</p>
                <div className='switch' 
                    style={{...onShowOrHideCardsFounded.switchStyles}}>
                    <div className='switchButton'
                        style={{...onShowOrHideCardsFounded.switchButtonPosition}}>
                        {onShowOrHideCardsFounded.onOrOffText}
                    </div> 
                </div>
            </div>
            <p value='changeTheme'
                onClick={showBoardToSetSometting}>
                Change theme</p>
            <p value='changeNumOfPairs'
                onClick={showBoardToSetSometting}>
                Change number of pairs to guess</p>
            <p value='changeCardsSize'
                onClick={showBoardToSetSometting}>
                Change cards size</p>
        </div>
    )
}

const connectActions = {
    showOrHideFoundedCars
}

const connectStore = store => ({
    displayingPairsFounded: store.game.displayingPairsFounded
})

export default connect(connectStore, connectActions)(Menu)