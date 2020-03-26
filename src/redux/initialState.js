const DEFAULT_INITIAL_PAIRS = 6

export default {
    loading: false,
    error: null,
    rickCharacters: null,
    cardSize: '70px',
    game : {
        numOfPairsOnDeck: DEFAULT_INITIAL_PAIRS, 
        deck: null,
        isFirstRender: true,
        pairSelected: [],
        cardsFounded: [],
        // numofPairsSelected counts every 'turn' a player has, 
        // every pair selected(doesnt matter if matches or not) will add 1 to the count
        numberOfPairsSelected: 0,
    }
}