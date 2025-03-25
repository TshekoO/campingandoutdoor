import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
      <Navbar>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About Us</NavItem>
        <NavItem href="/equipment">Equipment</NavItem>
        <NavItem href="/contact">Contact</NavItem>
        <CartIcon icon={faCartPlus} />
      </Navbar>
      <Content>
        <Title>
          <h1>TrailBlazer Gear</h1>
        </Title>
        <Phrase>
          <p>Get Ready for Your Next Adventure</p>
        </Phrase>
        <Subtitle>
          <p>"TrailBlazer Gear fuels your outdoor adventures with high-quality,<br/>
            reliable camping and outdoor equipment designed for explorers who crave
            the wild."</p>
        </Subtitle>
      </Content>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background-image: url('/camping.jpg');
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
    background: rgba(32, 29, 29, 0.5); /* Adjust the color and opacity as needed */
    z-index: 1;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-start; /* Align items to the left */
  gap: 50px; /* Adjust the gap between items as needed */
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  position: relative;

  &:hover {
    color: white;
  }

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #f0a500;
  }
`;

const CartIcon = styled(FontAwesomeIcon)`
  margin-left: 700px;
  color: white;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #f0a500;
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
  right: 90%;
`;

const Phrase = styled.p`
  color: #fff;
  font-size: 20px;
  top: 190px;
  position: absolute;
  left: -10%;
  font: 20px 'Roboto', sans-serif;
  font-weight: 300;
`;

const Subtitle = styled.p`
  color: #fff;
  font-size: 10px;
  top: 250px;
  position: absolute;
  left: -35%;
  font: 15px 'Roboto', sans-serif;
  font-weight: 300;
`;

export default HeroSection;
