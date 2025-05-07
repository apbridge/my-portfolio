import { Link } from "react-router-dom";
import styles from "../../styles/calendars.module.css";
import purple from "../../assets/gd/purplesmall.jpg";

const images = [
  purple,
];

const CalendarPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2 className={styles.h2}>Custom Calendar Designs</h2>
        <p className={styles.p}>
          Unique and personalized calendar designs created for school datebooks
          at SDI Innovations. Created with Adobe InDesign and Adobe Photoshop.
        </p>
        <p className={styles.created}>Created Summer 2024 for SDI Innovations</p>
      </div>

    </div>
  );
};

export default CalendarPage;