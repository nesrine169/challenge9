function countStringFrequency(strings) {
    return strings.reduce((frequency, string) => {
      
      if (frequency[string]) {
        frequency[string]++ ;
      } else {
        frequency[string] = 1 ;
      }
      return frequency;
    },
     {});
  }
  
  const inputArray = ["hello", "world", "hello"];
  const frequencyObject = countStringFrequency(inputArray);
  console.log(frequencyObject);
  