import { usePageMeta } from "../../hooks/usePageMeta";

import { ContactWrapper, CTA, SocialLinks, SocialLink } from "./Contact.styles";
import { TitleWrapper, TitleH1 } from "../../components/shared/Title.styles";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


function Contact() {
  usePageMeta(
    "Contact | Dorota Karpinska Portfolio",
    "Get in touch with Dorota Karpińska through email or social media links."
  );

  return (
    <>
      <TitleWrapper>
        <TitleH1>Contact Me</TitleH1>
      </TitleWrapper>
      <ContactWrapper>
        <CTA>Feel free to reach out through email or connect with me on LinkedIn and GitHub!</CTA>
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
      </ContactWrapper>
    </>
  );
}

export default Contact;
