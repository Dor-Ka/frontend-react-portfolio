import profileImage from '../../assets/profile.jpeg';

import {
  DotSeparator,
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
} from "././Home.styles";

const Home = () => {
  return (
    <div>
      <WelcomeWrapper>
        <WelcomeTitle>Hello, I'm</WelcomeTitle>
        <WelcomeName>Dorota Karpinska</WelcomeName>
        <WelcomeSubtitle>Explore My Portfolio</WelcomeSubtitle>
      </WelcomeWrapper>
      <HeroContainer>
        <HeroImage src={profileImage} alt="Profile Picture" />

        <HeroContent>
          <HeroTitle>Frontend Developer & Creative Coder</HeroTitle>
          <HeroSubtitle>Building beautiful and functional web apps.</HeroSubtitle>
          <HeroTechnologies>
            <TechnologyBadge>React</TechnologyBadge>
            <TechnologyBadge>JavaScript</TechnologyBadge>
            <TechnologyBadge>CSS</TechnologyBadge>
            <TechnologyBadge>HTML</TechnologyBadge>
          </HeroTechnologies>
        </HeroContent>
      </HeroContainer>
      <DotSeparator>
        <span></span>
        <span></span>
        <span></span>
      </DotSeparator>
      <LinkRow>
        <StyledLink to="/about">About Me</StyledLink>
        <StyledLink to="/projects">My Projects</StyledLink>
        <StyledLink to="/contact">Contact Info</StyledLink>
      </LinkRow>
    </div>
  );
};

export default Home;
