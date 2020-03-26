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
        case 'START_NEW_GAME':
            return {
                ...state,
                game: {
                    ...state.game,
                    deck: action.payload,
                    isFirstRender: true,
                    pairSelected: [],
                    cardsFounded: [],
                    numberOfPairsSelected: 0,
                }
            }
        case 'CARD_CLICKED':
            switch (action.payload.type) {
                case 'new_pair_founded': 
                    return {
                        ...state,
                        game: {
                            ...state.game,
                            cardsFounded: [...state.game.cardsFounded, ...state.game.pairSelected, action.payload.char],
                            pairSelected: [],
                            numberOfPairsSelected: state.game.numberOfPairsSelected + 1,
                        }
                    }
                case 'pair_selected_doesnt_match': 
                    return {
                        ...state,
                        game: {
                            ...state.game,
                            pairSelected: [],
                            numberOfPairsSelected: state.game.numberOfPairsSelected + 1
                        }
                    }
                case 'for_new_pair_selection': {
                    return {
                        ...state,
                        game: {
                            ...state.game,
                            isFirstRender: false,
                            pairSelected: [action.payload.char]
                        }
                    }
                }
            }
        case 'NUM_OF_PAIRS_ON_BOARD': 
            return {
                ...state,
                game: {
                    ...state.game,
                    numOfPairsOnDeck: action.payload
                }
            }
        case 'SIZE_OF_CARD':
            return {
                ...state,
                cardSize: action.payload,
                game: {
                    ...state.game,
                    isFirstRender: false,
                }
            }
        default:
            return {
                ...state
            }
    }

}