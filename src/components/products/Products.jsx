/* eslint-disable react/prop-types */
import styles from "./products.module.css";

const Products = (props) => {
  const { productsData } = props; // Corrected destructuring

  return (
    <div className={styles.root}>
      {productsData.length > 0 &&
        productsData.map((product, index) => (
          <div className={styles.productWrapper} key={index}>
            <h2 className={styles.title}>{product.title}</h2>
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
