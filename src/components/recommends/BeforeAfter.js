import React from 'react';
import styles from './BeforeAfter.module.css';
import Button from "../WaButton/Button"

// Import your images
import result1 from "../../images/גלי ניפרבסקי לפני אחרי 1.png";
import result2 from "../../images/גלי ניפרבסקי לפני אחרי 2.png";
import result3 from "../../images/גלי ניפרבסקי לפני אחרי 3.png";
import result4 from "../../images/גלי ניפרבסקי לפני אחרי 4.png";
import result5 from "../../images/גלי ניפרבסקי לפני אחרי 5.png";
import result6 from "../../images/גלי ניפרבסקי לפני אחרי 6.png";
import result7 from "../../images/גלי ניפרבסקי לפני אחרי 7.png";


const BeforeAfter = () => {
  const images = [
    result1, result2, result3, result4, 
    result5, result6, result7
  ];

  return (
    <>
          <div className={styles.title}>
עברו דרכי מאות בנות
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

    </>
  );
};

export default BeforeAfter;