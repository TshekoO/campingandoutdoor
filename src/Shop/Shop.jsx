import React from 'react';
import { useNavigate, Link } from 'react-router-dom';   
import styled from 'styled-components';

const Shop = () => {
    const navigate = useNavigate();

    const handleShopNow = () => {
        navigate('/shop');
    };

    return (
        <ShopContainer>
            <center><Logo><Img src='/trailblazer-removebg-preview.png' alt='camping' /></Logo><br/></center>
            {/* <Img src='/camps.jpg' alt='camping' /> */}
            <center><h1>Get Ready for Your Next Adventure</h1></center>
            <center><ShopButton onClick={handleShopNow}>Shop Now</ShopButton></center>
        </ShopContainer>
    );
};

const ShopContainer = styled.div`
    background: radial-gradient(circle at center, rgba(209, 123, 18, 0.9) 30%, rgba(0, 0, 0, 0.85) 50%);
    background-size: cover;
    position: relative;
    color: white;
    width: 100vw;
    height: 100vh;
`;

const Logo = styled.div`
    align-items: center;
    top: 30px;
    left: 200px;
    font-size: 40px;
`;

const Img = styled.img`
    align-items: center;
    width: 21%;
    height: 30%;
    top: 200px;
    left: 200px;
    border-radius: 12px;
`;

const ShopButton = styled.button`
    align-items: center;
    top: 500px;
    left: 200px;
    padding: 10px 20px;
    font-size: 1.2em;
    color: white;
    background-color: rgba(255, 153, 0, 0.8); /* Adjusted alpha value for transparency */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: rgba(255, 102, 0, 0.8); /* Adjusted alpha value for transparency */
    }
`;

export default Shop;