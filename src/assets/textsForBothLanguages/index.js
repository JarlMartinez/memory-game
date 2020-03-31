import store from '../../redux/initialState'
import { connect } from 'react-redux'

const { language } = store

let changeLanguageText, showFoundedCards, changeTheme,
    changeNumOfPairsToGuess, changeCardsSize

    console.log(language)
switch (language) {
    case 'english':
        changeLanguageText = 'Cambiar a español'
        showFoundedCards = 'Show founded cards'
        changeTheme = 'Change theme'
        changeNumOfPairsToGuess = 'Change number of pairs to find'
        changeCardsSize = 'Change cards size'
    case 'spanish':
        changeLanguageText = 'Switch to english'
        showFoundedCards = 'Mostrar cartas encontradas'
        changeTheme = 'Cambiar tema'
        changeNumOfPairsToGuess = 'Cambiar num de pares por encontrar'
        changeCardsSize = 'Cambiar tamaño de cartas'
}

export const settingsMenuTexts = {
    changeLanguageText,
    showFoundedCards,
    changeTheme,
    changeNumOfPairsToGuess,
    changeCardsSize
}

