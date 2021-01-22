import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/formInput';
import CustomButton from '../custom-button/customButton';
import { signUpStart } from '../../redux/user/actions';

import './signUp.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        const { dispatch } = this.props;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        dispatch(signUpStart({ email, password, displayName }));
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form
                    action=''
                    className='sign-up-form'
                    onSubmit={this.handleSubmit}
                >
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'> Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default connect()(SignUp);
