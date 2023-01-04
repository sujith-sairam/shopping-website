import './authentication.styles.scss';
import SignInForm from '../../sign-in-form/sign-in-form';
import SignUpForm from '../../sign-up-form/sign-up-form';

function Authentication(){

    
   
    
    return(
        <div className='authentication-container'>
       <SignInForm/>
       <SignUpForm/>
       </div>
    );
};

export default Authentication;