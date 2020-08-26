import React from 'react';

import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from './Checkout';
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
          <Header/>
            <h1>login</h1>
          </Route>
          <Route path="/checkout">
             <Header/>
             <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
              <Home/>

          </Route>

        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
