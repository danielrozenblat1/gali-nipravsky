import React, { useState, useEffect, useRef } from 'react';
import styles from './Etos.module.css';
import milon from "../../images/מילון היופי.png";
import margishot from "../../images/מרגישות יופי.png";
import Button from '../WaButton/Button';
import ContactForm from '../lightForm/Form';

const Etos = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const typingEffect1Ref = useRef(null);
  const typingEffect2Ref = useRef(null);
  
  // Enhanced videos array with more metadata
  const videos = [

    {
      id: 1,
      title: "מרגישות יופי",
      date: "3.3.23",
      month: "מרץ",
      year: "2023",
      embedId: "wougTJ3P_lw",
      description: "לחצו על הסרטון כדי לשמוע קצת ממני במרגישות יופי"
    },
    {
      id: 2,
      title: "מרגישות יופי",
      date: "11.8.23",
      month: "אוגוסט",
      year: "2023",
      embedId: "LtNaYhG3OwM",

      description: "לחצו על הסרטון כדי לשמוע קצת ממני במרגישות היופי"
    },
  ];

  // Animation effect for active video change
  useEffect(() => {
    const videoContainer = document.querySelector(`.${styles.videoContainer}`);
    if (videoContainer) {
      videoContainer.style.opacity = '0';
      videoContainer.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        videoContainer.style.opacity = '1';
        videoContainer.style.transform = 'translateY(0)';
      }, 200);
    }
  }, [activeVideo]);
  
  // Custom typing effect implementation - more unique without cursor
  useEffect(() => {
    const animateText = (element, text, delay = 0) => {
      if (!element) return;
      
      setTimeout(() => {
        let i = 0;
        element.textContent = '';
        
        const typeNextChar = () => {
          if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeNextChar, 120); // Slowed down typing speed for visibility
          }
        };
        
        typeNextChar();
      }, delay);
    };
    
    // Animate both texts with delay between them
    if (typingEffect1Ref.current) {
      console.log("Starting first animation");
      animateText(typingEffect1Ref.current, 'מרגישות יופי', 500);
    }
    
    if (typingEffect2Ref.current) {
      console.log("Starting second animation");
      animateText(typingEffect2Ref.current, 'מילון היופי', 2500);
    }
  }, []); // Only run once on component mount

  return <>
    <div className={styles.container}>
      <div className={styles.bgOverlay}></div>
      
      <header className={styles.header}>

        
        <div className={styles.description}>
          <span className={styles.descriptionQuote}>הופעתי ב</span>
          <img 
            src={margishot} 
            alt="גלי ניפרבסקי מתארחת"
            className={styles.featuredImageInline} 
          />

        </div>
      </header>
      
      {/* Main Featured Image - now hidden 
      <div className={styles.featuredImageContainer}>
        <img 
          src={margishot} 
          alt="גלי ניפרבסקי מתארחת במרגישות יופי"
          className={styles.featuredImage} 
        />
      </div> */}
      
      <main className={styles.content}>
        {/* Timeline Panel */}
        <div className={styles.sidePanel}>
          <div className={styles.timeline}>
            <h3 className={styles.timelineHeading}>ציר זמן הופעות</h3>
            {videos.map((video, index) => (
              <div 
                key={video.id}
                className={`${styles.timelineItem} ${index === activeVideo ? styles.activeItem : ''}`}
                onClick={() => setActiveVideo(index)}
              >
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineDate}>
                  <span className={styles.timelineMonth}>{video.month}</span>
                  <span className={styles.timelineYear}>{video.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Videos Container */}
        <div className={styles.videosContainer}>
          <div className={styles.videoContainer} style={{ transition: 'opacity 0.2s ease, transform 0.3s ease' }}>
            <h2 className={styles.videoTitle}>
              {videos[activeVideo].title}
              <span className={styles.videoDate}>{videos[activeVideo].date}</span>
            </h2>
            
            <div className={styles.videoFrame}>
              <iframe 
                className={styles.video}
                src={`https://www.youtube.com/embed/${videos[activeVideo].embedId}`}
                title={`${videos[activeVideo].title} ${videos[activeVideo].date}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            
            <p className={styles.videoDescription}>
              {videos[activeVideo].description}
            </p>
          </div>
        </div>
      </main>

    </div>
    <div className={styles.center}>
    <div className={styles.description} style={{textAlign:"center", margin:'0 auto', display:"flex", justifyContent:"center"}}>
  הצעד הראשון למראה שתמיד חלמת עליו מתחיל כאן! אני מחכה לך לחוות דעת מקצועית בשיחת ייעוץ אישית – ללא עלות וללא התחייבות.
</div>
        </div>
    <div id="shapo-widget-39723373db6e4d029b98" style={{width: '100%', display: 'flex', justifyContent: 'center'}}></div>
    <ContactForm/>
  
</>
};

export default Etos;