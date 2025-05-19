import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
      <Content>
        <Title>TrailBlazer Gear</Title>
        <Phrase>Get Ready for Your Next Adventure</Phrase>
        <Subtitle>
          "TrailBlazer Gear fuels your outdoor adventures with high-quality,
          reliable camping and outdoor equipment designed for explorers who crave
          the wild."
        </Subtitle>
      </Content>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background-image: url('/camping.jpg');
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(43, 41, 41, 0.5);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
  }
`;

const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 800px;
  width: 100%;
  align-self: center;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 36px;
   top: 30px;
  
  }

  @media (max-width: 480px) {
    font-size: 28px;
    top: 20px;
  }
`;

const Phrase = styled.p`
  font-size: 24px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export default HeroSection;

