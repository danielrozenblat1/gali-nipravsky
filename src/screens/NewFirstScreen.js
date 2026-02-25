import React from 'react';
import styles from './NewFirstScreen.module.css';

import Button from '../components/WaButton/Button';
import ContactForm from '../components/lightForm/Form';

const HeroSection = () => {
  return (
    <div className={styles.heroContainer} dir="rtl">
      <div className={styles.contentWrapper}>
        <div className={styles.contentSection}>
      
          <div className={styles.textContent}>
            <p className={styles.descriptionB}>
              אם את מתעניינת באיפור קבוע
            </p>
            <h1 className={styles.title}>
              תעצרי ותצפי בסרטון הבא
            </h1>
          </div>

          <div className={styles.videoContainer}>
            <div className={styles.videoPlayer}>
              <iframe
                className={styles.vimeoPlayer}
                src="https://player.vimeo.com/video/1163277373?autoplay=1&muted=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                title="סרטון איפור קבוע"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>

          <div id="shapo-widget-39723373db6e4d029b98" style={{width: '100%', display: 'flex', justifyContent: 'center'}}></div>
          <div className={styles.formSection}>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;