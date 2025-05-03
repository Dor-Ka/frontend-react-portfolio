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
     <div>
      <HeroContainer>
        <HeroImage src={profileImage} alt="Profile Picture" />
        <HeroWrapper>
          <HeroTitle>Hello, I'm</HeroTitle>
          <HeroName>Dorota Karpinska</HeroName>
          <HeroSubtitle>Frontend Developer & Creative Coder</HeroSubtitle>
          <HeroDescription>Building beautiful and functional web apps.</HeroDescription>
          <HeroContent>
            <HeroTechnologies>
              <TechnologyBadge>React</TechnologyBadge>
              <TechnologyBadge>JavaScript</TechnologyBadge>
              <TechnologyBadge>CSS</TechnologyBadge>
              <TechnologyBadge>HTML</TechnologyBadge>
            </HeroTechnologies>
          </HeroContent>
        </HeroWrapper>
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
    </div>
  );
};

export default Home;
