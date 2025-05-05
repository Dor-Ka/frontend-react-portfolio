import { useState, useEffect } from 'react';
import { Nav, Logo, NavLinks, StyledNavLink, ThemeToggleButton, StyledLightbulb, HamburgerButton } from "./Navbar.styles";
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar({ toggleTheme, isDarkMode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 560);
    }
  
    const handleResize = () => {
      setIsMobile(window.innerWidth < 560);
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Nav>
      <Logo>
        {isMobile ? 'DK' : 'DK Portfolio'}
      </Logo>
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