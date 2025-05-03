import { usePageMeta } from "../../hooks/usePageMeta";
import { TitleH2 } from "../Title";

import {
  HeroContainer,
  HeroImage,
  HeroWrapper,
  HeroName,
  HeroSubtitle
} from '../Hero.styles'
import { AboutSection, AboutText, AboutList, SkillsSection, SkillsCards, SkillCard } from './About.styles';

import profileImage from '../../assets/profile.jpeg';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";


function About() {
  usePageMeta(
    "About | Dorota Karpinska Portfolio",
    "Learn more about Dorota Karpińska, her background, skills, and passions."
  );

  return (
    <>
      <HeroContainer>
        <HeroImage src={profileImage} alt="Profile Picture" />
        <HeroWrapper>
          <HeroName>Hi, I'm Dorota Karpinska</HeroName>
          <HeroSubtitle>Frontend Developer & Creative Coder</HeroSubtitle>
        </HeroWrapper>
        <AboutList>
          <li>Crafting responsive, user-friendly websites.</li>
          <li>Passionate about clean code, accessibility, and UX.</li>
          <li>Continuously improving through hands-on projects.</li>
          <li>Striving for a balance between design aesthetics and performance.</li>
        </AboutList>
      </HeroContainer>

      <AboutSection>
        <TitleH2>My Skills</TitleH2>
        <SkillsSection>
          <SkillsCards>
            <SkillCard>
              <h3>Frontend Development</h3>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML & CSS</li>
                <li>API Integration</li>
                <li>Redux & Redux-Saga</li>
              </ul>
            </SkillCard>

            <SkillCard>
              <h3>Design & Tools</h3>
              <ul>
                <li>Responsive Design</li>
                <li>UI/UX Design</li>
                <li>Figma & Canva</li>
                <li>Git & GitHub</li>
                <li>VSCode & WebStorm</li>
                <li>Trello</li>
              </ul>
            </SkillCard>

            <SkillCard>
              <h3>Best Practices</h3>
              <ul>
                <li>Accessibility (WCAG)</li>
                <li>SEO</li>
                <li>Immutability</li>
              </ul>
            </SkillCard>

            <SkillCard>
              <h3>Workflow & Soft Skills</h3>
              <ul>
                <li>Agile (Scrum)</li>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Collaboration</li>
                <li>Time Management</li>
              </ul>
            </SkillCard>
          </SkillsCards>
        </SkillsSection>

      </AboutSection>

    </>
  );
}

export default About;