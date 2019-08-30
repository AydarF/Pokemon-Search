import React from 'react';
import './App.css';
import PokemonSearch from './components/PokemonSearch';

const App = () => {
  return (
    <div className="App">
      <PokemonSearch name="Aydar" numberOfPokemons={10} />
    </div>
  );
}

export default App;
