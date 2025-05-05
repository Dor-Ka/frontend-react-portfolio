import styled from 'styled-components';
import { motion } from 'framer-motion';

export const WelcomeWrapper = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const LogoIntro = styled(motion.div)`
  position: absolute;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%); 

  @media (max-width: 680px) {
    top: 2vh;
    left: 40%;
  }

  @media (max-width: 300px) {
    top: 2vh;
    left: 40%;
  }
`;

export const WelcomeContent = styled(motion.div)`
  margin-top: 1rem; 
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
`;

export const HeroContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0rem;
  color: ${({ theme }) => theme.text};
`;

export const LogoImage = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;

  @media (max-width: 680px) {
    max-width: 140px;
    max-height: 140px;
  }

  @media (max-width: 480px) {
    max-width: 120px;
    max-height: 120px;
  }

  @media (max-width: 300px) {
    max-width: 80px;
    max-height: 80px;
  }
`;

export const HeroImage = styled.img`
  border-radius: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;

  @media (max-width: 680px) {
    max-width: 140px;
    max-height: 140px;
  }

  @media (max-width: 480px) {
    max-width: 120px;
    max-height: 120px;
  }

  @media (max-width: 300px) {
    max-width: 80px;
    max-height: 80px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.1rem;

  @media (max-width: 680px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeroName = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-top: 0;
  margin-bottom: 0.5rem;

  @media (max-width: 680px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 680px) {
    font-size: 1.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  font-weight: normal;
  margin-bottom: 0.5rem;

  @media (max-width: 680px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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

  @media (max-width: 680px) {
      font-size: 0.9rem;
      padding: 0.4rem 0.9rem;
  }

  @media (max-width: 480px) {
      font-size: 0.8rem;
      padding: 0.3rem 0.8rem;
  }

  @media (max-width: 300px) {
      font-size: 0.7rem;
      padding: 0.2rem 0.6rem;
  }
`;
