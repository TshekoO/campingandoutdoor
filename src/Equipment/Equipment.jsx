import React from 'react';
import styled from 'styled-components';
import fishingImg from '/fishing.jpg';
import lightImg from '/light.jpg';
import hikingImg from '/hiking.jpg';
import tentImg from '/tool.jpg';

const EquipmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const EquipmentItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  width: 200px;
`;

const EquipmentImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const AddToCartButton = styled.button`
  background-color: #28a745;
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
  { id: 1, name: 'Fishing Equipment', image: fishingImg },
  { id: 2, name: 'Light', image: lightImg },
  { id: 3, name: 'Hiking Gear', image: hikingImg },
  { id: 4, name: 'Tent', image: tentImg },
];

const Equipment = () => {
  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
  };

  return (
    <EquipmentContainer>
      {equipmentData.map((item) => (
        <EquipmentItem key={item.id}>
          <h3>{item.name}</h3>
          <EquipmentImage src={item.image} alt={item.name} />
          <AddToCartButton onClick={() => handleAddToCart(item)}>
            Add to Cart
          </AddToCartButton>
        </EquipmentItem>
      ))}
    </EquipmentContainer>
  );
};

export default Equipment;