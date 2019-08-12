import React from 'react';
import './App.css';
import FilmBox from './containers/FilmBox'
import FilmLink from './components/FilmLink'

function App() {
  return (
    <div>
      <FilmBox/>
      <p>TEST TEXT</p>
      <FilmLink/>
    </div>
  );
}

export default App;
