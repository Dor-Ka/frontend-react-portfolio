import { Nav, Logo, NavLinks, StyledNavLink } from "./Navbar.styles";

function Navbar() {
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
    </Nav>
  );
}

export default Navbar;
