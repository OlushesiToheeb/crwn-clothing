import React, { useState } from 'react';
import { connect } from 'react-redux';

import './signIn.scss';
import FormInput from '../form-input/formInput';
import CustomButton from '../custom-button/customButton';
import { googleSignInStart, emailSignInStart } from '../../redux/user/actions';

const SignIn = ({ dispatch }) => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const { email, password } = userCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='Email'
                    required
                />

                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    label='Password'
                    handleChange={handleChange}
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
};

export default connect()(SignIn);
