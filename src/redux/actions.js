import axios from 'axios'
import createDeck from '../assets/functions/createDeck'

export const bringRickCharacters = () => async dispatch => {
    dispatch({
        type: 'LOADING'
    })
        const MIN_NUM_OF_PAGES = 1
        const MAX_NUM_OF_PAGES = 24
        const randomPage = 
            Math.floor(Math.random() * (MAX_NUM_OF_PAGES - MIN_NUM_OF_PAGES + 1) ) + MIN_NUM_OF_PAGES 
        
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${randomPage}`)
            const characters = response.data.results
            dispatch({
                type: 'BRING_RICK_CHARACTERS',
                payload: characters
            })
        } catch (err) {
            const theError = "There's an error loading Rick and Morty characters :O" + err.message
            console.error(new Error('Error' + err))
            dispatch({
                type: 'ERROR',
                payload: theError
            })

        }
}

export const startNewGame = (numOfPairs, characters) => dispatch => {
    const newDeck = createDeck(numOfPairs, characters)
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