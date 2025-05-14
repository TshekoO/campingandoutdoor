import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'; // Import react-slick for the carousel
import Footer from '../Footer/Footer'; // Ensure the Footer component is correctly imported
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles

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

const HeroHeader = styled.div`
  position: absolute;
  top: 20%;
  width: 100%;
  text-align: center;
  z-index: 2;
  color: white;

  h1 {
    font-size: 4rem;
    font-family: 'Georgia', serif;
    margin: 0;
  }

  h2 {
    font-size: 2rem;
    font-family: 'Arial', sans-serif;
    margin: 0.5rem 0 0;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%;

  .slick-slide img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
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
    margin-bottom: 1rem;
  }

  img {
    width: 50%;
    max-width: 300px;
    margin: 2rem auto;
    display: block;
    border-radius: 8px;
  }
`;

const AboutUS = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main>
      <HeroSection>
        <HeroHeader>
          <h1>Welcome to Trailblazer Gear</h1>
          <h2>Explore the Outdoors with Confidence</h2>
        </HeroHeader>
        <CarouselWrapper>
          <Slider {...carouselSettings}>
            <div>
              <img src="/camps1.jpg" alt="Carousel Image 1" />
            </div>
            <div>
              <img src="/camps.jpg" alt="Carousel Image 2" />
            </div>
            <div>
              <img src="/camping.jpg" alt="Carousel Image 3" />
            </div>
            <div>
              <img src="/tool.jpg" alt="Carousel Image 4" />
            </div>
          </Slider>
        </CarouselWrapper>
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
        <p>
          Our team is made up of passionate outdoor enthusiasts who understand
          the needs of adventurers. We strive to create products that not only
          meet but exceed expectations, ensuring that every journey is safe,
          comfortable, and memorable.
        </p>
        <p>
          From hiking and camping gear to survival tools and accessories, we
          offer a wide range of products designed to withstand the toughest
          conditions. Our commitment to sustainability ensures that we minimize
          our environmental impact while delivering exceptional value to our
          customers.
        </p>
        <img src="/camp1.jpg" alt="Additional About Us Image" />
        <p>
          Join us on our journey to explore the great outdoors and discover the
          beauty of nature. Together, we can make every adventure unforgettable.
        </p>
      </DescriptionSection>
      <Footer />
    </main>
  );
};

export default AboutUS;
