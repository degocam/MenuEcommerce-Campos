import React from 'react';
import './App.css';
import NavBar from './components/NavBar/';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './pages';
import Peliculas from './pages/peliculas';
import Series from './pages/series';
import Libros from './pages/libros';
import Comics from './pages/comics';
import Musica from './pages/musica';
import Sigin from './pages/sigin';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path ="/" exact component={Home} />
        <Route path ="/peliculas" component={Peliculas} />
        <Route path ="/series" component={Series} />
        <Route path ="/libros" component={Libros} />
        <Route path ="/comics" component={Comics} />
        <Route path ="/musica" component={Musica} />
        <Route path ="/sigin" component={Sigin} />
      </Switch>
    </Router>
  );
}

export default App;
