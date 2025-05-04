import { usePageMeta } from "../../hooks/usePageMeta";
import profileImage from '../../assets/profile.jpeg';
import { FaAngleDoubleDown } from 'react-icons/fa';
import {
  HeroContainer,
  HeroImage,
  HeroWrapper,
  HeroTitle,
  HeroName,
  HeroSubtitle,
  HeroDescription,
  HeroContent,
  HeroTechnologies,
  TechnologyBadge,
} from '../Hero.styles'
import {
  HomeSection,
  HomeSubtitle,
  HomeLinkRow,
  HomeStyledLink
} from './Home.styles';


function Home() {
  usePageMeta(
    "Home | Dorota Karpinska Portfolio",
    "Welcome to Dorota Karpinska's portfolio. Explore projects, skills, and contact information."
  );

  return (
    <HomeSection>
      <HeroContainer>
        <HeroWrapper>
          <HeroTitle>Hello, I'm</HeroTitle>
          <HeroName>Dorota Karpinska</HeroName>
          <HeroSubtitle>Frontend Developer & Creative Coder</HeroSubtitle>
          <HeroDescription>Focusing on both usability and aesthetics in every project.</HeroDescription>
          <HeroContent>
            <HeroTechnologies>
              <TechnologyBadge>React</TechnologyBadge>
              <TechnologyBadge>JavaScript</TechnologyBadge>
              <TechnologyBadge>CSS</TechnologyBadge>
              <TechnologyBadge>HTML</TechnologyBadge>
            </HeroTechnologies>
          </HeroContent>
        </HeroWrapper>
        <HeroImage src={profileImage} alt="Profile Picture" />
      </HeroContainer>
      <HomeSubtitle>
        <FaAngleDoubleDown />
        Explore My Portfolio
        <FaAngleDoubleDown />
      </HomeSubtitle>

      <HomeLinkRow>
        <HomeStyledLink to="/about">About Me</HomeStyledLink>
        <HomeStyledLink to="/projects">My Projects</HomeStyledLink>
        <HomeStyledLink to="/contact">Contact Info</HomeStyledLink>
      </HomeLinkRow>
    </HomeSection>
  );
};

export default Home;
