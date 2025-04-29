import styled from "styled-components";
import { Link } from "react-router-dom";


export const WelcomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

export const WelcomeTitle = styled.h1`
  text-align: center;
  font-size: 1.75rem;
  color: ${({ theme }) => theme.text};
  margin: 0 0 0.1rem 0; 
`;

export const WelcomeName = styled.h1`
  text-align: center;
  font-size: 2.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin: 0 0 0.1rem 0;
`;

export const WelcomeSubtitle = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  font-weight: normal;
  color: ${({ theme }) => theme.text};
  margin: 0; 
`;


export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const HeroImage = styled.img`
  border-radius: 50%;
  max-width: 180px;
  max-height: 180px;
  object-fit: cover;
  margin-right: 2rem;
  margin-bottom: 1rem;
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
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const TechnologyBadge = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(6px);
  border-radius: 20px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

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
  transition: background 0.3s ease, border 0.3s ease, transform 0.1s ease;

  &:hover {
    background: ${({ theme }) => theme.navBg};
    border: 1px solid ${({ theme }) => theme.primary};
  }
  
  &:active {
    border: 2px solid ${({ theme }) => theme.primary};
    transform: scale(1.05);
  }
`;
