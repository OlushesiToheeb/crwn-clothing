import React from 'react';

import './signIn.scss';
import FormInput from '../form-input/formInput';
import CustomButton from '../custom-button/customButton';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            label='Password'
            handleChange={this.handleChange}
            required
          />

          <CustomButton type='submit'>SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
