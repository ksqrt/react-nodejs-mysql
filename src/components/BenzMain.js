import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';

import HeroPage from '../components/BenzMain/HeroPage';
import Navbar from '../components/BenzMain/Navbar';
import SecNavbar from '../components/BenzMain/SecNavbar';
import Wrapper from '../components/BenzMain/Wrapper';
import Headline from '../components/BenzMain/Headline';
import Carrousel from '../components/BenzMain/Carrousel';
import ImageHeadline from '../components/BenzMain/ImageHeadline';
import Gallery from '../components/BenzMain/Gallery';
import Footer from '../components/BenzMain/Footer';

import { ImageHeadlineData } from './BenzMaindata/ImageHeadlineData';
import { HeadlineData } from './BenzMaindata/HeadlineData';
import { Carrousel1 } from './BenzMaindata/Carrousel1';
import { Carrousel2 } from './BenzMaindata/Carrousel2';
import { Carrousel3 } from './BenzMaindata/Carrousel3';
import { Carrousel4 } from './BenzMaindata/Carrousel4';

function BenzMain() {

  const {ref, inView } = useInView();
  const [stickNavbar, setStickNavbar] = useState();
 

  useEffect(() => {

    if(!inView){
      setStickNavbar(true);
    }else{
      setStickNavbar(false);
    }

  },[inView])

  let newClasses = 'SecNavbar';

  if(stickNavbar){
    newClasses += ' stickNavbar';
  }


  return (
    <div className="App">
        <Navbar  />
        
        <Wrapper  >
          <div ref={ref}>
          <HeroPage/>
          </div>
          <SecNavbar stickyClass={newClasses} />
        </Wrapper>
        <Headline title={HeadlineData.exterior.headlineTitle} paragraph={HeadlineData.exterior.headlineParagraph} />
        <Carrousel slidesData={Carrousel1} slidesNumber={3} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.design} />
        <Headline title={HeadlineData.interior.headlineTitle} paragraph={HeadlineData.interior.headlineParagraph} />
        <Carrousel slidesData={Carrousel2} slidesNumber={6} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.interior} />
        <Headline title={HeadlineData.technology.headlineTitle} paragraph={HeadlineData.technology.headlineParagraph} />
        <Carrousel slidesData={Carrousel3} slidesNumber={4} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.technology} />
        <Headline title={HeadlineData.safety.headlineTitle} paragraph={HeadlineData.safety.headlineParagraph} />
        <Carrousel slidesData={Carrousel4} slidesNumber={4} />
        <ImageHeadline imgheadlineData={ImageHeadlineData.safety} />

        <Gallery />

        <Footer />
    </div>
    
  );
}

export default BenzMain;
