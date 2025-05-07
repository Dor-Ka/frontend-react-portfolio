import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SocialLinks, SocialLink } from "./SocialLinks.styles";

export function SocialIcons() {
  return (
    <SocialLinks>
      <SocialLink href="https://github.com/Dor-Ka" target="_blank" aria-label="GitHub profile">
        <FaGithub />
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/d-karpinska/" target="_blank" aria-label="LinkedIn profile">
        <FaLinkedin />
      </SocialLink>
      <SocialLink href="mailto:dorotakarpinska.dev@gmail.com" aria-label="Send email to Dorota Karpinska">
        <FaEnvelope />
      </SocialLink>
    </SocialLinks>
  );
}
