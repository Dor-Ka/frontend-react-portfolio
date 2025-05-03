import styled from 'styled-components';

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
`;

export const HeroName = styled.h1`
  font-size: 2.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

export const HeroSubtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const HeroDescription = styled.p`
  font-size: 1.25rem;
  font-weight: normal;
  margin-bottom: 0.5rem;
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
`;
