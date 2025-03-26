import React, { useState } from 'react';
import styled from 'styled-components';
import fishingImg from '/fishing.jpg';
import lightImg from '/light.jpg';
import hikingImg from '/hiking.jpg';
import tentImg from '/tool.jpg';

const EquipmentContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1f1f1f, #333);
  color: white;
  box-sizing: border-box;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 18%;
  padding: 20px;
  background-color: #222;
  border-right: 2px solid #555;
  box-shadow: 4px 0 10px rgba(0,0,0,0.4);
`;

const CategoryButton = styled.button`
  background-color: #444;
  color: white;
  border: none;
  padding: 12px;
  margin: 8px 0;
  cursor: pointer;
  border-radius: 8px;
  transition: background 0.3s;

  &:hover {
    background-color: #666;
    transform: scale(1.05);
  }
`;

const EquipmentList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  padding: 20px;
  overflow-y: auto;
  flex-grow: 1;
`;

const EquipmentItem = styled.div`
  background-color: #2a2a2a;
  border-radius: 12px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
  }
`;

const EquipmentImage = styled.img`
  width: 80%;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const AddToCartButton = styled.button`
  background-color: #d17b12;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s;

  &:hover {
    background-color: #a06010;
  }
`;

const equipmentData = [
  { id: 1, name: 'Fishing Equipment', category: 'Fishing', image: fishingImg, price: 'R500', description: 'High-quality fishing gear for all your fishing needs.' },
  { id: 2, name: 'Light', category: 'Lighting', image: lightImg, price: 'R200', description: 'Bright and durable light for camping and outdoor activities.' },
  { id: 3, name: 'Hiking Gear', category: 'Hiking', image: hikingImg, price: 'R75', description: 'Complete set of hiking gear for your adventures.' },
  { id: 4, name: 'Tent', category: 'Camping', image: tentImg, price: 'R100', description: 'Spacious and weather-resistant tent for camping.' },
];

const categories = ['All', 'Fishing', 'Lighting', 'Hiking', 'Camping'];

const Equipment = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEquipment = selectedCategory === 'All'
    ? equipmentData
    : equipmentData.filter(item => item.category === selectedCategory);

  return (
    
    <EquipmentContainer>
        
      <Sidebar>
        <h2>Categories</h2>
        {categories.map(category => (
          <CategoryButton key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </CategoryButton>
        ))}
      </Sidebar>
      <h1>Stock Available Now</h1>
      <EquipmentList>
        {filteredEquipment.map(item => (
          <EquipmentItem key={item.id}>
            <h3>{item.name}</h3>
            <EquipmentImage src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p><strong>{item.price}</strong></p>
         
            <AddToCartButton onClick={() => alert(`${item.name} added to cart!`)}>Add to Cart</AddToCartButton>
          </EquipmentItem>
        ))}
      </EquipmentList>
    </EquipmentContainer>
  );
};

export default Equipment;
