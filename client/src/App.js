import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepageComponent';
import ShopPage from './pages/shop/shop';
import Checkout from './pages/checkout/checkout';
import Header from './components/header/header';
import SignInSignUp from './pages/signInSignUp/signInSignUp';
import { selectCurrentUser } from './redux/user/selector';
import { checkUserSession } from './redux/user/actions';
import { createStructuredSelector } from 'reselect';

import { GlobalStyle } from './global.styles';

const App = ({ dispatch, currentUser }) => {
    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch]);

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route exact path='/checkout' component={Checkout} />
                <Route
                    exact
                    path='/signin'
                    render={() =>
                        currentUser ? <Redirect to='/' /> : <SignInSignUp />
                    }
                />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
