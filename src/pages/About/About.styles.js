import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutText = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
  }
`;

export const AboutList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
  margin-left: 20vw; 
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;

  li {
    position: relative;
    padding-left: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.5;
    text-align: left;
    color: ${({ theme }) => theme.text};

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0.2rem;
      color: ${({ theme }) => theme.primary};
      font-size: 1.25rem;
      line-height: 1;
    }
  }
`;

export const SkillsSection = styled.section`
  margin-bottom: 4rem;
`;

export const SkillsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.secondary};
  padding: 2rem;
  border-radius: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primary};
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 1rem;

    li {
      margin-bottom: 0.75rem;
      font-size: 1.1rem;
      color: ${({ theme }) => theme.text};
    }
  }
`;
