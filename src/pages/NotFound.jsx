import { Link } from "react-router-dom";
import styles from "../styles/notfound.module.css";

const NotFound = () => {
  return (
    <div className={styles.wrappers}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Sorry, the page you are looking for is not found.</p>
      <Link to="/" className={styles.link} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Go back to Home</Link>
    </div>
  );
};

export default NotFound;