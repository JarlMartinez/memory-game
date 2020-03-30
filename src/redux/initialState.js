const DEFAULT_INITIAL_PAIRS = 6
const MIN_INDEX_OF_THEMES = 0
const MAX_INDEX_OF_THEMES = 8

const randomIndexForTheme = 
    Math.floor(Math.random() * (MAX_INDEX_OF_THEMES - MIN_INDEX_OF_THEMES + 1) ) + MIN_INDEX_OF_THEMES

export default {
    loading: false,
    error: null,
    rickCharacters: null,
    currentThemeIndex: randomIndexForTheme,
    cardSize: '100px',
    game : {
        displayingPairsFounded: false,
        numOfPairsOnDeck: DEFAULT_INITIAL_PAIRS, 
        deck: null,
        isFirstRender: true,
        pairSelected: [],
        cardsFounded: [],
        // numofPairsSelected counts every 'turn' a player has, 
        // every pair selected(doesnt matter if matches or not) will add 1 to the count
        numberOfPairsSelected: 0,
    },
    themes: [
        {
            name: 'Bloody mary',
            gradient: 'linear-gradient(to top, #ff512f, #dd2476)'
        },
        {
            name: 'Aqua',
            gradient: 'linear-gradient(to top, #1a2980, #26d0ce)'
        },
        {
            name: 'Kye Meh',
            gradient: 'linear-gradient(to top, #8360c3, #2ebf91)'
        },
        {
            name: 'Kyoo Pal',
            gradient: 'linear-gradient(to top, #dd3e54, #6be585)'
        },
        {
            name: 'Emerald water',
            gradient: 'linear-gradient(to top, #348f50, #56b4d3)'
        },
        {
            name: 'Armonic energy',
            gradient: 'linear-gradient(to top, #16a085, #f4d03f)'
        },
        {
            name: 'Nimvelo',
            gradient: 'linear-gradient(to top, #314755, #26a0da)'
        },
        {
            name: 'Sea blue',
            gradient: 'linear-gradient(to top, #2b5876, #4e4376)'
        },
        {
            name: 'Fire',
            gradient: 'linear-gradient(to top, #f12711, #f5af19)'
        }
    ]
}
