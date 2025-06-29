import React from 'react';
import styles from './WorksBrows.module.css';
import Button from "../../components/WaButton/Button"

// Import your images
import result1 from "../../images/גלי ניפרבסקי ציפורניים 1.png";
import result2 from "../../images/גלי ניפרבסקי ציפורניים 2.png";
import result3 from "../../images/גלי ניפרבסקי ציפורניים 3.png";
import result4 from "../../images/גלי ניפרבסקי ציפורניים 4.png";
import result5 from "../../images/גלי ניפרבסקי ציפורניים 5.png";
import result6 from "../../images/גלי ניפרבסקי ציפורניים 6.png";
import result7 from "../../images/גלי ניפרבסקי ציפורניים 7.png";
import result8 from "../../images/גלי ניפרבסקי ציפורניים 8.png";
import result9 from "../../images/גלי ניפרבסקי ציפורניים 9.png";
import result10 from "../../images/גלי ניפרבסקי ציפורניים 10.png";
import result11 from "../../images/גלי ניפרבסקי ציפורניים 11.png";


const Nails = () => {
  const images = [
    result1, result2, result3, result4, 
    result5, result6, result7, result8, result9, result10, result11
  
  ];

  return (
    <>
          <div className={styles.title}>
לק ג'ל לציפורניים
      </div>
      <div className={styles.explain}>
ריכזתי עבורך מקבץ קטן מתוך אלפי הנשים שיצאו ממני עם ציפורניים מושלמות
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
      <div className={styles.explain}>
חומרי הג'ל הטוב בעולם - ביו סקלפצ'ר
      </div>
      <Button text="גלי,אני רוצה לקבוע תור לציפורניים!" message="היי גלי הגעתי מהדף, אשמח לקבוע תור לציפורניים" />
    </>
  );
};

export default Nails;