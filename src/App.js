import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [quote, setQuote] = useState("");

    async function getQuote() {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();
        setQuote(data.quote + ' - ' + data.author);
    }

    useEffect(() => {
        fetch('https://dummyjson.com/quotes/random')
       .then(response => response.json())
       .then(data => setQuote(data.quote + ' - ' + data.author));
    }, []);

  return (
    <div className="App">
      <h2>{quote}</h2>
      <button onClick={getQuote}>Generate</button>
    </div>
  );
}

export default App;
