import React, { useState, useEffect } from 'react';
import styles from "./SecondScreen.module.css";
import { User, Coffee, ShoppingBag, Camera, Heart, Star, Sun, Sparkles } from 'lucide-react';
import Bonus from '../components/newBox/NewBox';
import makeup from "../Icons/wired-lineal-1589-makeup-mirror-hover-pinch (1).json"
import camera from "../Icons/wired-lineal-61-camera-morph-cross.json"
import hide from "../Icons/wired-lineal-1559-lipstick-hover-pinch (1).json"

import SmallBox from '../components/SmallBox/SmallBox';
import Button from '../components/WaButton/Button';
import Services from '../components/treatments/Services';
const LaserRemovalScreen = () => {
    const INTRO_TEXTS = [
        "עשית איפור קבוע בעבר והיום הוא כבר לא מחמיא לך?",
        "מרגישה שאת תקועה עם קעקוע שהתחרטת עליו?",
       
        "מחפשת איפור קבוע טבעי יותר ממה שיש לך היום?"
    ];
    
    const [text, setText] = useState(INTRO_TEXTS[0]);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadeIn(false);
            
            setTimeout(() => {
                setText(INTRO_TEXTS[(INTRO_TEXTS.indexOf(text) + 1) % INTRO_TEXTS.length]);
                setFadeIn(true);
            }, 500); // Wait for fade out before changing text
            
        }, 4000);
        
        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <div className={styles.container} id="לייזר">
            <div className={styles.introSection}>
                <div className={styles.introBox}>
                    <span className={`${styles.textTransition} ${fadeIn ? styles.fadeIn : styles.fadeOut}`}>
                        {text}
                    </span>
                </div>
            </div>
            
            <div className={styles.description}>
                אני מבינה בדיוק מה את מרגישה בכל יום מחדש
            </div>
   

            <div className={styles.concernsContainer}>
            <SmallBox icon={camera} text="את נמנעת מצילומים כי את כבר לא אוהבת איך שהאיפור הקבוע נראה"/>
            <SmallBox icon={hide} text="לפני אירועים חברתיים את משקיעה יותר מדי זמן בניסיון להסתיר את האיפור הקבוע"/>
            <SmallBox icon={makeup} text="בכל פעם שאת מסתכלת במראה את פשוט חושבת לעצמך - מתי אני אוריד את זה.."/>
 
            </div>

         
<div className={styles.title}>חשוב לי שתביני</div>
            <div className={styles.description}>
                זה לגמרי לגיטימי להרגיש כך! עולם האיפור הקבוע השתנה והתפתח באופן דרמטי בשנים האחרונות. הטכניקות, הצבעים והסגנונות של פעם פשוט לא משקפים את הסטנדרטים של היום. מה שנחשב אופנתי ומושלם לפני מספר שנים, עשוי להיראות מיושן או פחות מתאים כיום. זה תהליך טבעי וקורה לרבות - והכי חשוב, זה לגמרי בר שינוי!
            </div>

            <div className={styles.goodNews}>
                יש פתרון מקצועי, בטוח ויעיל!
            </div>
            
            <div className={styles.description}>
                כשתסירי את האיפור הקבוע תוכלי
            </div>
            
            {/* רשימת היתרונות עם עיצוב זכוכיתי מלבני */}
            <div className={styles.benefitsContainer}>

                <div className={styles.benefitItemNew}>
                    <div className={styles.benefitIcon}><Sparkles /></div>
                    <div className={styles.benefitText}>לחזור למראה הטבעי והרענן שלך</div>
                </div>
                <div className={styles.benefitItemNew}>
                    <div className={styles.benefitIcon}><Star /></div>
                    <div className={styles.benefitText}>להרגיש ביטחון ושמחה כשאת מסתכלת במראה</div>
                </div>
                <div className={styles.benefitItemNew}>
                    <div className={styles.benefitIcon}><Sun /></div>
                    <div className={styles.benefitText}>לחסוך זמן ומאמץ בהסתרת פגמים בעזרת איפור</div>
                </div>
                <div className={styles.benefitItemNew}>
                    <div className={styles.benefitIcon}><Heart /></div>
                    <div className={styles.benefitText}>להתחיל מחדש עם בחירות שמתאימות לך היום</div>
                </div>
                <div className={styles.benefitItemNew}>
                    <div className={styles.benefitIcon}><Sparkles /></div>
                    <div className={styles.benefitText}>לבחור סגנון עדכני שמתאים לטרנדים ולטכניקות החדשות</div>
                </div>
    
            </div>
            <Services/>
            <Button text="אני רוצה לשמוע עוד!"/>
        </div>
    );
};

export default LaserRemovalScreen;