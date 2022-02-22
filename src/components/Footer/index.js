import React from 'react';
import { animateScroll as scroll } from 'react-scroll/modules';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinksContainer, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrapp, WebsiteRights, SocialLogo, SocialIconsLink, SocialIcons } from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/signin"> How it works</FooterLink>
              <FooterLink to="/signin"> Testimonials</FooterLink>
              <FooterLink to="/signin"> Carrer</FooterLink>
              <FooterLink to="/signin"> Investors</FooterLink>
              <FooterLink to="/signin"> Term of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/signin"> Contact</FooterLink>
              <FooterLink to="/signin"> Support</FooterLink>
              <FooterLink to="/signin"> Destinations</FooterLink>
              <FooterLink to="/signin"> Sponsorship</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/signin"> Submit Video</FooterLink>
              <FooterLink to="/signin"> Ambasassdor</FooterLink>
              <FooterLink to="/signin"> Agency</FooterLink>
              <FooterLink to="/signin"> Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/signin"> Facebook</FooterLink>
              <FooterLink to="/signin"> Instagram</FooterLink>
              <FooterLink to="/signin"> Youtube</FooterLink>
              <FooterLink to="/signin"> Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapp>
            <SocialLogo to="/" onClick={toggleHome}>
              Bloo
            </SocialLogo>
            <WebsiteRights> Bloo {new Date().getFullYear()} All right reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconsLink href="" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink href="" target="_blank" aria-label="Fnstagram">
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink href="" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconsLink>
              <SocialIconsLink href="" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconsLink>
              <SocialIconsLink href="" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrapp>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
