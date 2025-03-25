import React from 'react';
import styled from 'styled-components';
import fishingImg from '/fishing.jpg';
import lightImg from '/light.jpg';
import hikingImg from '/hiking.jpg';
import tentImg from '/tool.jpg';

const EquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  font-size: 14px;
  box-sizing: border-box;
  position: absolute;
  transform: translate(0, 100%);
`;

const EquipmentList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  overflow-y: auto;
`;

const EquipmentItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 18px;
  margin: 2px; /* Reduced margin to bring boxes closer */
  text-align: center;
  width: 150px;
  background-color: #333;
`;

const EquipmentImage = styled.img`
  width: 70%;
  height: auto;
  border-radius: 8px;
`;

const AddToCartButton = styled.button`
  background-color: rgb(206, 172, 22);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const equipmentData = [
  { id: 1, name: 'Fishing Equipment', image: fishingImg, price: 'R50', description: 'High-quality fishing gear for all your fishing needs.' },
  { id: 2, name: 'Light', image: lightImg, price: 'R20', description: 'Bright and durable light for camping and outdoor activities.' },
  { id: 3, name: 'Hiking Gear', image: hikingImg, price: 'R75', description: 'Complete set of hiking gear for your adventures.' },
  { id: 4, name: 'Tent', image: tentImg, price: 'R100', description: 'Spacious and weather-resistant tent for camping.' },
];

const Equipment = () => {
  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
  };

  return (
    <EquipmentContainer>
      <h1>Stock Available</h1>
      <EquipmentList>
        {equipmentData.map((item) => (
          <EquipmentItem key={item.id}>
            <h3>{item.name}</h3>
            <EquipmentImage src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p><strong>{item.price}</strong></p>
            <AddToCartButton onClick={() => handleAddToCart(item)}>
              Add to Cart
            </AddToCartButton>
          </EquipmentItem>
        ))}
      </EquipmentList>
    </EquipmentContainer>
  );
};

export default Equipment;