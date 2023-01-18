import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/user.contexts";
import './navigation.styles.scss';
import { useContext } from "react";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon";
import CartDropdown from "../../cart-dropdown/cart-dropdown";


function NavigationBar(){
  const {currentUser} = useContext(UserContext);
 
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
                        <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                      ):(<Link className="nav-link" to='/auth'>SIGN IN</Link>   )}</Link>
              <CartIcon/>
          </div>
          <CartDropdown/>
        </div>
        <Outlet/>
        </Fragment>
    );
  }

  export default NavigationBar;

