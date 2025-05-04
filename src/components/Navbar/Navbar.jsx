import { Nav, Logo, LogoImage, NavLinks, StyledNavLink, ThemeToggleButton, StyledLightbulb } from "./Navbar.styles";
import logoImg from '../../assets/logo.png';



function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <Nav>
      <Logo> 
        <LogoImage src={logoImg} alt="My Logo" /> 
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
