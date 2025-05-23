import styled from "styled-components";

export const ProjectsWrapper = styled.section`
  padding: 2rem;
  padding-top: 0;
  text-align: center;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 2rem;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.navBg};
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer; /* Kursor wskazujący, że cała karta jest klikana */
  
  &:hover {
    transform: scale(1.03);
  }

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.secondary};
    margin-bottom: 1rem;
    word-break: break-word;
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.textLight};
    margin-bottom: 1rem;
  }
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-decoration: none;
  margin-top: auto;
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.primary};
  }
`;

export const BadgesWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const TechBadge = styled.span`
  background-color: ${({ $type, theme }) => theme.badgeBg.tech[$type] || theme.badgeBg.tech.Other};
  color: ${({ theme }) => theme.badgeText};
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const OriginBadge = styled.span`
  background-color: ${({ $origin, theme }) => theme.badgeBg.origin[$origin] || theme.badgeBg.origin.Personal};
  color: ${({ theme }) => theme.badgeText};
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const FiltersWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const FilterButton = styled.button`
  margin: 0 0.5rem;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  background-color: ${({ $active, theme }) => ($active ? theme.primary : theme.footerBg)};
  color:${({ theme }) => theme.text};
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  transition: background-color 0.3s;
`;

export const Loading = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
`