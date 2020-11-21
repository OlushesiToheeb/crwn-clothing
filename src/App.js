import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepageComponent';
import ShopPage from './pages/shop/shop';
import Checkout from './pages/checkout/checkout';
import Header from './components/header/header';
import SignInSignUp from './pages/signInSignUp/signInSignUp';
import { selectCurrentUser } from './redux/user/selector';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInSignUp />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
