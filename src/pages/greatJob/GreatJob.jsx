import { Heading, TextBtn } from "../../components";
import bucket from "../../assets/bucket.png";
import styles from "./greatJob.module.css";
import { useNavigate } from "react-router-dom";
import { useBuckettStore, useStore } from "../../store/productStore";
import yellowReload from "../../assets/yellow-reload.png";
import blueReload from "../../assets/blue-reload.png";

const GreatJob = () => {
  const navigate = useNavigate();
  const bucketData = useBuckettStore.getState().bucketData;
  const productsData = useStore.getState().products;

  const handleLoadBin = () => {
    navigate("/ultimate-clean");
  };

  const handleCancelBin = () => {
    navigate("/cancel-popup");
  };
  console.log("productsData.productData", productsData);

  // const duplicateImageData = () => {
  //   navigate("/load-bin");

  //   const lastData = productData[productData.length - 1];
  //   const newProductData = [
  //     ...productData,
  //     { id: lastData.id + 1, img: bucket, count: lastData.count + 1 },
  //   ];
  //   console.log("newProductData ", newProductData);
  //   // useBuckettStore.setState({ products: newProductData });
  // };

  const duplicateProductData = () => {
    navigate("/load-bin");

    const lastData = productsData[productsData.length - 1];
    console.log("lastData.productData[0].id + 1,", lastData.productData[0]?.id+1);
    const newProductData = [
      ...productsData,
      {
        id: lastData.id + 1,
        img: bucket,
        count: lastData.count + 1,
        productData: [
          {
            id: lastData.productData[0]?.id+1,
            title: "QUICK",
            price: 8,
            img: bucket,
            count: 82,
            subCategories: [
              {
                id: 0,
                title: "Detergent-Mountain Fresh",
                icon: yellowReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 1,
                title: "Cold Water",
                icon: yellowReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 2,
                title: "Time Dry 45 min",
                icon: blueReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 3,
                title: "Softner-None",
                icon: yellowReload,
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
            ],
          },
          {
            id: lastData.productData[1]?.id+1,
            title: "Colors",
            price: 9,
            img: bucket,
            count: 83,
            subCategories: [
              {
                id: 0,
                title: "Detergent-Mountain Fresh",
                icon: yellowReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 1,
                title: "Cold Water",
                icon: yellowReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 2,
                title: "Time Dry 45 min",
                icon: blueReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 3,
                title: "Softner-None",
                icon: yellowReload,
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
            ],
          },
          {
            id: lastData.productData[2]?.id+1,
            title: "Whites",
            price: 10,
            img: bucket,
            count: 82,
            subCategories: [
              {
                id: 0,
                title: "Detergent-Mountain Fresh",
                icon: yellowReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 1,
                title: "Cold Water",
                icon: yellowReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 2,
                title: "Time Dry 45 min",
                icon: blueReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 3,
                title: "Softner-None",
                icon: yellowReload,
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
            ],
          },
          {
            id: lastData.productData[3]?.id+1,
            title: "Deep",
            price: 12,
            img: bucket,
            count: 82,
            subCategories: [
              {
                id: 0,
                title: "Detergent-Mountain Fresh",
                icon: yellowReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 1,
                title: "Cold Water",
                icon: yellowReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 2,
                title: "Time Dry 45 min",
                icon: blueReload,
                type: "CHANGE",
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
              {
                id: 3,
                title: "Softner-None",
                icon: yellowReload,
                subCategoriesData: [
                  {
                    id: 0,
                    title: "Mountain Fresh",
                    price: 2,
                  },
                  {
                    id: 1,
                    title: "Tide - Itchy",
                    price: 3,
                  },
                  {
                    id: 2,
                    title: "Gain-Smell Strong",
                    price: 2,
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    useStore.setState((prevState) => ({
      ...prevState,
      products: newProductData,
    }));
  };

  return (
    <section className={styles.box}>
      <Heading size="large">GREAT JOB</Heading>
      <h6 className={styles.para}>
        You have <span>one bin</span> loaded. Add another by tapping below or tap done to choose{" "}
        <span className={styles.greenSpan}>wash cycle.</span>
      </h6>

      <div className={productsData.length < 2 ? styles.singleImageWrapper : styles.imageWrapper}>
        {productsData.length > 0 &&
          productsData.map((data, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={data.img} alt="bucket" className={styles.image} />
              <h6 className={styles.bucketNumber}>#{data.count}</h6>
            </div>
          ))}
      </div>

      <div className={styles.anotherBtn}>
        <TextBtn size="xl" textColor="yellow" backgroundColor="noBg" onClick={duplicateProductData}>
          ADD ANOTHER
        </TextBtn>
      </div>

      <div className={styles.btnWrapper}>
        <TextBtn size="md" textColor="white" backgroundColor="noBg" onClick={handleLoadBin}>
          DONE
        </TextBtn>
        <TextBtn size="md" textColor="white" backgroundColor="noBg" onClick={handleCancelBin}>
          CANCEL
        </TextBtn>
      </div>
    </section>
  );
};

export default GreatJob;
