import {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <NavbarContainer>
            <NavbarWrapper>
                <NavMenu>
                    <NavItem>
                        <NavLink to='/home'>Home</NavLink>  
                        <NavLink to='/'>About</NavLink> 
                        <NavLink to='/'>Equipment</NavLink> 
                        <NavLink to='/'>Contact</NavLink> 
                    </NavItem>
                </NavMenu>
            </NavbarWrapper>   
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    background: #333;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
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

const NavItem = styled.li`
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;

    a {
        color: #fff;
        text-decoration: none;
        padding: 0 10px;
        height: 100%;
        display: flex;
        align-items: center;
        transition: color 0.3s ease;

        &:hover {
            color: #f0a500;
        }
    }
`;

export default Navbar;
