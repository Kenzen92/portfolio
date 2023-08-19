import HeroImage from './components/images/HeroImage';
import Section2 from './components/sections/section2/Section2';
import Section3 from './components/sections/section3/Section3';
import Section4 from './components/sections/section4/Section4';
import Section5 from './components/sections/section5/Section5';
import Footer from './components/sections/footer/Footer';

import './App.css'


function App(): JSX.Element {
  
  return (
    <>
    <HeroImage />
    <Section2 />
    <Section4 direction="left"/>
    <Section3 />
    <Section4  direction="right"/>
    <Section5 />
    <Footer />
    </>
  );
}

export default App;

