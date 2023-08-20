/* eslint-disable react/prop-types */
import styles from "./products.module.css";

const Products = (props) => {
  const { productsData, setSelectedProductStatus, setselectedProduct } = props;

  const handleSelectedProduct = (product) => {
    setSelectedProductStatus(true);
    setselectedProduct(product);
  };

  return (
    <div className={styles.root}>
      {productsData.length > 0 &&
        productsData.map((product, index) => (
          <div className={styles.productWrapper} key={index}>
            <h2 className={styles.title} onClick={() => handleSelectedProduct(product)}>
              {product.title} ${product.price}
            </h2>
            <div className={styles.subCategoryWrapper}>
              {product.subCategories.map((subCategory) => (
                <p className={styles.para} key={subCategory.id}>
                  {subCategory.title}
                </p>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
