import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AboutSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutList = styled.ul`
  margin: 0 auto 3rem auto;
  padding: 0;
  list-style: none;
  width: fit-content;
  
  li {
    position: relative;
    padding-left: 1.5rem; 
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.text};
    transition: color 0.3s ease;
    opacity: 0;
    animation: ${slideInLeft} 1.2s ease-out forwards;
  }

  li:nth-child(1) { animation-delay: 0.3s; }
  li:nth-child(2) { animation-delay: 0.6s; }
  li:nth-child(3) { animation-delay: 0.9s; }
  li:nth-child(4) { animation-delay: 1.2s; }

  li::before {
    content: "➤";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.primary};
    font-size: 1.2rem;
  }

  li:hover {
    color: ${({ theme }) => theme.primary};
  }

    @media (max-width: 680px) {
    li {
      font-size: 1rem;
      padding-left: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    li {
      font-size: 0.8rem;
      padding-left: 1rem;
    }
  }

  @media (max-width: 300px) {
    li {
      font-size: 0.7rem;
      padding-left: 0.8rem;
    }
  }
`;

export const SkillsSection = styled.section`
  margin: 1rem;
  margin-bottom: 4rem;
`;

export const SkillsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  background:  ${({ theme }) => theme.navBg};
  border: 1px solid ${({ theme }) => theme.secondary};
  font-size: 1rem;
  padding: 1rem;
  border-radius: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.primary};
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

   @media (max-width: 680px) {
    font-size: 0.9rem;
    padding: 0.8rem;

    h3 {
      font-size: 1.3rem;
    }

    ul li {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.6rem;

    h3 {
      font-size: 1.2rem;
    }

    ul li {
      font-size: 0.95rem;
    }
  }
`;
