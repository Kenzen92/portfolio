import HeroImage from './components/images/HeroImage';
import Section1 from './components/sections/section1/Section1';
import Section2 from './components/sections/section2/Section2';
import Section3 from './components/sections/section3/Section3';
import Section4 from './components/sections/slidebar/Slidebar';
import Section5 from './components/sections/section5/Section5';
import Footer from './components/sections/footer/Footer';
import ButtonStrip from './components/ButtonStrip/ButtonStrip';

import './App.css'


function App(): JSX.Element {
  
  return (
    <>
    <HeroImage />
    <Section1 />
    <Section4 direction="right" start={0} finish={0.4} />
    <Section2 />
    <ButtonStrip link1="https://kennysolutions.com/teach" link1Text="Visit the live site" link2="Github.com/kenzen92" link2Text="View on Github"/>
    <Section4 direction="left" start={0.4} finish={0.7}/>
    <Section3 />
    <ButtonStrip link1="https://kennysolutions.com/weather" link1Text="Visit the live site" link2="Github.com/kenzen92" link2Text="View on Github"/>
    <Section4  direction="right" start={0.7} finish={1}/>
    <Section5 />
    <Footer />
    </>
  );
}

export default App;

