import React, { useState } from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements';
import video from '../../videos/video2.mp4'
import { Button } from '../ButtonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
       <HeroBg>
          <VideoBg autoPlay loop muted src={video} type='video/mp4' />
       </HeroBg>
       <HeroContent>
          <HeroH1>Something Something Something </HeroH1>
          <HeroP>
          Lorem ipsum dolor sit amet. Et iure optio qui tenetur quam et delectus exercitationem ea voluptas repellendus et temporibus tenetur sed aspernatur laboriosam. 
          </HeroP>
          <HeroBtnWrapper>
            <Button 
            to='signup' 
            onMouseEnter={onHover} 
            onMouseLeave={onHover} 
            primary='true' 
            dark='true'
            smooth={true}
            duration={500}
            exact='true'
            offset={-80}
            >
              Get started {hover? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
       </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;