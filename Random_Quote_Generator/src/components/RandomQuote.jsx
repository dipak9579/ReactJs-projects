import React, { useEffect,useState } from 'react'
import './RandomQuote.css'
import axios from 'axios'

const RandomQuote = () => {

    const [quote,setQuote]=useState("");
    const [error,setError]=useState(null);

     // Function to fetch a random quote
  const fetchQuote = async () => {
    try {
     const response = await axios.get('https://type.fit/api/quotes');
      setQuote(response.data.content);
     
    } catch (error) {
      setError(error.message)
    }
  };

   // Fetch a quote when the component mounts
   useEffect(() => {
    fetchQuote();
  }, []);


    return (
        <div className="align-box">
        <div className='container'>
            {error?(<p>Error:{error}</p>):
            (  <p>"{quote}"</p>)}
            <button onClick={fetchQuote}>Next</button>
        </div>
        </div>
    )
}

export default RandomQuote
