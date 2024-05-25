function averageOfEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);
    return evenNumbers.length === 0 ? 0 : sum / evenNumbers.length;
}