import React from 'react';
import './App.css';
import Navbar from './components/NavSearch';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About'
import Home from './components/FoodList'
import Footer from './components/Footer'
import SearchResult from './components/SearchResult'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/searchResult' component={SearchResult} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
