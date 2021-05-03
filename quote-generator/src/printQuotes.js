import React, { useState } from 'react';
import  {quotes} from './rawQuotes.json';
import './quotes.css'


export default function PrintQuotes() {
    let [phrase, setPhrase] = useState(0);

     const randomPhrase = () => {
        phrase = Math.floor(Math.random() * quotes.length);
        setPhrase(phrase);
    }

    return (
        <div>
            <h2 className="quote">{quotes[phrase].quote}</h2>
            <h4 className="author-name">-{quotes[phrase].author}</h4>

            <div className="t-button">
                <button>Tweet</button>
            </div>

            <div className="n-button">
                <button onClick={randomPhrase}>Next</button>
            </div>
        </div>
        
    )

}


