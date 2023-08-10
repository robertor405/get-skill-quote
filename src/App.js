import React, {useEffect, useState} from 'react';
import './App.scss';

let quoteDBUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quote, setQuote] = useState("When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.")
  const [author, setAuthor] = useState("Erma Bombeck")



  //const OurquotesArray =[{quote: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", author:"Erma Bombeck"}
  //,{quote: "Either you run the day, or the day runs you.", author:"Johm Rinn"},{quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", author:"Henry Ford"}]


  const [randomNumber, setRandomNumber] = useState (0)

  const [quotesArray, setQuotesArray] = useState (null)

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
    console.log(parsedJSON)
   }


  useEffect(() => {
  
   fetchQuotes(quoteDBUrl)
  }, [quoteDBUrl])

  const generateRandomQuote = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random())
    setRandomNumber (randomInteger)
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
      <h1>Random Number: {randomNumber}</h1>
        <p id='text'>
         "{quote}"
        </p>
        <p id='author'>
          - {author}
        </p>
        <button id="new-quote" onClick={() => generateRandomQuote()}>Generate a Random Quote</button>
        <a id="tweet-quote" href={'http://www.twitter.com/intent/tweet?text=hello'}>Tweet Quote</a>
        </div>
      </header>
    </div>
  );
}

export default App;
