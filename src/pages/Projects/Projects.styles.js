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
  background:  ${({ theme }) => theme.navBg};
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.primary};
  }
  }

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 1rem;
  }

  p {
  font-size: 1rem;
  color: ${({ theme }) => theme.textLight};
  margin-bottom: 1rem;
  min-height: 48px;
  }

`;

export const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.background};
  }
`;
