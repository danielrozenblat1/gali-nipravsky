import React from 'react';
import styles from './Regular.module.css';
import Button from '../button/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your images
import result1 from "../../images/גלי ניפרבסקי המלצות 1.png";
import result2 from "../../images/גלי ניפרבסקי המלצות 2.png";
import result3 from "../../images/גלי ניפרבסקי המלצות 3.png";
import result4 from "../../images/גלי ניפרבסקי המלצות 4.png";
import result5 from "../../images/גלי ניפרבסקי המלצות 5.png";
import result6 from "../../images/גלי ניפרבסקי המלצות 6.png";
import result7 from "../../images/גלי ניפרבסקי המלצות 7.png";
import result8 from "../../images/גלי ניפרבסקי המלצות 8.png";
import result9 from "../../images/גלי ניפרבסקי המלצות 9.png";
import result10 from "../../images/גלי ניפרבסקי המלצות 10.png";
import result11 from "../../images/גלי ניפרבסקי המלצות 11.png";
import result12 from "../../images/גלי ניפרבסקי המלצות 12.png";
import result13 from "../../images/גלי ניפרבסקי המלצות 13.png";
import result14 from "../../images/גלי ניפרבסקי המלצות 14.png";
import result15 from "../../images/גלי ניפרבסקי המלצות 15.png";
import result16 from "../../images/גלי ניפרבסקי המלצות 16.png";
import result17 from "../../images/גלי ניפרבסקי המלצות 17.png";
import result18 from "../../images/גלי ניפרבסקי המלצות 18.png";
import result19 from "../../images/גלי ניפרבסקי המלצות 19.png";
import result20 from "../../images/גלי ניפרבסקי המלצות 20.png";
import result21 from "../../images/גלי ניפרבסקי המלצות 21.png";
import result22 from "../../images/גלי ניפרבסקי המלצות 22.png";


const Recommendations = () => {
  const images = [
    result1, result2, result3,   result4, result5, result6, result7, result8, result9, result10,result11,result12, result13, result14, result15, result16, result17,result18,result19,,result20,result21,result22
  ];

  const sliderSettings = {
    infinite: true,
    speed: 700,
    autoplaySpeed: 2500,
    dots: false,
    autoplay: true,
    pauseOnHover: true,
    slidesToShow: window.innerWidth < 450 ? 1 :
                  window.innerWidth <= 1050 ? 2 : 4,
    slidesToScroll: 1,
  };

  const content = images.map((img, index) => ({
    type: 'image',
    src: img
  }));

  return (
    <>
      <div className={styles.title}>שדיברו כך:</div>
      <div className={styles.explain}>
  תחליקי בין התמונות
      </div>
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {content.map((item, index) => (
            <div key={index} itemScope itemType="http://schema.org/Review">
              {item.type === 'image' && (
                <img
                  src={item.src}
                  className={styles.image1}
                  alt={`לקוחה ממליצה מספר ${index + 1}`}
                  itemProp="image"
                />
              )}
              <meta itemProp="datePublished" content={new Date().toISOString()} />
            </div>
          ))}
        </Slider>
      </div>
   
    </>
  );
};

export default Recommendations;