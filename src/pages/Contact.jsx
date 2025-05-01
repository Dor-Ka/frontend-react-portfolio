import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Dorota Karpinska Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get in touch with Dorota Karpinska through email or social media links."
      );
    }
  }, []);

  return (
    <div>
      <h1>Contact</h1>

    </div>
  );
}

export default Contact;
