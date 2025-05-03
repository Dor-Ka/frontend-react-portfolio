import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 0rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutText = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const AboutList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
  
  li {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.2;
  }
`;

export const SkillsSection = styled.div`
  margin-bottom: 2rem;
`;

export const SkillsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const SkillCard = styled.div`
//   background-color: ${({ theme }) => theme.cardBackground || "#fff"};
  border: 1px solid ${({ theme }) => theme.borderColor || "#ddd"};
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.primary};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.textSecondary};
  }
`;
