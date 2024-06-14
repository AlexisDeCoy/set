const Shuffle = (array) => {
    // Shuffle array of n elements (indices 0..n-1):
    let currentIndex = array.length, randomIndex;

    // For currentIndex from n−1 to 1
    while (currentIndex > 0) {

        // randomIndex: 0 ≤ randomIndex ≤ currentIndex
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap array[currentIndex] and array[randomIndex] (destructured)
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
};

export default Shuffle;