import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
         <NavbarContainer>
               <NavItem to="/home">Home</NavItem>
               <NavItem to="/about">About Us</NavItem>
               <NavItem to="/equipment">Equipment</NavItem>
               <NavItem to="/footer">Contact</NavItem>
               <CartIcon icon={faCartPlus} />
             </NavbarContainer>
    )
}

const NavbarContainer = styled.nav`
   display: flex;
  justify-content: flex-start;
  gap: 50px;
  align-items: center;
  background: rgba(0, 0, 0, 0.99);
  padding: 10px 10px;
  position: absolute;
  top: 0;
  width: 97%;
 z-index: 100;
`;

const NavbarWrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
`;

const NavItem = styled(NavLink)`
   color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  position: relative;

  &:hover {
    color: white;
  }

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: #f0a500;
  }
`;
const CartIcon = styled(FontAwesomeIcon)`
  margin-left: 600px;
  color: white;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #f0a500;
  }
`;

export default Navbar;