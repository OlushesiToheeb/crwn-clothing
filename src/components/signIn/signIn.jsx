import React from 'react';

import './signIn.scss';

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
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor=''>Email</label>
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label htmlFor=''>Password</label>
        </form>
      </div>
    );
  }
}

export default SignIn;
