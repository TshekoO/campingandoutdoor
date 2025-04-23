import React, { useState } from 'react';
import styled from 'styled-components';
import fishingImg from '/fishing.jpg';
import lightImg from '/led.jpg';
import hikingImg from '/backpack.jpg';
import tentImg from '/tent.jpg';
import sleepingImg from '/sleeping.jpg';
import huntingImg from '/knife.jpg';
import hookImg from '/hook.jpg';
import castImg from '/cast.jpg';
import headlampImg from '/headlamp.jpg';
import solarImg from '/solar.jpg';
import bootsImg from '/boots.jpg';
import trekkingImg from '/trekking.jpg';
import popImg from '/pop-up.jpg';
import tunnelImg from '/tunnel.jpg';
import sleepingpadImg from '/sleepingpad.jpg';
import campingcotImg from '/cot.jpg';
import BinocularsImg from '/Binoculars.jpg';
import clothingImg from '/clothing.jpg';

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
  { id: 1, name: 'Fishing Rod', category: 'Fishing', image: fishingImg, price: 'R500', description: 'High-quality fishing rod for all your fishing needs.' },
  {  name: 'Fishing Hook', category: 'Fishing', subCategory: 'Fishing Hook', image: hookImg, price: 'R50', description: 'Durable fishing hooks for various types of fish.' },
  {  name: 'Cast Net', category: 'Fishing', subCategory: 'Cast Net', image: castImg, price: 'R300', description: 'Strong and reliable cast net for fishing.' },
  { id: 4, name: 'LED Lantern', category: 'Lighting', image: lightImg, price: 'R150', description: 'An LED lantern provides 360-degree illumination and is ideal for lighting up a tent or campsite. ' },
  {  name: 'Headlamp', category: 'Lighting', subCategory: 'Headlamp', image: headlampImg, price: 'R200', description: 'A headlamp is a hands-free light worn on the forehead, making it ideal for tasks.' },
  {  name: 'Solar-Powered Light', category: 'Lighting', subCategory: 'Solar', image: solarImg, price: 'R300', description: 'A solar-powered camping light charges during the day using sunlight and provides eco-friendly illumination at night. ' },
  { id: 5, name: 'Backpack', category: 'Hiking', image: hikingImg, price: 'R500', description: 'A hiking backpack is built to carry all your essentials like water, food, extra clothes, and first aid. ' },
  {  name: 'Hiking Boots', category: 'Hiking', subCategory: 'HikingBoots', image: bootsImg, price: 'R700', description: 'Hiking boots are sturdy, supportive footwear designed for rough terrain.' },
  {  name: 'Trekking Poles', category: 'Hiking', subCategory: 'TrekkingPoles', image: trekkingImg, price: 'R800', description: 'Trekking poles provide balance and reduce strain on your knees, especially during uphill climbs and downhill descents.' },
  { id: 6, name: 'Dome Tent', category: 'Camping', image: tentImg, price: 'R1000', description: 'A dome tent is a popular choice for casual campers due to its easy setup and stable structure. ' },
  {  name: 'Tunnel Tent', category: 'Camping', subCategory: 'DomeTent', image: tunnelImg, price: 'R2000', description: 'Tunnel tents use multiple parallel poles to create a tunnel-like shape, offering spacious interiors and good headroom.' },
  {  name: 'Pop-Up Tent', category: 'Camping', subCategory: 'PopTent', image: popImg, price: 'R1300', description: 'A pop-up tent is perfect for quick setups and short camping trips. Just take it out of the bag, and it springs into shape in seconds.' },
  { id: 7, name: 'Sleeping Bag', category: 'Sleeping', image: sleepingImg, price: 'R500', description: 'A sleeping bag is a must-have for staying warm and comfortable at night.' },
  {  name: 'Sleeping pad', category: 'Sleeping', subCategory: 'SleepingBag', image: sleepingpadImg, price: 'R700', description: 'A sleeping pad provides cushioning and insulation between you and the ground.' },
  {  name: 'Camping Cot', category: 'Sleeping', subCategory: 'CampingCot', image: campingcotImg, price: 'R1000', description: 'A camping cot is a foldable bed frame with a fabric top, lifting you off the ground for added comfort and ventilation. ' },
  { id: 8, name: 'Hunting-Knife', category: 'Hunting', image: huntingImg, price: 'R200', description: 'A hunting knife is a versatile tool used for field dressing, skinning, and processing game.' },
  {  name: 'Camouflage Clothing', category: 'Hunting', subCategory: 'Clothing', image: clothingImg, price: 'R1000', description: 'Camouflage clothing helps hunters blend into their environment to avoid detection by wildlife. ' },
  {  name: 'Binoculars', category: 'Hunting', subCategory: 'Binoculars', image: BinocularsImg, price: 'R700', description: 'Binoculars are essential for scouting game from a distance. ' },
];
const subCategories = [ 
   { id: 2, name: 'Fishing Hook', category: 'Fishing', subCategory: 'Fishing Hook', image: fishingImg, price: 'R50', description: 'Durable fishing hooks for various types of fish.' },
 

]
const categories = [
  { name: 'Fishing', subCategories: [] },
  { name: 'Lighting', subCategories: [] },
  { name: 'Hiking', subCategories: [] },
  { name: 'Camping', subCategories: [] },
  { name: 'Sleeping', subCategories: [] },
  { name: 'Hunting', subCategories: [] },
];

const Equipment = () => { 
  const [selectedCategory, setSelectedCategory] = useState('Fishing'); // Default to 'Fishing'
  const [selectedSubCategory, setSelectedSubCategory] = useState(null); // No sub-category selected by default

  const filteredEquipment = selectedSubCategory
    ? equipmentData.filter(item => item.subCategory === selectedSubCategory)
    : equipmentData.filter(item => item.category === selectedCategory);

  return (
    <>
      <Text>
        <h1>Stock Available Now</h1>
      </Text>
      <EquipmentContainer>
        <Sidebar>
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
