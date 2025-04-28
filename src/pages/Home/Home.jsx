import { HeroContainer, HeroTitle, HeroSubtitle, HeroButton } from './Home.styles';

function Home() {
  return (
    <HeroContainer>
      <HeroTitle>Welcome to My Portfolio</HeroTitle>
      <HeroSubtitle>Frontend Developer | React Enthusiast</HeroSubtitle>
      <HeroButton to="/projects">View My Projects</HeroButton>
    </HeroContainer>
  );
}

export default Home;
