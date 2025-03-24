import Bonus from "../components/newBox/NewBox"
import Works from "../components/recommends/Works"
import styles from "./ThirdScreen.module.css"
import lips from "../Icons/wired-outline-1597-lips-hover-pinch (3).json"
import makeup from "../Icons/wired-outline-1589-makeup-mirror-hover-pinch (3).json"
import lipstick from "../Icons/wired-outline-1589-makeup-mirror-hover-pinch (3).json"

const ThirdScreen = () => {
   
  return (
    <>
    <div className={styles.container}>
      <div id="איפור קבוע" className={styles.title}>אם הגעת לכאן</div>
      <div className={styles.description}>סימן שאת חושבת כבר תקופה לעשות איפור קבוע</div>


      <div className={styles.title}>אני יודעת כמה מתסכל זה</div>
      <div className={styles.row}>
        <Bonus 
          title="כשגבול השפה הולך ומיטשטש" 
          description="השפתיים מאבדות את ההגדרה הטבעית שלהן עם הגיל, וכל ניסיון לשים אודם רק מדגיש את חוסר הסימטריה" 
          icon={lips}
        />
        <Bonus 
          title="כשהאודם נמרח על הכוסות והשפתיים" 
          description="בכל לגימה מחדש.. באימונים, כשחם בחוץ ובמהלך היום כשאת נוגעת בשפתיים... האודם לא מחזיק מעמד" 
          icon={lipstick}
        />
        <Bonus 
          title="להשקיע המון זמן מול המראה כל בוקר" 
          description="כל בוקר מחדש לקום מוקדם יותר כדי להשקיע במראה שלך, לנסות להשיג סימטריה מושלמת, ובסוף להתפשר כי את כבר מאחרת לעבודה.." 
          icon={makeup}
        />
      </div>
      <div className={styles.description}>ואם הגעת למסקנה <span style={{textDecoration:"underline"}}>שהגיע הזמן לשינוי</span> <br/>אז אני כאן כדי לעשות סדר</div>

      <div className={styles.title}>בעזרת איפור קבוע:</div>

      <div className={styles.advantages}>
        <div className={styles.advantageBox}>
          <div className={styles.checkmark}>✓</div>
          <p>תזכי למראה טבעי ומושלם שנשאר לאורך זמן</p>
        </div>
        <div className={styles.advantageBox}>
          <div className={styles.checkmark}>✓</div>
          <p>תחסכי זמן יקר בהתארגנות בבוקר</p>
        </div>
        <div className={styles.advantageBox}>
          <div className={styles.checkmark}>✓</div>
          <p>תיפטרי מבעיות של אסימטריה ותטשטשי צלקות בקלות</p>
        </div>
        <div className={styles.advantageBox}>
          <div className={styles.checkmark}>✓</div>
          <p>תוכלי להתאמן,לעשן,לשתות מכוסות והפעם.. לא יימרח כלום</p>
        </div>
        <div className={styles.advantageBox}>
          <div className={styles.checkmark}>✓</div>
          <p>תחזרי להיות בטוחה במראה שלך בכל רגע ביום</p>
        </div>
      </div>

      <Works/>

      </div>
    </>
  )
}

export default ThirdScreen