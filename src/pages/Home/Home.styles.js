import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
`;

export const HomeSubtitle = styled.h2`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: normal;
  color: ${({ theme }) => theme.text};
  margin: 2rem auto 0 auto; /* auto po bokach = wyśrodkowanie */
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 30px;
  text-align: center; /* żeby tekst był ładnie na środku wewnątrz */
  transition: background 0.3s, color 0.3s, border-color 0.3s;

  & svg {
    color: ${({ theme }) => theme.primary};
    margin: 0 0.5rem;
    animation: ${moveUpDown} 2s infinite ease-in-out;
  }

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.navBg};
    border-color: ${({ theme }) => theme.primary};

    & svg {
      color: ${({ theme }) => theme.navBg};
    }
  }
`;



export const HomeLinkRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const HomeStyledLink = styled(Link)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 20px;
  text-decoration: none;
  transition: background 0.3s, border 0.3s, transform 0.1s;

  &:hover {
    background: ${({ theme }) => theme.navBg};
    border: 1px solid ${({ theme }) => theme.primary};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.primary};
    transform: scale(1.05);
  }
`;
