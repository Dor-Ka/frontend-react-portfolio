import profileImage from '../../assets/profile.jpeg';
import { FaAngleDoubleDown } from 'react-icons/fa';

import {
  WelcomeWrapper,
  WelcomeTitle,
  WelcomeName,
  WelcomeSubtitle,
  HeroContainer,
  HeroImage,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroTechnologies,
  TechnologyBadge,
  LinkRow,
  StyledLink
} from './Home.styles';

const Home = () => {
  return (
    <div>
      <HeroContainer>
        <HeroImage src={profileImage} alt="Profile Picture" />
        <WelcomeWrapper>
          <WelcomeTitle>Hello, I'm</WelcomeTitle>
          <WelcomeName>Dorota Karpinska</WelcomeName>
          <HeroTitle>Frontend Developer & Creative Coder</HeroTitle>
          <HeroSubtitle>Building beautiful and functional web apps.</HeroSubtitle>
          <HeroContent>
            <HeroTechnologies>
              <TechnologyBadge>React</TechnologyBadge>
              <TechnologyBadge>JavaScript</TechnologyBadge>
              <TechnologyBadge>CSS</TechnologyBadge>
              <TechnologyBadge>HTML</TechnologyBadge>
            </HeroTechnologies>
          </HeroContent>
        </WelcomeWrapper>
      </HeroContainer>
      <WelcomeSubtitle>
        <FaAngleDoubleDown />
        Explore My Portfolio
        <FaAngleDoubleDown />
      </WelcomeSubtitle>

      <LinkRow>
        <StyledLink to="/about">About Me</StyledLink>
        <StyledLink to="/projects">My Projects</StyledLink>
        <StyledLink to="/contact">Contact Info</StyledLink>
      </LinkRow>
    </div>
  );
};

export default Home;
