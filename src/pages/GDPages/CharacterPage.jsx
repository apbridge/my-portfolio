import { Link } from "react-router-dom";
import Slider from "react-slick";
import styles from "../../styles/characters.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bear from "../../assets/gd/bear.png";
import cat from "../../assets/gd/cat.png";
import deer from "../../assets/gd/deer.png";
import dino from "../../assets/gd/dino.png";
import elephant from "../../assets/gd/elephant.png";
import fox from "../../assets/gd/fox.png";
import giraffe from "../../assets/gd/giraffe.png";
import koala from "../../assets/gd/koala.png";
import monkey from "../../assets/gd/monkey.png";
import panda from "../../assets/gd/panda.png";
import tiger from "../../assets/gd/tiger.png";
import unicorn from "../../assets/gd/unicorn.png";

const images = [
  bear, cat, deer, dino, elephant, fox,
  giraffe, koala, monkey, panda, tiger, unicorn
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

const CharacterPage = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
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
        settings: { slidesToShow: 2}
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
        <h2 className={styles.h2}>Custom Character Designs</h2>
        <p className={styles.p}>
          Unique and personalized character designs created for custom calendars
          at SDI Innovations. Created with Adobe Photoshop.
        </p>
        <p className={styles.created}>Created Summer 2024 for SDI Innovations</p>
      </div>
      <hr />
      <div className={styles.carousel}>
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img src={img} alt={`character-${index}`} className={styles.image}  />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CharacterPage;
