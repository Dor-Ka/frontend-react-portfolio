import { useProjects } from "../../hooks/useProjects";
import { formatProjectName } from "../../utils/formatProjectName";
import { usePageMeta } from "../../hooks/usePageMeta";
import {
  ProjectsWrapper,
  ProjectsGrid,
  ProjectCard,
  ProjectLink,
  BadgesWrapper,
  TechBadge,
  OriginBadge,
  FiltersWrapper,
  FilterButton
} from "./Projects.styles";
import { TitleWrapper, Title } from "../../components/shared/Title.styles";

function Projects() {
  const { repos, setActiveFilter, activeFilter, detectProjectMeta } = useProjects();

  usePageMeta(
    "Projects | Dorota Karpinska Portfolio",
    "Discover projects developed by Dorota Karpinska, showcasing frontend skills and creativity."
  );

  const filters = ["All", "React", "Vanilla JS"];

  return (
    <>
      <TitleWrapper>
        <Title>My Projects</Title>
      </TitleWrapper>

      <FiltersWrapper>
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            onClick={() => setActiveFilter(filter)}
            $active={activeFilter === filter}
          >
            {filter}
          </FilterButton>
        ))}
      </FiltersWrapper>

      <ProjectsWrapper>
        <ProjectsGrid>
          {repos.map((repo) => {
            const { tech, origin } = detectProjectMeta(repo.name);
            return (
              <ProjectCard key={repo.id} onClick={() => window.open(repo.html_url, "_blank")}>
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
