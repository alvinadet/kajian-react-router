import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './counter/Home';
import Header from './components/Header';
import Contact from './counter/Contact';
import List from './counter/List';
import { Route } from 'react-router-dom';
import Detail from './counter/Detail';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact={true} component={Home} />
        <Route path="/list" component={List} />
        <Route path="/contact" component={Contact} />
        <Route path="/detail/:nama" component={Detail} />
      </div>
    );
  }
}

export default App;
