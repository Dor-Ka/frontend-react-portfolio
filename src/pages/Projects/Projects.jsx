import { useEffect, useState } from "react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { ProjectsWrapper, ProjectsGrid, ProjectCard, ProjectLink } from "./Projects.styles";
import { TitleWrapper, Title } from "../../components/shared/Title.styles"

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

  return (
    <>
      <TitleWrapper>
        <Title>My Projects</Title>
      </TitleWrapper>
      <ProjectsWrapper>
        <ProjectsGrid>
          {repos.map((repo) => (
            <ProjectCard key={repo.id}>
              <h2>{repo.name.replace(/frontend-(vanilla-js|react|youcode)-/, "").replace(/-/g, " ")}</h2>
              <p>{repo.description || "No description available."}</p> {/* dodane */}
              <ProjectLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </ProjectLink>
            </ProjectCard>

          ))}
        </ProjectsGrid>
      </ProjectsWrapper>
    </>
  );
}

export default Projects;
