function findLongestWord(words) {
   
    if (words.length === 0) {
      return null; 
    }
  
    
    return words.reduce((longest, current) => {
      
      return current.length > longest.length ? current : longest;
    }, words[0]);
  }
  
  
  const wordArray = ["algeria", "palestine", "libya", "iran"];
  const longestWord = findLongestWord(wordArray);
  console.log(longestWord); 