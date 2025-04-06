import BeforeAfter from "../components/recommends/BeforeAfter"
import Button from "../components/WaButton/Button"
import styles from "./ForthScreen.module.css"
import { Clock, RefreshCw, Eye, Sparkles, DropletIcon, SunIcon, Award, Fingerprint, Wand2 } from "lucide-react"

const ForthScreen = () => {
   
  return <>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title} id="שזירת ריסים">אם את כאן</h1>
        <p className={styles.description}>סימן שאת מעוניינת לשמוע קצת יותר לגבי שזירת ריסים</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>בעזרת שזירת ריסים תוכלי להפטר מ</h2>
        <div className={styles.problemCards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Eye size={24} strokeWidth={1} />
            </div>
            <h3 className={styles.cardTitle}>עפעף נפול</h3>
            <p className={styles.cardDesc}>כשאת מסתכלת במראה כל בוקר, ולמרות שישנת טוב, העפעפיים שלך נראים כבדים וגורמים לך להיראות עייפה. אפילו האיפור לא עוזר להרים אותם.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Eye size={24} strokeWidth={1} />
            </div>
            <h3 className={styles.cardTitle}>עין נפולה</h3>
            <p className={styles.cardDesc}>כשניסית כל קרם וסרום אפשרי, אבל העיניים שלך עדיין נראות נפולות. כשאת מצטלמת את תמיד מרגישה צורך להרים את הגבות כדי שהעיניים ייראו פקוחות יותר.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Eye size={24} strokeWidth={1} />
            </div>
            <h3 className={styles.cardTitle}>עיניים סגורות</h3>
            <p className={styles.cardDesc}>כשאת מחייכת, העיניים שלך כמעט נעלמות. למדת כל טכניקת איפור אפשרית - אייליינר, צלליות בהירות, הדגשה - אבל שום דבר לא באמת מצליח לפתוח את המראה של העיניים שלך.</p>
          </div>
        </div>
      </div>


      <div className={styles.section}>
      <h2 className={styles.sectionTitle}>קצת על הטיפול</h2>
        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <Clock size={28} strokeWidth={1} className={styles.infoIcon} />
            <h3 className={styles.infoTitle}>משך הטיפול</h3>
            <p className={styles.infoText}>שעה וחצי של חוויה מרגיעה</p>
          </div>

          <div className={styles.infoCard}>
            <RefreshCw size={28} strokeWidth={1} className={styles.infoIcon} />
            <h3 className={styles.infoTitle}>תחזוקה</h3>
            <p className={styles.infoText}>מילוי הריסים אחת לשלושה שבועות</p>
          </div>

          <div className={styles.infoCard}>
            <Fingerprint size={28} strokeWidth={1} className={styles.infoIcon} />
            <h3 className={styles.infoTitle}>סטיילינג מותאם אישית</h3>
            <p className={styles.infoText}>התאמה מדויקת לכל מבנה עין</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>איך זה קורה?</h2>
        <div className={styles.processSteps}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>01</span>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>תיאום ציפיות</h3>
              <p className={styles.stepText}>פגישת ייעוץ אישית 1:1 לקבלת הדעה המקצועית המתאימה עבורך</p>
            </div>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>02</span>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>טיפול מדויק</h3>
              <p className={styles.stepText}>עבודה מדויקת ונכונה לשמירה על בריאות הריסים והעיניים</p>
            </div>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>03</span>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>ביצוע השזירה</h3>
              <p className={styles.stepText}>תהליך מקצועי ומדויק תוך שימוש בחומרים טבעיים איכותיים ממשי,קשמיר מינק</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>ברגע שתצאי מהקליניקה שלי תרגישי</h2>
        <div className={styles.benefitsList}>
          <div className={styles.benefit}>
            <Sparkles size={22} strokeWidth={1} className={styles.benefitIcon} />
            <p className={styles.benefitText}>ביטחון עם ריסים מלאים ומרשימים - בלי צורך במסקרה</p>
          </div>
   
          <div className={styles.benefit}>
            <Clock size={22} strokeWidth={1} className={styles.benefitIcon} />
            <p className={styles.benefitText}>רווח של זמן יקר בבקרים - כמו מתנה של 10 דקות נוספות</p>
          </div>
          <div className={styles.benefit}>
            <Eye size={22} strokeWidth={1} className={styles.benefitIcon} />
            <p className={styles.benefitText}>רעננות במבט - גם אחרי יום עמוס או לילה ללא שינה</p>
          </div>
          <div className={styles.benefit}>
            <Award size={22} strokeWidth={1} className={styles.benefitIcon} />
            <p className={styles.benefitText}>עיניים פתוחות ומודגשות - המחמאות לא יפסיקו להגיע</p>
          </div>
          <div className={styles.benefit}>
            <Wand2 size={22} strokeWidth={1} className={styles.benefitIcon} />
            <p className={styles.benefitText}>שינוי טבעי במראה העפעפיים - בלי הליכים פולשניים</p>
          </div>
        </div>
      </div>

    </div>
          <BeforeAfter/>
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>מוכנה למראה חדש?</h2>
            
            <p className={styles.ctaText}>קבעי תור עכשיו לחוויית שזירת ריסים מקצועית</p>
           <Button text="תלחצי כאן ונדבר" message="היי גלי הגעתי מהדף, אשמח לשמוע עוד על שזירת ריסים"/>
          </div>
  </>
}

export default ForthScreen