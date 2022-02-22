import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroBtnWrapper, HeroH1, HeroP, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>The World Connected made Easy</HeroH1>
        <HeroP>Sign Up for new acccout today</HeroP>
     
      <HeroBtnWrapper>
        <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} offset={-80} duration={500} exact="true" spy={true}>
          Get Started {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
