import { useEffect, useState } from "react";

export function useProjects() {
  const [repos, setRepos] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch("https://api.github.com/users/Dor-Ka/repos");
        const data = await response.json();
        const filtered = data.filter((repo) => repo.name.startsWith("frontend-"));
        setRepos(filtered);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setIsLoading(false); 
      }
    }

    fetchRepos();
  }, []);

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

  function filteredRepos() {
    if (activeFilter === "All") {
      return repos;
    }
    return repos.filter((repo) => {
      const { tech } = detectProjectMeta(repo.name);
      return tech === activeFilter;
    });
  }

  return {
    repos: filteredRepos(),
    setActiveFilter,
    activeFilter,
    detectProjectMeta,
    isLoading, 
  };
}
