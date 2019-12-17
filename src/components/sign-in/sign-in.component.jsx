import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from '../firebase/firebase.utils';
class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }


    handleSubmit = async event => {

        event.preventDefault()
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })


        } catch (error) {
            console.log(error);
        }


    }

    /* we need to store both email and password. so we call handlechange on each tag seperately. when is called on email, event1.target will have the forminput tag written for email, from that we will be destructuring only name of tag and value of the tag currently being processed and same thing is provessed for password.*/
    handleChange = event1 => {
        const { value, name } = event1.target;
        this.setState({ [name]: value }); //dynammically populating the props with user entered details
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