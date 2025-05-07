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
  color: ${({ theme }) => theme.text};
`;

export const InfoText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 2rem;
`;

export const EmailButton = styled.a`
  display: inline-block;
  padding: 1rem 1.5rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 1.5rem;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.background};
    border: 2px solid ${({ theme }) => theme.primary};
    transform: scale(1.05);
  }
`;