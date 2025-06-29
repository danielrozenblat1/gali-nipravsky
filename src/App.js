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

function App() {
  return <>
  <NavBarNew/>
   <FirstScreen/>
   <LaserRemovalScreen/>

   <AboutMe/>
   <Etos/>
  <ThirdScreen/>
<ForthScreen/>
<FifthScreen/>
  <ByMe/>
   </>

}

export default App;
