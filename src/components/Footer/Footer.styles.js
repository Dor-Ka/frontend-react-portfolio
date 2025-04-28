import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #333;
  color: white;
  flex-direction: column;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 2rem;
`;

export const SocialLink = styled.a`
  color: #e38327;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;