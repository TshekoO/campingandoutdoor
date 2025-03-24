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
  color: black;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;



export default HeroSection;
