// Services.js
import React, { useState } from 'react';
import styles from './Services.module.css';
import Button from '../WaButton/Button';
import { Plus, Minus, User, Check, ThumbsUp, CheckCircle } from 'lucide-react';

import processImage from "../../images/פיקו מילניום.png"; // תמונה לתהליך העבודה

// תמונות נוספות של המכשיר
import additionalImage1 from "../../images/פיקו 1.png";
import additionalImage2 from "../../images/פיקו 2.png";
import additionalImage3 from "../../images/פיקו 3.png";
import additionalImage4 from "../../images/פיקו 4.png";

const Services = () => {
  // מצב לשליטה על הקופסאות הפתוחות - שינוי למערך כדי לאפשר מספר קופסאות פתוחות
  const [openAccordions, setOpenAccordions] = useState([]);

  // פונקציה להחלפת מצב הקופסא - פתוח/סגור ללא סגירת האחרות
  const toggleAccordion = (id) => {
    if (openAccordions.includes(id)) {
      // סגירת קופסא ספציפית אם היא פתוחה
      setOpenAccordions(openAccordions.filter(accordionId => accordionId !== id));
    } else {
      // פתיחת קופסא חדשה ללא סגירת האחרות
      setOpenAccordions([...openAccordions, id]);
    }
  };

  // מערך תמונות נוספות
  const additionalImages = [
    { src: additionalImage1, alt: "מכשיר לייזר PICO MILLENIUM - זווית 1" },
    { src: additionalImage2, alt: "מכשיר לייזר PICO MILLENIUM - זווית 2" },
    { src: additionalImage3, alt: "מכשיר לייזר PICO MILLENIUM - זווית 3" },
    { src: additionalImage4, alt: "מכשיר לייזר PICO MILLENIUM - זווית 4" }
  ];

  const services = [
    {
      id: 1,
      title: "הסרת איפור קבוע באמצעות לייזר",
      forWhom: "למי שמרגישה תקועה עם איפור קבוע שכשל, נשים שעשו איפור קבוע בעבר ורוצות מראה טבעי יותר, או נשים שרוצות לשנות את הגבות או השפתיים שלהן",
      includes: "פגישת ייעוץ חינם, התאמה אישית של תהליך ההסרה, חומרי אלחוש מהטובים בעולם להפחתת כאבים, וליווי לאורך כל התהליך",
      message: "היי גלי הגעתי מהדף, אשמח לשמוע עוד על הסרת איפור קבוע באמצעות לייזר",
      solutions: "פותר תחושת חוסר ביטחון מול המראה, משחרר אותך מאיפור קבוע שאינך אוהבת, מנטרל כהויות לא רצויות בשפתיים ובגבות, ומאפשר לך להתחיל מחדש עם מראה טבעי ומדויק יותר",
      afterFeel: "תרגישי משוחררת מהמראה הישן שלא אהבת, תקבלי ביטחון מחודש במראה שלך, ותוכלי לבחור אם להישאר עם המראה הטבעי או ליצור מראה חדש שמתאים יותר לפנייך"
    },
    {
      id: 2,
      title: "הסרת קעקועים באמצעות לייזר",
      forWhom: "לאנשים שמאסו בקעקועים שלהם ולהתחיל מחדש עם מראה נקי יותר",
      includes: "פגישת ייעוץ חינם, והערכת מספר טיפולים נדרשים, שימוש במכשיר לייזר מהמתקדמים בשוק, חומרי אלחוש להפחתת כאבים, וליווי מקצועי לאורך התהליך",
      message: "היי גלי הגעתי מהדף, אשמח לשמוע עוד על הסרת קעקועים באמצעות לייזר",
      solutions: "מאפשר לך להיפרד מקעקועים שאינך אוהבת יותר ונותנת לך הזדמנות להתחיל מחדש או לעצב קעקוע אחר במקום",
      afterFeel: "תרגישי הקלה גדולה כשתראי את הקעקוע נעלם בהדרגה, תחושי חופש לבחור מחדש את המראה שלך, ותוכלי להתגאות בעור שלך ללא הקעקוע שהפריע לך"
    },
    {
      id: 3,
      title: "פילינג קרבון בלייזר - הסוד לעור מושלם",
      forWhom: "לכל סוגי העור, לגברים ולנשים, במיוחד למי שסובל מאקנה (לא פעיל), פיגמנטציה, או סימני הזדקנות ורוצה עור בריא ומחודש",
      includes: "טיפול מהיר של כחצי שעה, שימוש בלייזר מתקדם, חיטוי והכנת העור, וטיפול ללא זמן החלמה - ניתן לחזור לשגרה מיד!",
      message: "היי גלי הגעתי מהדף, אשמח לשמוע עוד על פילינג קרבון בלייזר",
      solutions: "מנקה את העור לעומק, משפר פיגמנטציה וגוון עור לא אחיד, מטפל בעור אדום עם פצעונים, מעודד יצירת קולגן ואלסטין, ומעניק לעור מראה צעיר ורענן יותר",
      afterFeel: "תרגישי שהעור שלך נקי, רענן וזוהר כבר אחרי טיפול ראשון. עם סדרת טיפולים תוכלי לראות הצערה ממשית של העור, שיפור בגמישות ומרקם, ותחושת ביטחון מחודשת במראה הפנים שלך"
    }
  ];

  return <>
    <div className={styles.servicesContainer}>
      <h2 className={styles.servicesTitle}>וזה קורה כך:</h2>
      <p className={styles.servicesSubtitle}>טיפולי הלייזר המתקדמים שלי מאפשרים לך להשתחרר מאיפור קבוע וקעקועים שאינך אוהבת יותר, וליהנות מעור פנים צעיר ורענן - תהליך בטוח, מקצועי ועם תוצאות מוכחות</p>
      
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <div 
              className={styles.serviceHeader} 
              onClick={() => toggleAccordion(service.id)}
            >
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <div className={styles.accordionIcon}>
                {openAccordions.includes(service.id) ? (
                  <Minus strokeWidth={3} />
                ) : (
                  <Plus strokeWidth={3} />
                )}
              </div>
            </div>
            
            {openAccordions.includes(service.id) && (
              <div className={styles.serviceContent}>
                <div className={styles.serviceDetails}>
                  <div className={styles.serviceDetailItem}>
                    <div className={styles.serviceDetailIcon}>
                      <User size={20} />
                    </div>
                    <div className={styles.serviceDetailText}>
                      <p className={styles.serviceDetailLabel}>למי מתאים:</p>
                      <p className={styles.serviceDetailValue}>{service.forWhom}</p>
                    </div>
                  </div>
                  
                  <div className={styles.serviceDetailItem}>
                    <div className={styles.serviceDetailIcon}>
                      <Check size={20} />
                    </div>
                    <div className={styles.serviceDetailText}>
                      <p className={styles.serviceDetailLabel}>מה זה פותר:</p>
                      <p className={styles.serviceDetailValue}>{service.solutions}</p>
                    </div>
                  </div>
                  
                  <div className={styles.serviceDetailItem}>
                    <div className={styles.serviceDetailIcon}>
                      <ThumbsUp size={20} />
                    </div>
                    <div className={styles.serviceDetailText}>
                      <p className={styles.serviceDetailLabel}>מה תרגישי אחרי:</p>
                      <p className={styles.serviceDetailValue}>{service.afterFeel}</p>
                    </div>
                  </div>
                  
                  <div className={styles.serviceDetailItem}>
                    <div className={styles.serviceDetailIcon}>
                      <CheckCircle size={20} />
                    </div>
                    <div className={styles.serviceDetailText}>
                      <p className={styles.serviceDetailLabel}>מה כולל:</p>
                      <p className={styles.serviceDetailValue}>{service.includes}</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.serviceButtonContainer}>
                  <Button text="לעוד פרטים" message={service.message} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className={styles.additionalInfoContainer}>
        <div className={styles.additionalInfo}>
          <h3 className={styles.infoTitle}>קצת על מכשיר הלייזר PICO MILLENIUM - הטכנולוגיה המתקדמת בעולם לטיפולי פנים והסרת קעקועים</h3>
          <p>בסטודיו שלי אני משתמשת במכשיר PICO MILLENUIM, מהמתקדמים בעולם לטיפולי פנים והסרת קעקועים. המכשיר פועל באורכי גל שונים המאפשרים לי להתאים את הטיפול בצורה מדויקת לצרכים השונים - בין אם מדובר בהסרת איפור קבוע, קעקועי גוף, או פילינג קרבון לחידוש העור.</p>
          <p>יתרונות המכשיר כוללים:</p>
          <ul className={styles.beamBenefitsList}>
            <li>טיפול בטוח ויעיל המתאים לכל סוגי העור</li>
            <li>טכנולוגיה מתקדמת להסרת פיגמנט בצורה עדינה ויסודית</li>
            <li>מינימום אי-נוחות בזכות בזכות מאלחשים מהטובים בעולם</li>
            <li>תוצאות מהירות ונראות לעין</li>
            <li>פילינג קרבון ("פילינג הוליווד") להצערת העור ושיפור איכותו</li>
          </ul>

          <p>עם 25 שנות ניסיון בתחום היופי ומכשיר לייזר מהמתקדמים בשוק, אני מבטיחה תהליך מקצועי, בטוח ועם תוצאות מרשימות. אני מתעדכנת כל הזמן בטכנולוגיות החדשות כדי להביא ללקוחות שלי את הטיפול הטוב ביותר.</p>
        </div>
        <div className={styles.processImageContainer}>
          <img 
            src={processImage} 
            alt="מכשיר לייזר +BEAM" 
            className={styles.processImage} 
          />
        </div>
      </div>

      <div className={styles.additionalImagesSection}>
        <h4 className={styles.additionalImagesTitle}>תמונות נוספות מהמכשיר</h4>
        <div className={styles.additionalImagesGrid}>
          {additionalImages.map((image, index) => (
            <div key={index} className={styles.additionalImageContainer}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className={styles.additionalImage} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </>;
};

export default Services;