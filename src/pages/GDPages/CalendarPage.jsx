import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/calendars.module.css";
import january from "../../assets/gd/january.jpg";
import february from "../../assets/gd/february.jpg";
import march from "../../assets/gd/march.jpg";
import april from "../../assets/gd/april.jpg";
import may from "../../assets/gd/may.jpg";
import june from "../../assets/gd/june.jpg";
import july from "../../assets/gd/july.jpg";
import august from "../../assets/gd/august.jpg";
import september from "../../assets/gd/september.jpg";
import october from "../../assets/gd/october.jpg";
import november from "../../assets/gd/november.jpg";
import december from "../../assets/gd/december.jpg";
import beach from "../../assets/gd/beach-mid.jpg";
import bee from "../../assets/gd/bee-small.jpg";
import cloudy from "../../assets/gd/cloudy-small.jpg";
import flower1 from "../../assets/gd/flower1-big.jpg";
import flower2 from "../../assets/gd/flower2-big.jpg";
import frog from "../../assets/gd/frog-mid.jpg";
import heart from "../../assets/gd/heart-big.jpg";
import purple from "../../assets/gd/purple-small.jpg";



const months = [
  january, february, march, april, may, june, july, august, september, october, november, december
];


const big = [
  flower1, flower2, heart
];

const mid = [
  beach, frog
];

const small = [
  purple, cloudy, bee
];

// Custom Arrow Components
const CustomPrevArrow = ({ onClick }) => (
  <button className={styles.customArrow + " " + styles.prevArrow} onClick={onClick}>
    🡸
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className={styles.customArrow + " " + styles.nextArrow} onClick={onClick}>
    🡺
  </button>
);

const CalendarPage = () => {
  const openInNewTab = (image) => {
    // Open the image in a new tab
    window.open(image, '_blank');
  };

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };
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
      <hr />
      <h3 className={styles.h3}>Calendars Using Characters</h3>
      <p className={styles.click}>Click calendar to open full size in new tab.</p>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {months.map((img, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={img} alt={`animal-calendar-${index}`} className={styles.image} onClick={() => openInNewTab(img)} />
            </div>
          ))}
        </Slider>
      </div>
      <hr />
      <h3 className={styles.h3}>Miscellaneous Calendars</h3>
      <p className={styles.click}>Click calendar to open full size in new tab.</p>
      <h4 className={styles.h4}>Small Calendars</h4>
      <div className={styles.grid}>
        {small.map((img, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={img} alt={`small-calendar-${index}`} className={`${styles.image} ${styles.miscImage}`} onClick={() => openInNewTab(img)} />
          </div>
        ))}
      </div>

      <h4 className={styles.h4}>Medium Calenders</h4>
      <div className={styles.midGrid}>
        {mid.map((img, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={img} alt={`mid-calendar-${index}`} className={`${styles.image} ${styles.miscImage}`} onClick={() => openInNewTab(img)} />
          </div>
        ))}
      </div>

      <h4 className={styles.h4}>Big Calendars</h4>
      <div className={styles.grid}>
        {big.map((img, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={img} alt={`big-calendar-${index}`} className={`${styles.image} ${styles.miscImage}`} onClick={() => openInNewTab(img)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;