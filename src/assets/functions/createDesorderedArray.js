export default (len, min, max) => {
    if (min === null) {
        min = 0
    }
    if (max === null) {
        max = len
    }
    if (min >= max ) {
        console.log('Imposible realizar array')
        return
    }
    const array = []
    while (array.length !== len) {
        //that math function will generate a number between min and max both included
        const index = Math.floor(Math.random() * (max - min + 1)) + min
        if (!array.includes(index)) {
            array.push(index)
        }
    }
    return array
}