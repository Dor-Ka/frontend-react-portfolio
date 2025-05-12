import { useEffect, useState } from "react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { ProjectsWrapper, ProjectsGrid, ProjectCard, ProjectLink, BadgesWrapper, TechBadge, OriginBadge } from "./Projects.styles";
import { TitleWrapper, Title } from "../../components/shared/Title.styles";

function Projects() {
  const [repos, setRepos] = useState([]);

  usePageMeta(
    "Projects | Dorota Karpinska Portfolio",
    "Discover projects developed by Dorota Karpinska, showcasing frontend skills and creativity."
  );

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch("https://api.github.com/users/Dor-Ka/repos");
        const data = await response.json();
        const filtered = data.filter((repo) => repo.name.startsWith("frontend-"));
        setRepos(filtered);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }

    fetchRepos();
  }, []);

  function formatProjectName(name) {
    return name
      .replace(/(frontend-|youcode-|youcode-react-|react-|vanilla-js-)/gi, "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function detectProjectMeta(name) {
    let tech = "Vanilla JS";
    let origin = "Personal";

    const lowerName = name.toLowerCase();

    if (lowerName.includes("react")) {
      tech = "React";
    }
  
    if (lowerName.includes("youcode")) {
      origin = "YouCode";
    }
  
    return { tech, origin };
  }

  return (
    <>
      <TitleWrapper>
        <Title>My Projects</Title>
      </TitleWrapper>
      <ProjectsWrapper>
        <ProjectsGrid>
          {repos.map((repo) => {
            const { tech, origin } = detectProjectMeta(repo.name);

            return (
              <ProjectCard key={repo.id}>
                <h2>{formatProjectName(repo.name)}</h2>
                <BadgesWrapper>
                  <TechBadge $type={tech}>{tech}</TechBadge>
                  <OriginBadge $origin={origin}>{origin}</OriginBadge>
                </BadgesWrapper>
                <p>{repo.description || "No description available."}</p>
                <ProjectLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </ProjectLink>
              </ProjectCard>
            );
          })}
        </ProjectsGrid>
      </ProjectsWrapper>
    </>
  );
}

export default Projects;
