function longestWord(words) {
    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}