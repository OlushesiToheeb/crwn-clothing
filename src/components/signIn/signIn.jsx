import React from 'react';
import { connect } from 'react-redux';

import './signIn.scss';
import FormInput from '../form-input/formInput';
import CustomButton from '../custom-button/customButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/actions';

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const { dispatch } = this.props;
        dispatch(emailSignInStart({ email, password }));
    };

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };
    render() {
        const { dispatch } = this.props;
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
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton
                            type='button'
                            onClick={() => dispatch(googleSignInStart())}
                            isGoogleSignIn
                        >
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(SignIn);
