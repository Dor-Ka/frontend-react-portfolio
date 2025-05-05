import { useState, useEffect } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { Nav, Logo, NavLinks, StyledLogoLink, StyledNavLink, ThemeToggleButton, StyledLightbulb, HamburgerButton } from "./Navbar.styles";
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar({ toggleTheme, isDarkMode }) {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
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
  );
}

export default Navbar;