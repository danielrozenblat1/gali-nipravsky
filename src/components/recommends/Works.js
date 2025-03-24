import React from 'react';
import styles from './Recommends.module.css';
import Button from "../../components/WaButton/Button"

// Import your images
import result1 from "../../images/גלי ניפרבסקי איפור קבוע 1.png";
import result2 from "../../images/גלי ניפרבסקי איפור קבוע 2.png";
import result3 from "../../images/גלי ניפרבסקי איפור קבוע 3.png";
import result4 from "../../images/גלי ניפרבסקי איפור קבוע 4.png";
import result5 from "../../images/גלי ניפרבסקי איפור קבוע 5.png";
import result6 from "../../images/גלי ניפרבסקי איפור קבוע 6.png";
import result7 from "../../images/גלי ניפרבסקי איפור קבוע 7.png";
import result8 from "../../images/גלי ניפרבסקי איפור קבוע 8.png";
import result9 from "../../images/גלי ניפרבסקי איפור קבוע 9.png";

const Works = () => {
  const images = [
    result1, result2, result3, result4, 
    result5, result6, result7, result8, result9
  ];

  return (
    <>
          <div className={styles.title}>
  ואיך אפשר בלי קצת דוגמאות..?
      </div>
      <div className={styles.explain}>
       הכנתי לך מקבץ של בנות שכבר עשו את הצעד ומסתובבות עם השפתיים שהן חלמו עליהן תמיד
      </div>

   
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button text="גלי, בואי נדבר!" />
    </>
  );
};

export default Works;