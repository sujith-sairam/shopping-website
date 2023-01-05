import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.contexts";
import './navigation.styles.scss';
import { useContext } from "react";
import { signOutUser } from "../../../utils/firebase/firebase.utils";


function NavigationBar(){
  const {currentUser,setCurrentUser} = useContext(UserContext);
  const signOutHandler = async() =>{
     await signOutUser();
     setCurrentUser(null);
  }
    return(
      <Fragment>
        <div  className="navigation" >
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo" />
            </Link>
          <div className="nav-links-container">
             <Link className="nav-link" to='/shop'>SHOP</Link>
             <Link>{
                       currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                      ):(<Link className="nav-link" to='/auth'>SIGN IN</Link>   )}</Link>
          </div>
        </div>
        <Outlet/>
        </Fragment>
    );
  }

  export default NavigationBar;

