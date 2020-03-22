import axios from 'axios'

import createDeck from '../assets/functions/createDeck'
import initialState from '../initialState'

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
            // const deck = createDeck(initialState.pairsPlaying, characters, characters.length)
            // dispatch({
            //     type: 'NEW_DECK',
            //     payload: deck
            // })
        })
        .catch(error => {
            const theError = "There's an error loading Rick and Morty characters :O" + error.message
            dispatch({
                type: 'ERROR',
                payload: theError
            })
        })
}

// export const changePairsOnBoard = e => dispatch => {
//     console.log(e)
//     dispatch({
//         type: 'CHANGE_PAIRS_ON_BOARD',
//         payload: e
//     })
// }
