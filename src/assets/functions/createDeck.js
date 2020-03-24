import createDesorderedArray from './createDesorderedArray'

export default (pairsPlaying, characters, totalCharacters) => {
    //The min num in the array we create is 1 bc the id's of the characters begin from 1
    const randomArray = createDesorderedArray(pairsPlaying, 1, totalCharacters)
    const randomGame = randomArray.map(ran => {
        for (var i = 0; i < characters.length; i++) {
            if (ran === characters[i].id) {
                return characters[i]
            }
        }
    })

    const deck = []
    for (var i = 0; i < randomGame.length; i++) {
        deck.push(randomGame[i])
        deck.push(randomGame[i])
    }

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