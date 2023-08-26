import HeroImage from './components/images/HeroImage';
import Section2 from './components/sections/section2/Section2';
import Section3 from './components/sections/section3/Section3';
import Section4 from './components/sections/section4/Section4';
import Section5 from './components/sections/section5/Section5';
import Footer from './components/sections/footer/Footer';
import ButtonStrip from './components/ButtonStrip/ButtonStrip';

import './App.css'


function App(): JSX.Element {
  
  return (
    <>
    <HeroImage />
    <Section2 />
    <ButtonStrip link1="https://kennysolutions.com/" link1Text="Visit the live site" link2="Github.com/kenzen92" link2Text="View on Github"/>
    <Section4 direction="left"/>
    <Section3 />
    <ButtonStrip link1="https://kennysolutions.com/" link1Text="Visit the live site" link2="Github.com/kenzen92" link2Text="View on Github"/>
    <Section4  direction="right"/>
    <Section5 />
    <Footer />
    </>
  );
}

export default App;

