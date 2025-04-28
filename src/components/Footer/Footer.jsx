import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterContainer, SocialLinks, SocialLink } from "./Footer.styles";

function Footer() {
    return (
      <FooterContainer>
        <p>&copy; 2025 DK Portfolio</p>
        <SocialLinks>
          <SocialLink href="https://github.com/Dor-Ka" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/d-karpinska/" target="_blank">
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
      </FooterContainer>
    );
  }
  
  export default Footer;