import React from 'react';
import './App.css';
import { Search } from './components/Search';

const App: React.FC = () => {
  return <div className="mw9 center pa4 pt5-ns ph7-l">
    <Search title="Welcome to React-poke" />
  </div>;
};

export default App;
