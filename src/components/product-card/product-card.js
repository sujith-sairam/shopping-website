import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-item.context';
import Button from '../button/button';
import './product-card.styles.scss';

function ProductCard({ product }){
    const { name,price,imageUrl } = product;
    const { addItemToCart} = useContext(CartContext);
    const addProductToCart = ()  => addItemToCart(product);

    return(
       <div className='product-card-container'>
          <img src={ imageUrl } alt={ `${name}`}/>
            <div className='footer'>
               <span className='name'>{ name }</span>
               <span className='price'>{ price }</span>
            </div>
            <Button buttonType ='inverted' onClick = { addProductToCart } >Add To Card</Button>
       </div>
    );
}

export default ProductCard;