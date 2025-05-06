import { useState, useEffect } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

import { HiMenu, HiX } from 'react-icons/hi';

import { 
  Nav, 
  Logo, 
  NavLinks, 
  StyledLogoLink, 
  StyledNavLink, 
  ThemeToggleButton, 
  StyledLightbulb, 
  HamburgerButton,
  Overlay 
} from "./Navbar.styles";


function Navbar({ toggleTheme, isDarkMode }) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <Nav>
        <StyledLogoLink to="/about">
          <Logo>
            {isMobile ? 'DK' : 'DK Portfolio'}
          </Logo>
        </StyledLogoLink>
        <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </HamburgerButton>

        <NavLinks $isOpen={isOpen}>
          <li>
            <StyledNavLink to="/" end onClick={() => setIsOpen(false)}>
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/about" onClick={() => setIsOpen(false)}>
              About
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </StyledNavLink>
          </li>
        </NavLinks>

        <ThemeToggleButton onClick={toggleTheme}>
          <StyledLightbulb isDarkMode={isDarkMode} />
        </ThemeToggleButton>
      </Nav>
    </>
  );
}

export default Navbar;