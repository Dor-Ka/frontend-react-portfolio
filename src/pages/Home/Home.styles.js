import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #333;
  color: white;
  padding: 0 2rem;
`;

export const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroText = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  background: #e38327;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #e56e22;
  }
`;
