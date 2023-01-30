import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-item.context';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.styles.scss';

function CartDropdown(){
  const { cartItems } =  useContext(CartContext);
    return(
        <div className='cart-dropdown-container'>
          <div className='cart-items'>
               {cartItems.map((item) => (
                 <CartItem key={item.id} cartItem={item} />
                 ))}
          </div>
          <Button>Go To Checkout</Button>
        </div>
    );
}

export default CartDropdown;