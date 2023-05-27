import React from 'react';
import { Foot1, Foot2, FooterContainer } from "./Footer.style";
import Logo from "../../assets/images/Logo_Aeon.svg";

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Foot1>
                <img src={Logo} alt=""/>
                <div className="support">
                    <h1>Support</h1>
                    <p>aeoncounselling@gmail.com</p>
                </div>
                <div className="legal">
                    <h1>Legal</h1>
                    <p>Privacy Policy<br/>Legal Notice</p>
                </div>
            </Foot1>
            <Foot2>
                <h3>aeoncounselling &copy; 2023 | All Right Reserved</h3>
            </Foot2>
        </FooterContainer>
    )
}

export default Footer;