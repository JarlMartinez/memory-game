import axios from 'axios'

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

export const changeSizeOfCards = size => dispatch => {
    dispatch({
        type: 'SIZE_OF_CARD',
        payload: size
    })
}
