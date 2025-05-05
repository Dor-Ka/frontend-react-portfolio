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

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.9;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.9;
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
    margin: 2rem auto 0 auto;
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 30px;
  text-align: center; 
  transition: background 0.3s, color 0.3s, border-color 0.3s;
  border-radius: 30px;
  padding: 0.8rem 2rem;
  animation: ${pulse} 3s infinite;

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
  
  @media (max-width: 680px) {
      font-size: 1.2rem;
      padding: 0.6rem 1.5rem;
  }

  @media (max-width: 480px) {
      font-size: 1.1rem;
      padding: 0.6rem 1.5rem;
  }

  @media (max-width: 300px) {
      font-size: 1rem;
      padding: 0.4rem 0.6rem;
  }
`;

export const HomeLinkRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 680px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.9rem;
    margin-top: 1.25rem;
  }

  @media (max-width: 300px) {
    gap: 0.8rem;
    margin-top: 1rem;
  }
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

  @media (max-width: 680px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.7rem;
  }

  @media (max-width: 300px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
`;
