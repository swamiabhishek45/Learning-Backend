import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/jokes") // 
      .then((response) => {
        console.log(response);
        setJokes(response.data);
    })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    
    <>
    <h1>Chai piyo chai</h1>
    <p>JOKES: {jokes.length}</p>

    {
      jokes.map((joke) => {
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      })
    }
    </>
  )
}

export default App
