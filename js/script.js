/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`, 
    source: 'Dr. Seuss',
    citation: 'goodreads'
  },
  {
    quote:'You only live once, but if you do it right, once is enough.',
    source:'Mae West'
  },
  {
    quote:'Great leaders are almost always great simplifiers, who can cut through argument, debate, and doubt to offer a solution everybody can understand.', 
    source:'Colin Powell, US general and statesman'
  },
  {
    quote: `You miss 100 percent of the shots you don't take.`, 
    source:'Wayne Gretzky',
    citation: 'The Hockey News',
    year: 1983
  },
  {
    quote:'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    source:'Albert Einstein',
    year: 1930
  }
];

/***
 * `getRandomQuote` function
***/


function getRandomQuote() {
  return Math.floor(Math.random() * quotes.length) 
}


/***
 * `printQuote` function
***/


function printQuote() {
  const randomIndex = getRandomQuote();
  const randomQuote = `${quotes[randomIndex].quote}`;
  let html = `<p class="quote">${randomQuote}</p>
              <p class="source">quote source </p>`

  document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.addEventListener('DOMContentLoaded', function() { printQuote();});