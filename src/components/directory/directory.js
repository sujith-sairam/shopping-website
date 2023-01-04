import CategoryItem from "../categories/categories";
import './directory.styles.scss';



function Directory({categories}){
    return(
           <div className="directory-container">
            {categories.map((category) => 
            <CategoryItem key = {category.id} category={category} /> 
            )}
           </div>
    );
}

export default Directory;