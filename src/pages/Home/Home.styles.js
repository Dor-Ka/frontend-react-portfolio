import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
`;

export const DotSeparator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  // margin: 1.5rem 0;

  & > span {
    width: 8px;
    height: 8px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 50%;
    opacity: 0.8;
    transition: transform 0.3s ease, opacity 0.3s ease;

    &:nth-child(2) {
      animation: ${pulse} 1.5s infinite ease-in-out;
    }
  }
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  text-align: center;
`;

export const WelcomeTitle = styled.h1`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.1rem;
`;

export const WelcomeName = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-top: 0;
  margin-bottom: 0.1rem;
`;

export const WelcomeSubtitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: normal;
  color: ${({ theme }) => theme.text};
  margin: 0 auto;
  margin-top: 1rem;
`;

export const HeroContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.text};
`;

export const HeroImage = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;
  margin-top: 3rem;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

export const HeroTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const HeroSubtitle = styled.h3`
  font-size: 1.25rem;
  font-weight: normal;
  margin-bottom: 1rem;
`;

export const HeroTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

export const TechnologyBadge = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  border-radius: 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, border 0.3s;

  &:hover {
    background: ${({ theme }) => theme.navBg};
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

export const LinkRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const StyledLink = styled(Link)`
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
