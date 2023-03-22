import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import CategoryPreview from "../../category-preview/category-preview";

function CategoriesPreview(){
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
        <div className="shop-container">
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products}/>
            })}
        </div>
         </Fragment>
    );

  };

  export default CategoriesPreview;