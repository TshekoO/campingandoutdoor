import React from 'react';
import styled from 'styled-components';


const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;

  h1 {
    font-size: 3rem;
    z-index: 1;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  z-index: 0;
`;

const DescriptionSection = styled.div`
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const AboutUS = () => {
  return (
    <main>
      <HeroSection>
      <VideoBackground autoPlay loop muted>
  <source src="/film2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</VideoBackground>


        <Overlay />
      </HeroSection>
      <DescriptionSection>
        <h2>About Us</h2>
        <p>
          Trailblazer Gear was founded a few years ago with a mission to provide
          high-quality outdoor gear for adventurers and explorers. Over the
          years, we have become one of the most trusted companies in the
          industry, known for our commitment to quality, innovation, and
          customer satisfaction.
        </p>
      </DescriptionSection>
    </main>
  );
};

export default AboutUS;
