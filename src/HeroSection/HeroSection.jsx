import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
      {/* <Navbar>
        <NavItem to="/">Home</NavItem>
        <NavItem to="./About/About">About Us</NavItem>
        <NavItem to="/equipment">Equipment</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <CartIcon icon={faCartPlus} />
      </Navbar> */}
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
    width: 600px;
    height: 100%;
    background: rgba(43, 41, 41, 0.5);
    z-index: 1;
  }
`;

// const Navbar = styled.nav`
//   display: flex;
//   justify-content: flex-start;
//   gap: 50px;
//   align-items: center;
//   background: rgba(0, 0, 0, 0.7);
//   padding: 10px 10px;
//   position: absolute;
//   top: 0;
//   width: 98%;
//   z-index: 1;
// `;

// const NavItem = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-size: 18px;
//   font-weight: bold;
//   position: relative ;

//   &:hover {
//     color: white;
//   }

//   &:hover::after {
//     content: '';
//     position: absolute;
//     left: 0;
//     bottom: -2px;
//     width: 100%;
//     height: 2px;
//     background-color: #f0a500;
//   }
// `;

// const CartIcon = styled(FontAwesomeIcon)`
//   margin-left: 600px;
//   color: white;
//   font-size: 24px;
//   cursor: pointer;

//   &:hover {
//     color: #f0a500;
//   }
// `;

const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 800px;
  width: 100%;
  align-self: left;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Phrase = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
`;

export default HeroSection;

