import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const quoteData = [
  { text: "Time is money", author: "Benjamin Franklin" },
  { text: "Time waits for no one", author: "Unknown author" },
  { text: "Time is the wisest counselor of all", author: "Pericles" },
  { text: "Punctuality is the thief of time", author: "Oscar Wilde, The Picture of Dorian Gray" },
  { text: "The key is in not spending time, but in investing it", author: "Stephen R. Covey" },
  { text: "It is the time you have wasted for your rose that makes your rose so important", author: "Antoine de Saint-Exupéry, The Little Prince" },
  { text: "Time is the most valuable thing a man can spend", author: "Theophrastus" },
  { text: "Better three hours too soon than a minute too late", author: "William Shakespeare" },
  { text: "Never leave till tomorrow that which you can do today", author: "Benjamin Franklin" },
  { text: "The two most powerful warriors are patience and time", author: "Leo Tolstoy" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Life, if well lived, is long enough", author: "Seneca" }
];

const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">"{quote.text}"</p>
    <h2 id="author">{quote.author}</h2>
    <div class="actions">
      <button
        id="new-quote"
        class="button"
        onClick={handleNewQuote}>
        New Quote
      </button>
      <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank">
        Tweet </a>
    </div>
    </div>  
);

const getRandomIndex = () =>
Math.round(Math.random() * ((quoteData.length - 1) - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }
  return (
  <div class="main">
    <QuoteBox quote={quote} handleNewQuote={handleNewQuote}/>
  </div>
)
}

ReactDOM.render(<App />, document.querySelector("#app"))