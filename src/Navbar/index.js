import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll/modules';
import { Nav, NavBtn, NavBtnLink, NavbarContainer, NavLogo, MobileIcon, Navmenu, NavLinks, NavItem } from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="" onClick={toggleHome}>
            Bloo
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Navmenu>
            <NavItem>
              <NavLinks to="about" smooth={true} offset={-80} duration={500} exact="true" spy={true}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" smooth={true} offset={-80} duration={500} exact="true" spy={true}>
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth={true} offset={-90} duration={500} exact="true" spy={true}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup" smooth={true} offset={-90} duration={500} exact="true" spy={true}>
                Sign Up
              </NavLinks>
            </NavItem>
          </Navmenu>
          <NavBtn>
            <NavBtnLink to="signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
