import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaLightbulb } from 'react-icons/fa';


export const LogoImage = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.navBg};;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.secondary};
  margin: 0;
  font-size: 1.5rem;
`;

export const StyledLogoLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;

    @media (max-width: 680px) {
    position: absolute;
    top: 50px; 
    right: 0;
    width: 100%;
    flex-direction: column;
    background: ${({ theme }) => theme.navBg};
    padding: 0.75rem;
    align-items: center;
    gap: 1.25rem;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-200%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }
 }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.25rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
  text-decoration-line: underline;
  text-underline-offset: 8px;
  }

  &.active {
  color: ${({ theme }) => theme.navActive};
  text-decoration-line: underline;
  text-underline-offset: 8px;
  }

  @media (max-width: 680px) {
      font-size: 1.1rem;
  }

  @media (max-width: 480px) {
      font-size: 1rem;
  }

  @media (max-width: 300px) {
      font-size: 0.9rem;
  }
`;

export const ThemeToggleButton = styled.button`
  background-color: ${({ theme }) => theme.toggleBackground};
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.toggleHover};
  }

  &:focus {
    outline: none;
  }
`;

export const StyledLightbulb = styled(FaLightbulb)`
  font-size: 1.6rem;
  color: ${({ theme, isDarkMode }) => isDarkMode ? theme.lightbulbOff : theme.lightbulbOn};
  transition: color 0.3s ease;

    ${({ isDarkMode, theme }) => 
    isDarkMode && `
      filter: drop-shadow(0 0 4px ${theme.primary});
    `}
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  z-index: 1001;

  @media (max-width: 680px) {
    display: block;
  }
`;

export const Overlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  z-index: 5; 
`;