import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FooterContainer, SocialLinks, SocialLink, CopyRight } from "./Footer.styles";

function Footer() {
    return (
      <FooterContainer>
        <SocialLinks>
          <SocialLink href="https://github.com/Dor-Ka" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/d-karpinska/" target="_blank">
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
        <CopyRight>&copy; 2025 DK Portfolio</CopyRight>
        </FooterContainer>
    );
  }
  
  export default Footer;