import './directory-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='directory-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='directory-item-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;