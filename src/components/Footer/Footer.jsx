import { SocialIcons } from "../shared/Social/SocialIcons";
import { FooterContainer, CopyRight } from "./Footer.styles";

function Footer() {
    return (
        <FooterContainer>
            <SocialIcons />
            <CopyRight>&copy; 2025 DK Portfolio</CopyRight>
        </FooterContainer>
    );
}

export default Footer;