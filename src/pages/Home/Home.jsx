import { usePageMeta } from "../../hooks/usePageMeta";
import {
  WelcomeWrapper,
  LogoIntro,
  WelcomeContent,
  LogoImage,
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
import logoImage from "../../assets/logo.png"
import profileImage from '../../assets/profile.jpeg';
import { FaAngleDoubleDown } from 'react-icons/fa';

function Home() {

  usePageMeta(
    "Home | Dorota Karpinska Portfolio",
    "Welcome to Dorota Karpinska's portfolio. Explore projects, skills, and contact information."
  );

  return (
    <WelcomeWrapper>
      <LogoIntro
        initial={{ x: "-50%", y: "-50%", scale: 1 }}
        animate={{ x: "30vw", y: "-50%", scale: 0.5 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <LogoImage src={logoImage} alt="Profile Picture" />
      </LogoIntro>

      <WelcomeContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <HeroImage src={profileImage} alt="Profile Picture" />
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
      </WelcomeContent>
    </WelcomeWrapper>
  );
};

export default Home;
