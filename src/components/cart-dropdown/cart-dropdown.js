import Button from '../button/button';
import './cart-dropdown.styles.scss';

function CartDropdown(){
    return(
        <div className='cart-dropdown-container'>
          <div className='cart-items'>
                <Button>Go To Checkout</Button>
          </div>
        </div>
    );
}

export default CartDropdown;