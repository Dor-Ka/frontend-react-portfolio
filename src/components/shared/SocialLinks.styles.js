import styled from "styled-components";

export const SocialLinks = styled.div`
  display: flex;
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