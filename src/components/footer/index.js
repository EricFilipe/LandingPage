import React from 'react'
import { FooterContainer, FooterLInk, FooterLInkTitle, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements';
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLInkTitle>About Us</FooterLInkTitle>
                        <FooterLInk to='/signin'>How it works</FooterLInk>
                        <FooterLInk to='/signin'>Testimonials</FooterLInk>
                        <FooterLInk to='/signin'>Investors</FooterLInk>
                        <FooterLInk to='/signin'>Terms of Services</FooterLInk>
                    </FooterLinkItems>

                    <FooterLinkItems>
                        <FooterLInkTitle>Contact Us</FooterLInkTitle>
                        <FooterLInk to='/signin'>Contact</FooterLInk>
                        <FooterLInk to='/signin'>Support</FooterLInk>
                        <FooterLInk to='/signin'>Destinations</FooterLInk>
                    </FooterLinkItems>
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLInkTitle>Social Media</FooterLInkTitle>
                        <FooterLInk to='/signin'>Instagram</FooterLInk>
                        <FooterLInk to='/signin'>Facebook</FooterLInk>
                        <FooterLInk to='/signin'>YouTube</FooterLInk>
                        <FooterLInk to='/signin'>Twitter</FooterLInk>
                    </FooterLinkItems>

                    
                </FooterLinksWrapper>
            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Logo
                    </SocialLogo>
                    <WebsiteRights>Logo &copy; {new Date().getFullYear()} Todos os direitos reservados.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.instagram.com/eric_fiilipe/?next=%2F' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.linkedin.com/in/éric-barros-305621290/" target="_blank' target='_blank' aria-label='Linkedin'>
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='https://github.com/EricFilipe' target='_blank' aria-label='Github'>
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;