import { usePageMeta } from "../../hooks/usePageMeta";
import { AboutSection, AboutTitle, AboutText, AboutList, AboutListItem } from "./About.styles";

function About() {
  usePageMeta(
    "About | Dorota Karpinska Portfolio",
    "Learn more about Dorota Karpińska, her background, skills, and passions."
  );

  return (
    <AboutSection>
        <AboutTitle>About Me</AboutTitle>
        <AboutText>
            Hi, I'm a Frontend React Developer passionate about building user-friendly and accessible web applications.
        </AboutText>
        <AboutText>
            I specialize in writing <strong>semantic and accessible HTML</strong>, creating <strong>responsive designs</strong>, and developing scalable React applications using modern tools like <strong>React Router</strong>, <strong>Redux Toolkit</strong>, and <strong>Redux-Saga</strong>.
        </AboutText>
        <AboutText>
            Here are some of the technologies and practices I use:
        </AboutText>
        <AboutList>
            <AboutListItem>Semantic & accessible HTML</AboutListItem>
            <AboutListItem>Responsive Web Design</AboutListItem>
            <AboutListItem>React Router, Redux (Toolkit), Redux-Saga</AboutListItem>
            <AboutListItem>API integration (fetch, axios)</AboutListItem>
            <AboutListItem>CSS BEM convention, Grid, Flexbox</AboutListItem>
            <AboutListItem>Scrum, Trello, GitHub PRs & Reviews</AboutListItem>
        </AboutList>
        <AboutText>
            I'm committed to <strong>attention to detail</strong>, <strong>clean code</strong>, and <strong>continuous learning</strong>.
            Outside of coding, I love reading books and listening to podcasts about programming, technology, economics, and management.
        </AboutText>
    </AboutSection>
);
}

export default About;