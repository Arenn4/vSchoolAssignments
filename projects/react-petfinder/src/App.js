import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './components/Home';
import About from './components/About';
import Pets from './components/Pets';

import './styles.css';

class App extends Component {


  render() {
    return (
      <div className='pageContainer'>
        <Navbar />
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/about' component={ About }/>
            <Route path='/pets' component={ Pets }/>
          </Switch>
        <Footer />

      </div>
    );
  }
}

export default (App);
