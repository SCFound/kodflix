import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Technologies from './Technologies';
import Details from './Details';

import './App.css';
import { statement } from '@babel/template';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Technologies} />
          <Route exact path='/:details' component={Details} />
          <Technologies />
        </div>
      </Router>
    );
  }
}

export default App;
