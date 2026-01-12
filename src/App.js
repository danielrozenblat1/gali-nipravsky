import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import LaserRemovalScreen from './screens/SecondScreen';
import Etos from './components/Etos/Etos';
import AboutMe from './components/me/Me';
import ThirdScreen from './screens/ThirdScreen';
import ByMe from './components/ByMe/ByMe';
import BeforeAfter from './components/recommends/BeforeAfter';
import NavBarNew from './components/CourseNav/NavBarNew';
import ForthScreen from './screens/ForthScreen';
import FifthScreen from './screens/FifthScreen';
import PrivacyPolicy from './privacy/Privacy';
import HeroSection from './screens/NewFirstScreen';

function App() {
  return <>
  <NavBarNew/>
   {/* <FirstScreen/> */}
   <HeroSection/>
   {/* <LaserRemovalScreen/> */}


  <ThirdScreen/>
     <AboutMe/>
   <Etos/>
{/* <ForthScreen/> */}
{/* <FifthScreen/> */}
<PrivacyPolicy 
  ownerName="גלי ניפרבסקי" 
  email="Galgal532@gmail.com" 
  phone="+972 52-480-1251" 
  domain="https://gali-lashes-artface.co.il/" 
/>
  <ByMe/>
   </>

}

export default App;
