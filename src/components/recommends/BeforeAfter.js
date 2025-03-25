import React, { useEffect, useState } from 'react';
import Button from "../WaButton/Button";

// Import your images
import result1 from "../../images/גלי ניפרבסקי לפני אחרי 1.png";
import result2 from "../../images/גלי ניפרבסקי לפני אחרי 2.png";
import result3 from "../../images/גלי ניפרבסקי לפני אחרי 3.png";
import result4 from "../../images/גלי ניפרבסקי לפני אחרי 4.png";
import result5 from "../../images/גלי ניפרבסקי לפני אחרי 5.png";
import result6 from "../../images/גלי ניפרבסקי לפני אחרי 6.png";
import result7 from "../../images/גלי ניפרבסקי לפני אחרי 7.png";

const BeforeAfter = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initial check for mobile
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = [
    result1, result2, result3, result4, 
    result5, result6, result7
  ];

  // Adjust animation duration based on screen size
  const getAnimationDuration = () => {
    if (windowWidth <= 450) return '40s'; // Slower on mobile
    if (windowWidth <= 1050) return '30s';
    return '25s'; // Default for larger screens
  };

  const styles = {
    container: {
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
    },
    title: {
      fontSize: windowWidth <= 450 ? '2rem' : windowWidth <= 1050 ? '2.2rem' : '2.5rem',
      fontFamily: 'Assistant',
      textAlign: 'center',
      margin: '1% auto',
      direction: 'rtl',
      width: '100%',
      fontWeight: 800,
      color: 'black',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
    },
    explain: {
      fontSize: windowWidth <= 450 ? '18px' : windowWidth <= 1050 ? '20px' : '25px',
      direction: 'rtl',
      width: windowWidth <= 450 ? '90%' : windowWidth <= 1050 ? '80%' : '65%',
      color: 'black',
      textAlign: 'center',
      margin: '2% auto',
      fontFamily: 'AssistantR',
    },
    scrollTrack: {
      display: 'flex',
      width: 'fit-content',
      animation: `scroll ${getAnimationDuration()} linear infinite`,
      gap: '20px',
    },
    scrollContainer: {
      display: 'flex',
      gap: windowWidth <= 450 ? '40px' : windowWidth <= 1050 ? '50px' : '80px',
      padding: '20px 0',
    },
    imageWrapper: {
      flexShrink: 0,
      height: windowWidth <= 450 ? '180px' : windowWidth <= 1050 ? '200px' : '220px',
    },
    image: {
      height: windowWidth <= 450 ? '180px' : windowWidth <= 1050 ? '200px' : '220px',
      width: 'auto',
      objectFit: 'contain',
      borderRadius: '8px',
    },
  };

  return (
    <>
      <div style={styles.title}>
        עברו דרכי מאות בנות
      </div>
      
      <div style={styles.container}>
        {/* Use inline keyframes for better mobile compatibility */}
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-100% / 2)); }
            }
          `}
        </style>
        <div style={styles.scrollTrack}>
          {/* First group of images */}
          <div style={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} style={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  style={styles.image}
                />
              </div>
            ))}
          </div>
          {/* Second identical group of images */}
          <div style={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} style={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  style={styles.image}
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