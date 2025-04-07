import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <h1>Contact</h1>
                <ContactInfo>
                    <p>Phone: +27 123 456 789</p>
                    <p>Email: trailblazer@gmail.com</p>
                </ContactInfo>

                <Motto>"Explore the Outdoors, Embrace the Adventure!"</Motto>

                <FooterText>© 2025 TrailBlazer. All rights reserved.</FooterText>
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

const ContactInfo = styled.div`
    margin-bottom: 20px;

    p {
        margin: 5px 0;
    }
`;

const Motto = styled.p`
    font-style: italic;
    margin-bottom: 20px;
`;

const FooterText = styled.p`
    margin: 0;
`;

export default Footer;