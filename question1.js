function averageOfEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(number => number % 2 === 0);
    const sumOfEvenNumbers = evenNumbers.reduce((acc, number) => acc + number, 0);

    const average = sumOfEvenNumbers / evenNumbers.length;
  
    return average;
  }
  
  
  const numbers = [2, 4, 3, 9, 7, 6, 5, 8];
  const result = averageOfEvenNumbers(numbers);
  console.log(result); 