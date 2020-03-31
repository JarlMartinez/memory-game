import React from 'react'
import { connect } from 'react-redux'

import { showOrHideFoundedCars, changeLanguage } from '../../../redux/actions'

import spainFlag from '../../../assets/images/spain_flag.png'
import ukFlag from '../../../assets/images/uk_flag.png'

import './index.scss'

const Menu = (props) => {

    const { showBoardToSetSometting, changeLanguage,
            showOrHideFoundedCars, language,
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

    const positionOfButtonSwitchToggleLanguage = 
        language === 'spanish'
        ? 'translateX(30px)'
        : 'translateX(0)'

    let changeLanguageText, showFoundedCards, changeTheme,
        changeNumOfPairsToGuess, changeCardsSize
    
    switch (language) {
        case 'english':
            changeLanguageText = 'Cambiar a español'
            showFoundedCards = 'Show founded cards'
            changeTheme = 'Change theme'
            changeNumOfPairsToGuess = 'Change number of pairs to find'
            changeCardsSize = 'Change cards size'
            break
        case 'spanish':
            changeLanguageText = 'Switch to english'
            showFoundedCards = 'Mostrar cartas encontradas'
            changeTheme = 'Cambiar tema'
            changeNumOfPairsToGuess = 'Cambiar num de pares por encontrar'
            changeCardsSize = 'Cambiar tamaño de cartas'
            break
    }
    
    const settingsMenuTexts = {
        changeLanguageText,
        showFoundedCards,
        changeTheme,
        changeNumOfPairsToGuess,
        changeCardsSize
    }
    
    return (
        <div className='settingsMenu'>
            <div className='changeLanguageDiv' 
                onClick={e => {
                        e.stopPropagation()
                        changeLanguage()
                    }}>
                <p>{settingsMenuTexts.changeLanguageText}</p>
                <div className='switch languagewitch' >
                        <img className='spainFlag' 
                            src={spainFlag} 
                            alt='spainFlag for the language switch'/>
                        <img className='spainFlag' 
                            src={ukFlag} 
                            alt='ukFlag for the language switch'/>
                    <div className='switchButton languageSwitchButton'
                        style={{transform: positionOfButtonSwitchToggleLanguage}} />
                </div>
            </div>
            <div className='showHideFoundedCardsDiv' 
                onClick={e => {
                        e.stopPropagation()
                        showOrHideFoundedCars()
                    }}>
                <p>{settingsMenuTexts.showFoundedCards}</p>
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
                {settingsMenuTexts.changeTheme}</p>
            <p value='changeNumOfPairs'
                onClick={showBoardToSetSometting}>
                {settingsMenuTexts.changeNumOfPairsToGuess}</p>
            <p value='changeCardsSize'
                onClick={showBoardToSetSometting}>
                {settingsMenuTexts.changeCardsSize}</p>
        </div>
    )
}

const connectActions = {
    showOrHideFoundedCars,
    changeLanguage
}

const connectStore = store => ({
    language: store.language,
    displayingPairsFounded: store.game.displayingPairsFounded
})

export default connect(connectStore, connectActions)(Menu)