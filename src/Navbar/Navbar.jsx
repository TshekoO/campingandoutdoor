import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faBars, faTimes, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useCart } from '../CartContext/CartContext';

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu
    const toggleCart = () => setShowCart(!showCart);
    const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle menu visibility

    const { cart, addToCart, removeFromCart } = useCart();
    const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);
    const totalPrice = cart.reduce(
        (total, item) => total + (parseFloat(item.price.slice(1)) * (item.quantity || 1)),
        0
    );

    const increaseQuantity = (item) => {
        addToCart(item); // Let addToCart handle quantity increment
    };
    
    const decreaseQuantity = (item) => {
        if (item.quantity > 1) {
            removeFromCart(item.id, false);
        }
    };

    const deleteItem = (itemId) => {
        removeFromCart(itemId, true); // Assuming `true` removes the item completely
    };

    return (
        <NavbarContainer>
            <Hamburger onClick={toggleMenu} aria-label="Toggle menu">
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </Hamburger>
            <Icon>
            <Img src='/trailblazer-removebg-preview.png' alt='camping' />
            </Icon>
            <NavLinks menuOpen={menuOpen}>
                <NavItem to="/home" onClick={() => setMenuOpen(false)}>Home</NavItem>
                <NavItem to="/equipment" onClick={() => setMenuOpen(false)}>Equipment</NavItem>
                <NavItem to="/aboutus" onClick={() => setMenuOpen(false)}>About Us</NavItem>
                <NavItem to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>
            </NavLinks>
         
            <CartIconContainer>
                <CartIcon icon={faCartPlus} onClick={toggleCart} aria-label="Toggle cart" />
                {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
                {showCart && (
                    <CartDropdown>
                        <PopupHeader>
                            <h3>Your Cart</h3>
                            <CloseButton onClick={toggleCart} aria-label="Close cart">X</CloseButton>
                        </PopupHeader>
                        {cart.length > 0 ? (
                            <>
                                {cart.map((item, index) => (
                                    <CartItem key={index}>
                                        <ItemImage src={item.image} alt={item.name} />
                                        <ItemDetails>
                                            <span>{item.name}</span>
                                            <span className="item-description">{item.description}</span>
                                            <QuantityControls>
                                                <QuantityButton onClick={() => decreaseQuantity(item)} aria-label="Decrease quantity">
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </QuantityButton>
                                                <span>{item.quantity || 1}</span>
                                                <QuantityButton onClick={() => increaseQuantity(item)} aria-label="Increase quantity">
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </QuantityButton>
                                            </QuantityControls>
                                            <span>Price: {item.price}</span>
                                        </ItemDetails>
                                        <DeleteButton onClick={() => deleteItem(item.id)} aria-label="Delete item">
                                            Remove
                                        </DeleteButton>
                                    </CartItem>
                                ))}
                                <CartTotal>
                                    <strong>Total:</strong> R{totalPrice.toFixed(2)}
                                </CartTotal>
                                <PayButton>Pay Now</PayButton>
                            </>
                        ) : (
                            <EmptyCart>Your cart is empty</EmptyCart>
                        )}
                    </CartDropdown>
                )}
            </CartIconContainer>
        </NavbarContainer>
    );
};

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between; // changed from flex-start
    align-items: center;
    background: #e6810fff;
    padding: 10px 20px;
    position: absolute;
    top: 0;
    width: 96%;
    height: 70px;
    z-index: 100;

    @media (max-width: 768px) {
        align-items: flex-start;
        width: 90%;
    }
`;
const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    position: relative;
    font-color: white;
    @media (max-width: 768px) {
        font-size: 60px; /* Adjust font size for smaller screens */
        margin-top: -20px; /* Add spacing for smaller screens */
    }

    @media (max-width: 480px) {
        font-size: 24px; /* Further reduce font size for very small screens */
    }
`;

const Img = styled.img`
    align-items: center;
    width: 76%;
    height: 30%;
    font-color: white;

    border-radius: 12px;

    @media (max-width: 768px) {
        width: 40%; /* Adjust width for smaller screens */
        height: auto; /* Maintain aspect ratio */
    }

    @media (max-width: 480px) {
        width: 60%; /* Further adjust width for very small screens */
    }
`;

const Hamburger = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }

    @media (min-width: 1024px) {
        font-size: 18px; // Adjust the font size as needed
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 25px;
    margin-left:60px;
    @media (max-width: 768px) {
        flex-direction: column;
        display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
        width: 100%;
        background: rgba(0, 0, 0, 0.9);
        padding: 10px;
    }

    @media (min-width: 1024px) {
        font-size: 18px; // Adjust the font size as needed
    }
`;

const NavItem = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: 25px;
    font-weight: bold;

    &:hover {
        color: #f0a500;
    }

    @media (max-width: 768px) {
        font-size: 20px;
        padding: 10px 0;
    }
`;

const CartIconContainer = styled.div`
    position: relative;
    margin-right: 100px;

    @media (max-width: 768px) {
        margin-right: 30px;
    }
`;

const CartIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 29px;
    cursor: pointer;
    margin-left: 40px; // Reduced from 100px to 40px
    
    &:hover {
        color: #f0a500;
    }
`;

const CartCount = styled.span`
    position: absolute;
    top: -8px;
    right: -8px;
    background: #f0a500;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 50%;
`;

const CartDropdown = styled.div`
    position: absolute;
    top: 30px;
    right: 0;
    background: white;
    color: black;
    width: 600px; /* Adjust width for smaller screens */
    max-height: 500px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 200;
    padding: 10px;

    @media (max-width: 768px) {
        width: 100%; /* Full width for smaller screens */
        left: 0;
        right: 0;
        margin: 0
    }
`;


const PopupHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 10px;

    h3 {
        margin: 0;
        font-size: 18px;
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: #888;
    font-size: 16px;
    cursor: pointer;
   
    &:hover {
        color: #f0a500;
    }
`;

const CartItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    gap: 40px;

    &:last-child {
        border-bottom: none;
    }
`;

const ItemImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 10px;
`;

const ItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
        font-size: 14px;
    }

    .item-description {
        font-size: 12px;
        color: #666;
    }
`;

const QuantityControls = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    span {
        font-size: 14px;
        font-weight: bold;
    }
`;

const QuantityButton = styled.button`
    background: none;
    border: none;
    color: #888;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        color: #f0a500;
    }
`;

const DeleteButton = styled.button`
    background: none;
    border: none;
    color: red;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: darkred;
    }
`;

const CartTotal = styled.div`
    text-align: right;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
`;

const PayButton = styled.button`
    background: #f0a500;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
    width: 30%;
    align-self: center;
    transition: background 0.3s ease;

    &:hover {
        background: #d18e00;
    }

    @media (max-width: 768px) {
        width: 100%; /* Full width for smaller screens */
    }
`;

const EmptyCart = styled.div`
    text-align: center;
    padding: 10px;
    color: #888;
`;

export default Navbar;
