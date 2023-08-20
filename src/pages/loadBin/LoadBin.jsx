import { Heading, TextBtn } from "../../components/index";
import styles from "./loadBin.module.css";
import binVideo from "../../assets/da6ef29703.mp4";
import bucket from "../../assets/bucket.png";
import { useNavigate } from "react-router-dom";
import { useStore, useBuckettStore } from "../../store/productStore";
import yellowReload from "../../assets/yellow-reload.png";
import blueReload from "../../assets/blue-reload.png";

const LoadBin = () => {
  const navigate = useNavigate();

  const productData = useStore.getState().products;
  // const productData = useStore((state) => state.products);

  const handleLoadBin = () => {
    useStore.setState({
      products: [
        {
          id: 0,
          img: bucket,
          count: 82,
          productData: [
            {
              id: 0,
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
              id: 1,
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
              id: 2,
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
              id: 3,
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
      ],
    });
    navigate("/great-job");
  };
  const handleLoadBinNew = () => {
    navigate("/great-job");
  };
  const handleCancelBin = () => {
    navigate("/cancel-popup");
  };

  // console.log("productData.productData", productData);
  return (
    <section className={`${styles.box}`}>
      <Heading size="large">PLEASE LOAD BIN</Heading>
      <div style={{ margin: "15px" }}>
        <Heading size="medium" color="yellow">
          Please make sure the lid is completely closed
        </Heading>
      </div>
      {productData.length === 0 ? (
        <div className={`${styles.videoWrapper}`}>
          <video width="340" height="360" autoPlay loop className={styles.video} controls="hidden">
            <source src={binVideo} type="video/mp4" />
          </video>
        </div>
      ) : (
        <>
          <div
            className={`${styles.videoWrapper} ${productData.length > 0 ? styles.minivideo : ""}`}>
            <video
              width="340"
              height="360"
              autoPlay
              loop
              className={styles.video}
              controls="hidden">
              <source src={binVideo} type="video/mp4" />
            </video>
          </div>
          {productData.length === 0 ? (
            <></>
          ) : (
            <div className={styles.binsList}>
              {productData.map((data, index) => (
                <div className={`${styles.outerWrapper}`} key={index}>
                  <div className={styles.binWrapper}>
                    <p className={styles.loadText}>Load Bin</p>
                    <img src={data.img} alt="bucket" className={` ${styles.bucketImage}`} />
                    <h6 className={`${styles.number}`}>#{data.count}</h6>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {productData.length === 0 ? (
        <div className={` ${styles.btnWrapper}`}>
          <TextBtn size="md" textColor="green" backgroundColor="noBg" onClick={handleLoadBin}>
            DONE
          </TextBtn>
          <TextBtn size="md" textColor="red" backgroundColor="noBg" onClick={handleCancelBin}>
            CANCEL
          </TextBtn>
        </div>
      ) : (
        <div className={` ${styles.btnWrapper}`}>
          <TextBtn size="md" textColor="white" backgroundColor="noBg" onClick={handleLoadBinNew}>
            DONE
          </TextBtn>
          <TextBtn size="md" textColor="white" backgroundColor="noBg" onClick={handleCancelBin}>
            CANCEL
          </TextBtn>
        </div>
      )}
    </section>
  );
};

export default LoadBin;
