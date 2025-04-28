import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #333333;
  color: #aaa;
  text-align: center;
  padding: 1rem 0;
  font-size: 0.9rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

export const SocialLink = styled.a`
  color: #e38327;
  transition: color 0.3s, transform 0.3s;
  text-decoration: none;

  &:hover {
    color: #fff;
    transform: scale(1.2);
  }
`;

export const CopyRight = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;
