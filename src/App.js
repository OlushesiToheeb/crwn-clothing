import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepageComponent';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import signInSignUp from './pages/signInSignUp/signInSignUp';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={signInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
