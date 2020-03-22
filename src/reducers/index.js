export default (state, action) => {

    switch(action.type) {
        case 'ERROR': 
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'LOADING': 
            return {
                ...state,
                loading: true
            }
        case 'BRING_RICK_CHARACTERS':
            return {
                ...state,
                loading: false,
                rickCharacters: action.payload
            }
        default:
            return {
                ...state
            }
    }

}