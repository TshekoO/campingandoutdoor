import React, { useState } from 'react';
import styled from 'styled-components';
import fishingImg from '/fishing.jpg';
import lightImg from '/light.jpg';
import hikingImg from '/hiking.jpg';
import tentImg from '/tool.jpg';
import sleepingImg from '/sleeping-gear.jpg';
import huntingImg from '/hunting.jpg';

const EquipmentContainer = styled.div`
padding-top: 50px;
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
  { id: 1, name: 'Fishing Rod', category: 'Fishing', subCategory: 'Fishing Rod', image: fishingImg, price: 'R500', description: 'High-quality fishing rod for all your fishing needs.' },
  { id: 2, name: 'Fishing Hook', category: 'Fishing', subCategory: 'Fishing Hook', image: fishingImg, price: 'R50', description: 'Durable fishing hooks for various types of fish.' },
  { id: 3, name: 'Cast Net', category: 'Fishing', subCategory: 'Cast Net', image: fishingImg, price: 'R300', description: 'Strong and reliable cast net for fishing.' },
  { id: 4, name: 'Light', category: 'Lighting', image: lightImg, price: 'R150', description: 'Bright and durable light for camping and outdoor activities.' },
  { id: 5, name: 'Hiking Gear', category: 'Hiking', image: hikingImg, price: 'R200', description: 'Complete set of hiking gear for your adventures.' },
  { id: 6, name: 'Tent and Shelter', category: 'Camping', image: tentImg, price: 'R100', description: 'Spacious and weather-resistant tent for camping.' },
  { id: 7, name: 'Sleeping Gear', category: 'Sleeping', image: sleepingImg, price: 'R200', description: 'Premium sleeping gear ensures a restful night’s sleep in any environment.' },
  { id: 8, name: 'Hunting', category: 'Hunting', image: huntingImg, price: 'R100', description: 'Hunting gear designed for performance, durability, and stealth.' },
];

const categories = [
  { name: 'All', subCategories: [] },
  { name: 'Fishing', subCategories: ['Fishing Hook', 'Cast Net'] },
  { name: 'Lighting', subCategories: [] },
  { name: 'Hiking', subCategories: [] },
  { name: 'Camping', subCategories: [] },
  { name: 'Sleeping', subCategories: [] },
  { name: 'Hunting', subCategories: [] },
];

const Equipment = () => { 
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const filteredEquipment = selectedCategory === 'All'
    ? equipmentData
    : selectedSubCategory
    ? equipmentData.filter(item => item.subCategory === selectedSubCategory)
    : equipmentData.filter(item => item.category === selectedCategory);

  return (
    <>
      <Text>
        <h1>Stock Available Now</h1>
      </Text>
      <EquipmentContainer>
        <Sidebar>
          <h2>Categories</h2>
          {categories.map(category => (
            <CategoryButton key={category.name} onClick={() => {
              setSelectedCategory(category.name);
              setSelectedSubCategory(null); // Reset sub-category when a new category is selected
            }}>
              {category.name}
            </CategoryButton>
          ))}
          {categories.find(cat => cat.name === selectedCategory)?.subCategories.length > 0 && (
            <div>
              <h3>Sub-Categories</h3>
              {categories.find(cat => cat.name === selectedCategory).subCategories.map(subCategory => (
                <CategoryButton key={subCategory} onClick={() => setSelectedSubCategory(subCategory)}>
                  {subCategory}
                </CategoryButton>
              ))}
            </div>
          )}
        </Sidebar>
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
    </>
  );
};

const Text = styled.div`
  color: white;
  background-color: black;

  text-align: center;
  padding: 20px 0;
`;

export default Equipment;
