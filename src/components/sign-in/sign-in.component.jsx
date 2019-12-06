import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../firebase/firebase.utils';
class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }


    handleSubmit = event => {

        event.preventDefault()
        this.setState({ email: '', password: '' })

    }

    handleChange = event1 => {
        const { value, name } = event1.target;
        this.setState({ [name]: value });
    }

    render() {
        return (<div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign In with your EMail and password</span>

            <form onSubmit={this.handleSubmit}  >
                <FormInput type="email" name="email" label="email" value={this.state.email} handleChange={this.handleChange} required />

                <FormInput type="password" name="password" label="password" value={this.state.password} handleChange={this.handleChange} required />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </div>


            </form>




        </div>
        );

    }

}

export default SignIn;