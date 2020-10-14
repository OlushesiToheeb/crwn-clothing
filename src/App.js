import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './pages/homepage/homepageComponent';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import signInSignUp from './pages/signInSignUp/signInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentuser } from './redux/user/actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentuser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentuser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentuser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentuser: (user) => dispatch(setCurrentuser(user)),
});
export default connect(null, mapDispatchToProps)(App);
