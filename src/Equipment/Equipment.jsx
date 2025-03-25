import React, { useState } from 'react';
import styled from 'styled-components';
import fishingImg from '/fishing.jpg';
import lightImg from '/light.jpg';
import hikingImg from '/hiking.jpg';
import tentImg from '/tool.jpg';

const EquipmentContainer = styled.div`
  display: flex;
  background-color: black;
  color: white;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  transform: translate(0,100%);
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding: 12px;
  border-right: 1px solid #ccc;
`;

const CategoryButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }
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
  width: 130px;
  height: 400px;
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
  { id: 1, name: 'Fishing Equipment', category: 'Fishing', image: fishingImg, price: 'R50', description: 'High-quality fishing gear for all your fishing needs.' },
  { id: 2, name: 'Light', category: 'Lighting', image: lightImg, price: 'R20', description: 'Bright and durable light for camping and outdoor activities.' },
  { id: 3, name: 'Hiking Gear', category: 'Hiking', image: hikingImg, price: 'R75', description: 'Complete set of hiking gear for your adventures.' },
  { id: 4, name: 'Tent', category: 'Camping', image: tentImg, price: 'R100', description: 'Spacious and weather-resistant tent for camping.' },
];

const categories = ['All', 'Fishing', 'Lighting', 'Hiking', 'Camping'];

const Equipment = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredEquipment = selectedCategory === 'All'
    ? equipmentData
    : equipmentData.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
  };

  return (
    <EquipmentContainer>
      <Sidebar>
        <h2>Categories</h2>
        {categories.map(category => (
          <CategoryButton key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </CategoryButton>
        ))}
      </Sidebar>
      <div style={{ width: '80%' }}>
        <h1>Stock Available</h1>
        <EquipmentList>
          {filteredEquipment.map((item) => (
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
      </div>
    </EquipmentContainer>
  );
};

export default Equipment;