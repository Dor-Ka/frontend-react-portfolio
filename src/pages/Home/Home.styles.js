import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.section`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: normal;
`;

export const HeroButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
  background: ${({ theme }) => theme.navBg};
  }
`;
