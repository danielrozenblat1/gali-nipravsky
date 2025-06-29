import React from 'react';
import styles from './WorksBrows.module.css';
import Button from "../../components/WaButton/Button"

// Import your images
import result1 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 1.png";
import result2 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 2.png";
import result3 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 3.png";
import result4 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 4.png";
import result5 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 5.png";
import result6 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 6.png";
import result7 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 7.png";
import result8 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 8.png";
import result9 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 9.png";
import result10 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 10.png";
import result11 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 11.png";
import result12 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 12.png";
import result13 from "../../images/גלי ניפרבסקי איפור קבוע לגבות 13.png";

const WorksBrows = () => {
  const images = [
    result1, result2, result3, result4, 
    result5, result6, result7, result8, result9,    result10, result11, result12, result13, 
  
  ];

  return (
    <>
          <div className={styles.title}>
  ואיך אפשר בלי קצת דוגמאות..?
      </div>
      <div className={styles.explain}>
       הכנתי לך מקבץ של בנות שכבר עשו את הצעד ומסתובבות עם הגבות שהן חלמו עליהן תמיד
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
      <Button text="גלי, בואי נדבר!" message="היי גלי הגעתי מהדף, אשמח לשמוע עוד על איפור קבוע לגבות" />
    </>
  );
};

export default WorksBrows;