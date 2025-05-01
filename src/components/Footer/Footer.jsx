import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FooterContainer, SocialLinks, SocialLink, CopyRight } from "./Footer.styles";

function Footer() {
    return (
        <FooterContainer>
            <SocialLink
                href="https://github.com/Dor-Ka"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
            >
                <FaGithub />
            </SocialLink>

            <SocialLink
                href="https://www.linkedin.com/in/d-karpinska/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
            >
                <FaLinkedin />
            </SocialLink>

            <SocialLink
                href="mailto:dorotakarpinska.dev@gmail.com"
                aria-label="Send email to Dorota Karpinska"
            >
                <FaEnvelope />
            </SocialLink>
            <CopyRight>&copy; 2025 DK Portfolio</CopyRight>
        </FooterContainer>
    );
}

export default Footer;