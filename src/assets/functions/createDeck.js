import createDesorderedArray from './createDesorderedArray'

export default (pairsPlaying, characters) => {
    // The total characters will always be 20, tahts what every request brings
    const TOTAL_CHARACTERS = 20
    // The min ID es dif on every page, we need to know the id of the first character 
    // and then we just add 20 to know the last id
    const minID = characters[0].id
    // We add 19 bc the id of the 20th character is 19 nums ahead
    const maxID = minID + 19
    // First we choose a the random characters that will play on deck 
    console.log(minID)
    const randomArray = createDesorderedArray(pairsPlaying, minID, maxID)
    const randomGame = randomArray.map(ran => {
        for (var i = 0; i < TOTAL_CHARACTERS; i++) {
            if (ran === characters[i].id) {
                return characters[i]
            }
        }
    })

    // Now we fill the deck with dobles of each character
    const deck = []
    for (var i = 0; i < randomGame.length; i++) {
        deck.push(randomGame[i])
        deck.push(randomGame[i])
    }

    // Now we desorder the created deck
    const desorderedIndexesForDeck = createDesorderedArray(deck.length, 0, (deck.length - 1))

    const desorderedDeck = []
    deck.forEach((char, i) => {
        desorderedDeck[desorderedIndexesForDeck[i]] = {
            key: i + 1,
            ...char
        }
    })

    // console.log('el deck', deck)
    // console.log('los index', desorderedIndexesForDeck)

    return desorderedDeck
}