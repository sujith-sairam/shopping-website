
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import'./sign-up-form.styles.scss';

const defaultFormFields = {
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

function SignUpForm(){
    const [formFields,setFormFields] = useState(defaultFormFields);
    const { displayName,email,password,confirmPassword } = formFields;
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    
    const handleSubmit = async (event) => {
       event.preventDefault();

       if(password !== confirmPassword){
        alert("password is not matched with confirmPassword");
        return;
       }
       try{
        const { user } = await createAuthUserWithEmailAndPassword(email,password);
        
        await createUserDocumentFromAuth(user,{displayName});
        resetFormFields();
       }catch(error){
          if(error.code === 'auth/email-already-in-use'){
            alert("Account is already in use");
          }else{
          console.log('user creation error',error);
          }
       }
    }
    
    const handleChange = (event) => {
        const { name,value } = event.target;
        setFormFields({ ...formFields,[name]:value});
    };

    return(
        <div  className="sign-up-container">
        <h2> Don't have an Account?</h2>
        <span>Sign Up with Email and Password</span>
        <form onSubmit={handleSubmit}>
        <FormInput 
           label='Display Name'
           type='text'
           required
           onChange={handleChange}
           name='displayName'
           value={displayName}
           />

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

          <FormInput 
           label='Confirm Password'
           type='password'
           required
           onChange={handleChange}
           name='confirmPassword'
           value={confirmPassword}
           />
           <Button  buttonType='default' type="submit">Sign Up</Button>
           
        </form>
        </div>
    );
};

 export default SignUpForm;