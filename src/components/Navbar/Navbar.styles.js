import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
`;

export const Logo = styled.h1`
  color: #e38327;
  margin: 0;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: #e38327;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #fff;
    text-decoration: underline;
  }
`;
