import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import {useState} from 'react';
import axios from 'axios';

function App() {

    const [pokemon, setPokemon] = useState([])


    const getPokemons = () => {
      axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(res => {
          setPokemon(res.data.results);
          console.log(res.data.results)
        }
        )
        .catch (err => console.log(err))
    }


  return (
    <div className="App">
      <button onClick={getPokemons}>Fetch</button>

      <Post pokemon={pokemon}/>

    </div>
  );
}

export default App;
