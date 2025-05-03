import { usePageMeta } from "../../hooks/usePageMeta";
import { TitleH2 } from "../Title";

import {
  HeroContainer,
  HeroImage,
  HeroWrapper,
  HeroName,
  HeroSubtitle,
  HeroDescription,
  HeroTechnologies,
  TechnologyBadge,
} from '../Hero.styles'

import profileImage from '../../assets/profile.jpeg';




import {
  AboutWrapper,
  Section,
  SectionTitle,
  AboutText,
  SkillsGrid,
  SkillCategory,
  SkillList,
  PlansList,
  FunFacts,
  AboutTitle,
  AboutIntro,

  Quote
} from './About.styles';




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
          <HeroName>Dorota Karpinska</HeroName>
          <HeroSubtitle>Frontend Developer & Creative Coder</HeroSubtitle>
        </HeroWrapper>
      </HeroContainer>

      <div>
  <h2> Hi, I'm Dorota – Frontend Developer </h2>
  <ul>
    <li> Crafting responsive, user-friendly websites. </li>
    <li> Passionate about clean code, accessibility, and UX. </li>
    <li> Continuously improving through hands-on projects. </li>
    <li> Striving for a balance between design aesthetics and performance. </li>
  </ul>
</div>

<div>
  <h2> My Skills </h2>
  
  <div className="skills-section">
    <h3> Frontend Development </h3>
    <div className="skills-cards">
      <div className="skill-card">
        <h4>React</h4>
        <p>Skilled in React (Hooks, Styled Components, React Router), building dynamic and scalable web apps.</p>
      </div>
      <div className="skill-card">
        <h4>JavaScript</h4>
        <p>Proficient in JavaScript (ES6+, Promises, async/await) for building robust applications.</p>
      </div>
      <div className="skill-card">
        <h4>TypeScript</h4>
        <p>Experienced in TypeScript for creating type-safe applications and improving code quality.</p>
      </div>
      <div className="skill-card">
        <h4>HTML & CSS</h4>
        <p>Expert in semantic HTML and CSS (Flexbox, Grid, RWD, BEM methodology) for responsive design.</p>
      </div>
      <div className="skill-card">
        <h4>API Integration</h4>
        <p>Proficient in working with APIs (Axios, Fetch) to fetch data and create dynamic web pages.</p>
      </div>
      <div className="skill-card">
        <h4>Redux & Redux-Saga</h4>
        <p>Skilled in managing application state with Redux and handling side effects with Redux-Saga.</p>
      </div>
    </div>
  </div>

  <div className="skills-section">
    <h3> Design & UI/UX </h3>
    <div className="skills-cards">
      <div className="skill-card">
        <h4>Responsive Design</h4>
        <p>Building responsive, mobile-first websites with CSS Grid, Flexbox, and media queries.</p>
      </div>
      <div className="skill-card">
        <h4>UI/UX Design</h4>
        <p>Creating user-friendly interfaces and optimizing user experience through Figma and design principles.</p>
      </div>
      <div className="skill-card">
        <h4>Figma & Canva</h4>
        <p>Experience designing wireframes, prototypes, and visuals using Figma and Canva.</p>
      </div>
    </div>
  </div>

  <div className="skills-section">
    <h3> Tools & Collaboration </h3>
    <div className="skills-cards">
      <div className="skill-card">
        <h4>Git & GitHub</h4>
        <p>Proficient in version control (Git), using GitHub for pull requests, code reviews, and teamwork.</p>
      </div>
      <div className="skill-card">
        <h4>VSCode & WebStorm</h4>
        <p>Comfortable with VSCode and WebStorm for writing, debugging, and managing projects.</p>
      </div>
      <div className="skill-card">
        <h4>Trello</h4>
        <p>Experience using Trello for task management, project tracking, and team collaboration.</p>
      </div>
    </div>
  </div>

  <div className="skills-section">
    <h3> Other Skills </h3>
    <div className="skills-cards">
      <div className="skill-card">
        <h4>Accessibility (WCAG)</h4>
        <p>Ensuring web applications are accessible to all users by adhering to WCAG guidelines.</p>
      </div>
      <div className="skill-card">
        <h4>SEO</h4>
        <p>Optimizing websites for search engines to improve visibility and ranking.</p>
      </div>
      <div className="skill-card">
        <h4>Agile (Scrum)</h4>
        <p>Experience working in Agile methodologies, particularly Scrum, for efficient development cycles.</p>
      </div>
      <div className="skill-card">
        <h4>Immutability</h4>
        <p>Strong understanding of immutability in JavaScript, particularly in state management.</p>
      </div>
    </div>
  </div>

  <div className="skills-section">
    <h3> Soft Skills </h3>
    <div className="skills-cards">
      <div className="skill-card">
        <h4>Communication</h4>
        <p>Strong communication skills for collaborating with both technical and non-technical team members.</p>
      </div>
      <div className="skill-card">
        <h4>Problem Solving</h4>
        <p>Adept at troubleshooting and finding creative solutions to complex problems.</p>
      </div>
      <div className="skill-card">
        <h4>Collaboration</h4>
        <p>Comfortable working independently or in collaborative, cross-functional teams.</p>
      </div>
      <div className="skill-card">
        <h4>Time Management</h4>
        <p>Efficient in managing multiple tasks and meeting deadlines.</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default About;