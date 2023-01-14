
import { useState } from "react";
import {signInWithGooglePopup, 
  signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import'./sign-in-form.styles.scss';

const defaultFormFields = {
    email:'',
    password:''
}

function SignInForm(){
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
  
  
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
  
    const signInWithGoogle = async () => {
       await signInWithGooglePopup();
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
         await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        resetFormFields();
      } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            console.log(error);
        }
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };
  
    return (
      <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='Email'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />
  
          <FormInput
            label='Password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
          />
        
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
           
        </form>
        </div>
    );
};

 export default SignInForm;