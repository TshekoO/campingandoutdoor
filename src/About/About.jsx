import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutContainer>
            <Header>TrailBlazer</Header>
            <Description>
                Welcome to our store! We offer a wide range of high-quality camping 
                and outdoor equipment and gear.<br/> From tents and sleeping bags to cooking supplies and hiking tools,
                 we have everything you need <br/>for your next adventure. Our products are designed to provide comfort, safety, and convenience,<br/>
                  ensuring you have the best outdoor experience possible.
              <br/>
              <br/>
                Our team is made up of outdoor enthusiasts who are passionate about helping others enjoy<br/>the great outdoors.    
                We offer top-quality gear, including gadgets and tools, lighting, fishing<br/>essentials, hiking equipment, and sleeping gear — everything you need to elevate your outdoor<br/>adventures.
            </Description>
            <Image src='/camp1.jpg' alt='camping' />
            <Img src='/tool.jpg' alt='camping' />
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
    background-color: black;
    background-size: cover;
    position: relative;
    color: white;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    @media (max-width: 900px) {
        height: auto;
        min-height: 100vh;
        padding-bottom: 2rem;
    }
`;

const Header = styled.h1`
    position: absolute;
    top: 20px;
    left: 500px;
    font-size: 2.5em;

    @media (max-width: 900px) {
        position: static;
        text-align: center;
        font-size: 2em;
        margin-top: 1rem;
        left: 0;
    }
`;

const Description = styled.p`
    position: absolute;
    top: 100px;
    left: 50px;
    width: 70%;
    font-size: 1.2em;
    line-height: 1.5;

    @media (max-width: 900px) {
        position: static;
        width: 90%;
        margin: 1.5rem auto 0 auto;
        font-size: 1em;
        padding: 0 1rem;
    }
`;

const Image = styled.img`
    position: absolute;
    width: 30%;
    height: 100%;
    top: 0;
    left: 880px;

    @media (max-width: 1200px) {
        left: 65vw;
        width: 30vw;
    }
    @media (max-width: 900px) {
        position: static;
        display: block;
        width: 90vw;
        height: auto;
        margin: 2rem auto 0 auto;
    }
`;

const Img = styled.img`
    position: absolute;
    width: 20%;
    height: 40%;
    top: 150px;
    left: 800px;
    border: 3px solid black;

    @media (max-width: 1200px) {
        left: 60vw;
        width: 20vw;
        top: 120px;
    }
    @media (max-width: 900px) {
        display: none;
    }
`;

export default About;