import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterColumn>
                    <h2>Contact</h2>
                    <ContactInfo>
                        <p>Phone: +27 123 456 789</p>
                        <p>Email: trailblazer@gmail.com</p>
                    </ContactInfo>
                </FooterColumn>

                <FooterColumn>
                    <h2>Quick Links</h2>
                    <FooterLinks>
                        <FooterLink to="/about">About Us</FooterLink>
                        <FooterLink to="/services">Services</FooterLink>
                        <FooterLink to="/contact">Contact</FooterLink>
                    </FooterLinks>
                </FooterColumn>

                <FooterColumn>
                    <h2>Our Motto</h2>
                    <Motto>"Explore the Outdoors, Embrace the Adventure!"</Motto>
                </FooterColumn>
            </FooterContent>

            <FooterText>© 2025 TrailBlazer. All rights reserved.</FooterText>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px;
`;

const FooterColumn = styled.div`
    flex: 1;
    min-width: 200px;
    margin: 10px;
    text-align: left;

    h2 {
        margin-bottom: 10px;
    }
`;

const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
`;

const FooterLink = styled(Link)`
    color: white;
    margin: 5px 0;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        text-decoration: underline;
    }
`;

const ContactInfo = styled.div`
    p {
        margin: 5px 0;
    }
`;

const Motto = styled.p`
    font-style: italic;
`;

const FooterText = styled.p`
    margin-top: 20px;
`;

export default Footer;