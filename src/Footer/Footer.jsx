import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLinks>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/shop">Shop</FooterLink>
                    <FooterLink to="/equipment">Equipment</FooterLink>
                    <FooterLink to="/contact">Contact</FooterLink>
                </FooterLinks>
              
                <FooterText>© 2025 Camping and Outdoor. All rights reserved.</FooterText>
            </FooterContent>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
position: relative;
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterLinks = styled.div`
    margin-bottom: 20px;
`;

const FooterLink = styled(Link)`
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const SocialMedia = styled.div`
    margin-bottom: 20px;
`;

const SocialIcon = styled.a`
    color: white;
    margin: 0 10px;
    font-size: 1.5em;

    &:hover {
        color: #ff9900;
    }
`;

const FooterText = styled.p`
    margin: 0;
`;

export default Footer;