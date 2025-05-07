import { useEffect, useState } from "react";
import { usePageMeta } from "../../hooks/usePageMeta";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  usePageMeta(
    "Projects | Dorota Karpinska Portfolio",
    "Discover projects developed by Dorota Karpinska, showcasing frontend skills and creativity."
  );

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("https://api.github.com/users/Dor-Ka/repos");
        const data = await response.json();
        const filteredProjects = data.filter(repo => repo.name.startsWith("frontend-"));
        setProjects(filteredProjects);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  return (
    <div>
      <h1>Projects</h1>
      <p>Here are some of my projects available on GitHub:</p>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
