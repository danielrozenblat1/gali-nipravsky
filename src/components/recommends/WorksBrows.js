import React from 'react';
import styles from './WorksBrows.module.css';
import Button from "../../components/WaButton/Button"

// Import your images
import result1 from "../../images/גלי איפור קבוע 1.jpg";
import result2 from "../../images/גלי איפור קבוע 2.jpg";
import result3 from "../../images/גלי איפור קבוע 3.jpg";
import result4 from "../../images/גלי איפור קבוע 4.jpg";
import result5 from "../../images/גלי איפור קבוע 5.jpg";
import result6 from "../../images/גלי איפור קבוע 6.jpg";
import result7 from "../../images/גלי איפור קבוע 7.jpg";
import result8 from "../../images/גלי איפור קבוע 8.jpg";
import result9 from "../../images/גלי איפור קבוע 9.jpg";
import result10 from "../../images/גלי איפור קבוע 10.jpg";
import result11 from "../../images/גלי איפור קבוע 11.jpg";
import result12 from "../../images/גלי איפור קבוע 12.jpg";
import result13 from "../../images/גלי איפור קבוע 13.jpg";
import result14 from "../../images/גלי איפור קבוע 14.jpg";
import result15 from "../../images/גלי איפור קבוע 15.jpg";
const WorksBrows = () => {
  const images = [
    result3, result4, 
  result9,    result10, result11, result12, result13,  result14, 
  
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