import { usePageMeta } from "../../hooks/usePageMeta";
import { SocialIcons } from "../../components/shared/Social/SocialIcons";
import logoImage from "../../assets/logo.png"

import { ContactWrapper, CTA, InfoText, EmailButton } from "./Contact.styles";
import { TitleWrapper, TitleH1 } from "../../components/shared/Title.styles";
import { HeroContainer, LogoImage } from "../../components/shared/Hero.styles";


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
      <HeroContainer>
        <LogoImage src={logoImage} alt="Logo Dorota Karpinska" />
      </HeroContainer>
      <ContactWrapper>
        <CTA>Feel free to reach out through email or connect with me on LinkedIn and GitHub!</CTA>
        <SocialIcons />
        <CTA>Let's create something amazing together! </CTA>
        <EmailButton href="mailto:dorotakarpinska.dev@gmail.com" target="_blank" rel="noopener noreferrer">
          Send Email
        </EmailButton>
        <InfoText>📍 Based in Poland | Available remotely </InfoText>
      </ContactWrapper>

    </>
  );
}

export default Contact;
