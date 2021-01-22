import React from 'react';

import './signInSignUp.scss';
import SignIn from '../../components/signIn/signIn';
import SignUp from '../../components/sign-Up/signUp';

const signInSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default signInSignUp;
