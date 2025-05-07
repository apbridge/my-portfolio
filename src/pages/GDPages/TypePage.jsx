import { Link } from "react-router-dom";
import styles from "../../styles/calendars.module.css";
import banana from "../../assets/gd/banana.jpg";
import dkd from "../../assets/gd/dkd.jpg";
import logo from "../../assets/gd/logo.jpg";

const TypePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h2 className={styles.h2}>Typography and Logo Designs</h2>
                <p className={styles.p}>
                    Various typography and logo designs created in Adobe Photoshop or Photopea.com.
                </p>
            </div>
            <hr />
            <h3 className={styles.h3}>Merch Design for Delta Kappa Delta Sorority Inc.</h3>
            <p className={styles.created}>Created January 2025 using Photopea.com</p>
            <div className={styles.singleGrid}>
                <div className={styles.imageWrapper}>
                    <img src={dkd} alt={`dkd`} className={`${styles.image} ${styles.singleImage}`} />
                </div>
            </div>
            <h3 className={styles.h3}>FoodX Logo for XTern</h3>
            <p className={styles.created}>Created Fall 2023 using Adobe Photoshop</p>
            <div className={styles.singleGrid}>
                <div className={styles.imageWrapper}>
                    <img src={logo} alt={`FoodX-Logo`} className={`${styles.image} ${styles.singleImage}`} />
                </div>
            </div>
            <h3 className={styles.h3}>Banana Typography</h3>
            <p className={styles.created}>Created Fall 2023 using Adobe Photoshop</p>
            <div className={styles.singleGrid}>
                <div className={styles.imageWrapper}>
                    <img src={banana} alt={`banana`} className={`${styles.image} ${styles.singleImage}`} />
                </div>
            </div>
        </div>
    );
};

export default TypePage;