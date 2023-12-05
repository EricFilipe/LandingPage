import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';
import Icon1 from '../../assets/ft-1.png'
import Icon2 from '../../assets/ft-3.png'
import Icon3 from '../../assets/ft-4.png'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Something</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet. Et iure optio qui tenetur</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Something</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet. Et iure optio qui tenetur</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Something</ServicesH2>
                <ServicesP>Lorem ipsum dolor sit amet. Et iure optio qui tenetur</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;