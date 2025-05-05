import { useState, useEffect } from 'react';
import { Nav, Logo, NavLinks, StyledNavLink, ThemeToggleButton, StyledLightbulb } from "./Navbar.styles";


function Navbar({ toggleTheme, isDarkMode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 560);

  useEffect(() => {
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
      <NavLinks>
        <li>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">
            About
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/projects">
            Projects
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">
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
