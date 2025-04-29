import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.footerBg};
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  transition: transform 0.3s, color 0.3s;

  &:hover {
  color: ${({ theme }) => theme.footerHover};
    transform: scale(1.2);
  }
`;

export const CopyRight = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.footerText};
  margin: 0;
`;
