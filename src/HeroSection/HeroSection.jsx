import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
        <Content>
            <Title>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            </Title>
        </Content>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background-image: url('/camp2.jpg');
  background-size: cover;
  position: absolute;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 600px; /* Adjust the width as needed */
    height: 100%;
    background: rgba(152, 142, 142, 0.5); /* Adjust the color and opacity as needed */
    z-index: 1;
  }
`;


const Content = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  z-index: 2; /* Ensure content is above overlay */
  position: relative;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  text-align: left;
  margin-bottom: 20px;
  position: absolute;
  top: 50%; 
 right:90%;

`;

export default HeroSection;
