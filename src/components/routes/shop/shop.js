import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products.context";
import ProductCard from "../../product-card/product-card";
import './shop.styles.scss';

function Shop(){
    const { products } = useContext(ProductsContext);
    return (
       <div className="products-container">
        { products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
       </div>
    );

  };

  export default Shop;