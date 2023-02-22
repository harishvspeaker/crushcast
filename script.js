const quotes = [
    "apple is a fruit you are cute",
    "apple is used to make a tart , even with a candy shop , you are the sweetest part of my heart ",
    "even without gravity i will still fall for you ",
    "even when  world is full of chase ,your smile is enough to brighen my face   ",
    "your smile is the only curve which sets everything staright ",
    "even with 56252 starts , your face glows the brighest  ",
    "even with beauty and the beast , the ocassion of your presence is worth the feast ",
    " for the pages of the book , iam your knight !! darling can you be my rook  ",
    

  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteElement = document.getElementById("quote");
    quoteElement.innerHTML = quote;
  }
  
  const newQuoteButton = document.getElementById("new-quote");
  newQuoteButton.addEventListener("click", generateQuote);
  
  generateQuote();