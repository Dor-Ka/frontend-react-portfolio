import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.navBg};;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.primary};
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
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
  color: ${({ theme }) => theme.navHover};
  }

  &.active {
  color: ${({ theme }) => theme.navHover};
    text-decoration: underline;
  }
`;
