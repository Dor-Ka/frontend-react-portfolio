import { Nav, Logo, NavLinks, StyledNavLink } from "./Navbar.styles";

function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <Nav>
      <Logo>DK Portfolio</Logo>
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
      <button onClick={toggleTheme}>
        {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </Nav>
  );
}

export default Navbar;
