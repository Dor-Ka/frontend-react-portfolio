import styled from "styled-components";

export const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  text-align: center;
`;

export const CTA = styled.p`
  font-size: 1.2rem;
  margin: 2rem;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.text};
`;
