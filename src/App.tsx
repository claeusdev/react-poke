import React from 'react';
import './App.css';
import { Search } from './components/Search';

const App: React.FC = () => {
  return <div className="App">
    <Search name="Nana" numberOfPokemons={10} />
  </div>;
};

export default App;
