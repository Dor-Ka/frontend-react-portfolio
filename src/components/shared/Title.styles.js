import styled from "styled-components";

export const TitleWrapper = styled.section`
  padding: 2rem 1rem;
  text-align: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary};
  margin: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary};
  margin-top: 0;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
