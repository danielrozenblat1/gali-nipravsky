import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import lips from "../Icons/wired-outline-1597-lips-hover-pinch (2).json";
import styles from './FirstScreen.module.css';
import PinkScrollButton from '../components/button/Button';
import lashes from "../Icons/wired-outline-1575-eyelash-hover-pinch (2).json"
import laser from "../Icons/wired-outline-1001-shop-scanner-hover-pinch.json" 
import middleImage from "../images/גלי ניפרבסקי תמונה מרכזית.png";
import rightImage from "../images/גלי ניפרבסקי תמונה ימנית.png"
import leftImage from "../images/גלי ניפרבסקי תמונה שמאלית.png"
import GradientLoader from '../components/loader/Loader';
const FirstScreen = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      middleImage,
      rightImage,
      leftImage
    ];

    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
      });
    };

    Promise.all(imageUrls.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Failed to load images", err));
  }, []);

  if (!imagesLoaded) {
    return <GradientLoader/>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={`${styles.backgroundImage} ${styles.leftImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.centerImage}`}></div>
        <div className={`${styles.backgroundImage} ${styles.rightImage}`}></div>
      </div>
      
      <div className={styles.contentBox}>
        <h1 className={styles.title}>GALI LASHES & ART FACE</h1>
  
        <div className={styles.buttonContainer}>
        <PinkScrollButton text="הסרת איפור קבוע וקעקועים בלייזר" icon={laser} to="לייזר"/>
        <PinkScrollButton text="טיפולי איפור קבוע" icon={lips} to="איפור קבוע"/>
        <PinkScrollButton text="שזירת ריסים" icon={lashes} to="שזירת ריסים"/>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;