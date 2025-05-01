import { usePageMeta } from "../../hooks/usePageMeta";

function About() {
  usePageMeta(
    "About | Dorota Karpinska Portfolio",
    "Learn more about Dorota Karpińska, her background, skills, and passions."
  );

  return (
    <div>
      <h1>About Me</h1>

    </div>
  );
}

export default About;