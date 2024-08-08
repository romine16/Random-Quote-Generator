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
    citation: 'goodreads',
    tags: ['Inspiration', 'Dreamy']
  },
  {
    quote:'You only live once, but if you do it right, once is enough.',
    source:'Mae West',
    tags: ['Inspiration', 'Movitation']
  },
  {
    quote:'Great leaders are almost always great simplifiers, who can cut through argument, debate, and doubt to offer a solution everybody can understand.', 
    source:'Colin Powell, US general and statesman',
    tags: ['Inspiration', 'Military']
  },
  {
    quote: `You miss 100 percent of the shots you don't take.`, 
    source:'Wayne Gretzky',
    citation: 'The Hockey News',
    year: 1983,
    tags: ['Inspiration', 'Movitation', 'Wrestling']
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

/*get random rgb color value*/
const randomValue = () => Math.floor(Math.random() * 256);

/*fuction to set the RGB values with random values*/
function randomRGB(value) {
  const color = `rgb( ${value()}, ${value()}, ${value()} )`; 
  return color;
}

/*Get body element and will update with random color value*/
var body = document.querySelector('body');

/***
 * `printQuote` function
***/
function printQuote() {
  const randomIndex = getRandomQuote();
  const quoteData = quotes[randomIndex];

  /*Start building new html string with quote info*/
  let html = `<p class="quote">${quoteData.quote}</p>
              <p class="source"> ${quoteData.source}`
  
  /*Condition to check if citation is populated, if so add to span*/
  if (quoteData.citation) {
    html +=  `<span class="citation" > ${quoteData.citation} </span>`
  }

  /*Condition to check if year is populated, if so add to span*/
  if (quoteData.year) {
    html +=  `<span class="citation" font-color => ${quoteData.year} </span>`
  }

  /*Condition to check if tags are populated, if so add to span*/
  if (quoteData.tags) {
    html +=  `<span class="citation"> ${quoteData.tags.join(', ')} </span>`
  }

  /*close paragraph tag */
  html += `</p>`
  
  /*Get new background colors*/
  htmlBackground = `${randomRGB(randomValue)} `
  
  /*Inject new random background color value*/
  body.style.backgroundColor = htmlBackground ;

  /*replace quote-box with html string*/
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

/*timer job to run printQuote every 15 seconds*/
setInterval(printQuote, 15000);