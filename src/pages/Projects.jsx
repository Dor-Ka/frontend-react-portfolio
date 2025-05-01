import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Dorota Karpinska Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover projects developed by Dorota Karpinska, showcasing frontend skills and creativity."
      );
    }
  }, []);

  return (
    <div>
      <h1>Projects</h1>


    </div>
  );
}

export default Projects;
