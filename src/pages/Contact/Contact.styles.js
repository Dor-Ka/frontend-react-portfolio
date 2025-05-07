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

export const SocialLinks = styled.div`
  display: flex;
  margin: 2rem;
  gap: 2rem;
  font-size: 2.5rem;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.primary};
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: ${({ theme }) => theme.footerHover};
    transform: scale(1.2);
  }
`;
