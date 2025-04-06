import React from 'react';
import styles from './Me.module.css';
import gali from "../../images/גלי תדמית.png";
import Recommendations from '../recommends/Recommends';
import BeforeAfter from '../recommends/BeforeAfter';
import Start from '../recommends/Start';


const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={gali} alt="גלי ניפרבסקי" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>גלי ניפרבסקי</h1>
          <div className={styles.subtitle}>"היופי הוא אמנות שמשלבת מקצועיות, חדשנות ותשוקה אמיתית"</div>
          <p className={styles.description}>
            מאז ומתמיד היה לי חיבור מיוחד ליופי ולאסתטיקה. כבר בגיל צעיר גיליתי שיש לי יכולת טבעית לזהות מה מתאים לכל אחת - מהצבע הנכון ועד לצורה המושלמת. זה התחיל כשחברות פנו אליי שאעשה להן ציפורניים וגבות (הן זיהו את הפוטנציאל ראשונות).
          </p>
          <p className={styles.description}>
            את המסע המקצועי שלי בעולם היופי התחלתי בשנת 2000. באותה תקופה עבדתי בבנקאות, אך חיפשתי דרך לבטא את היצירתיות שלי. התחלתי לעבוד בציפורניים במקביל לעבודתי בבנק, והתגובות היו מדהימות. תוך זמן קצר השם שלי התפשט בכל רחבי הנגב, ומה שהתחיל כתחביב הפך לתשוקה של ממש. אחרי תקופה די קצרה קיבלתי את ההחלטה שאפשרה לי לפרוח באמת - להקדיש את עצמי במלואי לאמנות היופי.
          </p>
          <p className={styles.description}>
            לאורך 25 שנות הקריירה שלי, התמחיתי בתחומים רבים והתפתחתי ללא הרף. למדתי מהמומחים המובילים בעולם, כולל באקדמיות יוקרתיות בלונדון. יצרתי ליין מוצרי ריסים ייחודי שמשמש מקצועניות בכל הארץ. הכישרון והמקצועיות שלי זיכו אותי בהופעות בתוכניות טלוויזיה מובילות כמו "מילון היופי" ו"מרגישות יופי". המוטו שלי תמיד היה ויהיה: ללמוד, להתחדש ולהעניק את החוויה והתוצאה הטובה ביותר ללקוחה.
          </p>
        </div>
      </div>
      <Start/>
      {/* <BeforeAfter/> */}
<Recommendations/>
    </>
  );
};

export default AboutMe;