import { usePageMeta } from "../../hooks/usePageMeta";
import { SocialIcons } from "../../components/shared/Social/SocialIcons";

import { ContactWrapper, CTA } from "./Contact.styles";
import { TitleWrapper, TitleH1 } from "../../components/shared/Title.styles";


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
        <SocialIcons />
      </ContactWrapper>
    </>
  );
}

export default Contact;
