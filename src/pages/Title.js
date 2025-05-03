import styled from "styled-components";

export const TitleH1 = styled.h1`
  text-align: center;
  font-size: 2.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin: 0.5rem;
`;

export const TitleH2 = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-top: 0;
  margin-bottom: 1.5rem;
`;
