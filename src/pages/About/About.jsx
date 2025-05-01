import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About | Dorota Karpinska Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn more about Dorota Karpinska and her work.");
    }
  }, []);

  return (
    <div>
      <h1>About Me</h1>

    </div>
  );
}

export default About;