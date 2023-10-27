function averagePagesPerBook(books) {
    if (books.length === 0) {
      return 0; 
    }
  
    
    const pagesArray = books.map(book => book.pages);
  
    
    const totalPages = pagesArray.reduce((accumulator, current) => accumulator + current, 0);
  
    
    const average = totalPages / books.length;
  
    return average;
  }
  
  const books = [
    { title: "Book 1", author: "Auteur 1", pages: 100 },
    { title: "Book 2", author: "Auteur 2", pages: 400 },
    { title: "Book 3", author: "Auteur 3", pages: 350 }
  ];
  
  const averagePages = averagePagesPerBook(books);
  console.log(averagePages);
  