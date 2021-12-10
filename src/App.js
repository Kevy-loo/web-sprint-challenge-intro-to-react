import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Starwars from './components/Character';

const App = () => {
  const [characters, setCharacters] = useState([]);
  console.log(characters)
 

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then((res) => {
        // console.log(res.data[0])
        setCharacters(res.data)
      }).catch(err => console.log(err))
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div> 
        {
          characters.map((character) => {
            return <Starwars {...character}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
