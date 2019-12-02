import React from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './pages/homepage/home.styles.scss';
import ShopPage from  './components/shop/shop.component.jsx';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={ShopPage} />
      </Switch>
    </div>


  );
}

export default App;
