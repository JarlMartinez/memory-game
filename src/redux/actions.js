import axios from 'axios'
import createDeck from '../assets/functions/createDeck'

export const bringRickCharacters = () => async dispatch => {
    dispatch({
        type: 'LOADING'
    })
        await axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
            const characters = response.data.results 
            dispatch({
                type: 'BRING_RICK_CHARACTERS',
                payload: characters
            })
        })
        .catch(error => {
            const theError = "There's an error loading Rick and Morty characters :O" + error.message
            dispatch({
                type: 'ERROR',
                payload: theError
            })
        })
}

export const startNewGame = (numOfPairs, characters) => dispatch => {
    const newDeck = createDeck(numOfPairs, characters, characters.length)
    dispatch({
        type: 'START_NEW_GAME',
        payload: newDeck
    })
}

export const cardClicked = (char, pairSelected, cardsFounded) => dispatch => {
    if (pairSelected.length === 1) {
        if (pairSelected[0].id === char.id &&                                            
            pairSelected[0].key !== char.key) {
                dispatch({
                    type: 'CARD_CLICKED',
                    payload: {
                        type: 'new_pair_founded',
                        char: char
                    }
                })
        } else {
            dispatch({
                type: 'CARD_CLICKED',
                payload: {
                    type: 'pair_selected_doesnt_match',
                    char: char
                }
            })
        }
    } else {
        if (!cardsFounded.includes(char))
        dispatch({
            type: 'CARD_CLICKED',
            payload: {
                type: 'for_new_pair_selection',
                char: char
            }
        })
    }
}

export const changeTheme = themeIndex => dispatch => {
    dispatch({
        type: 'INDEX_THEME',
        payload: themeIndex
    })
}

export const changeNumOfPairsOnBoard = e => dispatch => {
    dispatch({
        type: 'NUM_OF_PAIRS_ON_BOARD',
        payload: e
    })
}

export const changeSizeOfCards = e => dispatch => {
    const size = e.target.attributes.value.value
    dispatch({
        type: 'SIZE_OF_CARD',
        payload: size
    })
}

export const showOrHideFoundedCars = () => dispatch => {
    dispatch({
        type: 'SHOW_HIDE_CARDS_FOUNDED'
    })
}