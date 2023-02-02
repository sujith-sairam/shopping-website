import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart-item.context';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import './cart-dropdown.styles.scss';

function CartDropdown(){
  const { cartItems } =  useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOutHandler = () =>{
    navigate('/checkout')
  }
    return(
        <div className='cart-dropdown-container'>
          <div className='cart-items'>
               {cartItems.map((item) => (
                 <CartItem key={item.id} cartItem={item} />
                 ))}
          </div>
          <Button onClick={goToCheckOutHandler}>Go To Checkout</Button>
        </div>
    );
}

export default CartDropdown;