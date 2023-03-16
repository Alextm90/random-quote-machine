
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import './App.css'
import { useState } from 'react'

export default function Quote() {

  const quoteArray  = [
    {
      author: "- George C. Lichtenberg ",
      quote: "“It is strange that only extraordinary man-made the discoveries twitch later appear so easy and simple.”"
    },
    {
      author: "- William Blake ",
      quote: "“Art is the tree of life. Science is the tree of death.”"
    },
    {
      author: "- Edward Teller ",
      quote: "“The science of today is the technology of tomorrow.”"
    },
    {
      author: "- Steve Martin",
      quote: "“Science is just pure empiricism, and by virtue of its method, it excludes metaphysics.”"
    },
    {
      author: "- Arthur C. Clarke ",
      quote: "“I’m sure the universe is full of intelligent life. It’s just been too intelligent to come here.”"
    },
    {
      author: "- Richard Dawkins",
      quote: "“The feeling of awed wonder that science can give us is one of the highest experiences of which the human psyche is capable.”"
    },
    {
      author: "- Adam Smith",
      quote: "“Science is the great antidote to the poison of enthusiasm and superstition.”"
    },
    {
      author: "- Galileo Galilei",
      quote: "“In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.”"
    },
    {
      author: "- Albert Einstein",
      quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },

]

let arr = quoteArray[Math.floor(Math.random()*quoteArray.length)]

const [quote, setQuote] = useState(() => {
     return arr.quote
});

const [author, setAuthor] = useState(() => {
     return arr.author
})

const handleClick = () => {
  let arr = quoteArray[Math.floor(Math.random()*quoteArray.length)]
   setQuote(arr.quote)
   setAuthor(arr.author)
}

return (
  <div className="item" id="quote-box">
      <p id="text">{quote}</p>
      <br />
      <p id="author" >{author}</p>
      <button id="new-quote"  onClick={handleClick}>New Quote</button>
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote} ${author}`} target="_blank" rel="noreferrer" >
        <button  className="button"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></button>
      </a>
  </div>
)
}





