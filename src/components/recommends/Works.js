import React from 'react';
import styles from './Recommends.module.css';
import Button from "../../components/WaButton/Button"

// Import your images
import result1 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 1.png";
import result2 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 2.png";
import result3 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 3.png";
import result4 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 4.png";
import result5 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 5.png";
import result6 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 6.png";
import result7 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 7.png";
import result8 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 8.png";
import result9 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 9.png";
import result10 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 10.png";
import result11 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 11.png";
import result12 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 12.png";
import result13 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 13.png";
import result14 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 14.png";
import result15 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 15.png";
import result16 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 16.png";
import result17 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 17.png";
import result18 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 18.png";
import result19 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 19.png";
import result20 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 20.png";
import result21 from "../../images/גלי ניפרבסקי איפור קבוע בשפתיים 21.png";

const Works = () => {
  const images = [
    result1, result2, result3, result4, 
    result5, result6, result7, result8, result9,    result10, result11, result12, result13, 
    result14, result15, result16, result17, result18, result19, result20, result21
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
      <Button text="גלי, בואי נדבר!" message="היי גלי הגעתי מהדף, אשמח לשמוע עוד על איפור קבוע לשפתיים" />
    </>
  );
};

export default Works;