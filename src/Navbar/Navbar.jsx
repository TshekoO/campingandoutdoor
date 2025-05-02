import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'; // Import plus and minus icons
import styled from 'styled-components';
import { useCart } from '../CartContext/CartContext'; // Import useCart

const Navbar = () => {
    const [showCart, setShowCart] = useState(false); // State to toggle cart visibility
    const toggleCart = () => setShowCart(!showCart); // Toggle cart visibility

    const { cart, addToCart, removeFromCart } = useCart(); // Access cart, addToCart, and removeFromCart from CartContext
    const cartCount = cart.reduce((total, item) => total + (item.quantity || 1), 0); // Calculate total items
    const totalPrice = cart.reduce((total, item) => total + (parseInt(item.price.slice(1)) * (item.quantity || 1)), 0); // Calculate total price

    const increaseQuantity = (item) => {
        addToCart({ ...item, quantity: 1 }); // Add one more of the same item
    };

    const decreaseQuantity = (item) => {
        if (item.quantity > 1) {
            removeFromCart(item.id, false); // Remove one quantity of the item
        }
    };

    return (
        <NavbarContainer>
            <NavItem to="/home">Home</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/equipment">Equipment</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <CartIconContainer>
                <CartIcon icon={faCartPlus} onClick={toggleCart} /> {/* Toggle cart on click */}
                {cartCount > 0 && <CartCount>{cartCount}</CartCount>} {/* Show count if > 0 */}
                {showCart && ( // Show cart details if showCart is true
                    <CartDropdown>
                        <PopupHeader>
                            <h3>Your Cart</h3>
                            <CloseButton onClick={toggleCart}>X</CloseButton>
                        </PopupHeader>
                        {cart.length > 0 ? (
                            <>
                                {cart.map((item, index) => (
                                    <CartItem key={index}>
                                        <ItemImage src={item.image} alt={item.name} />
                                        <ItemDetails>
                                            <span>{item.name}</span>
                                            <span className="item-description">{item.description}</span> {/* Add description */}
                                            <QuantityControls>
                                                <QuantityButton onClick={() => decreaseQuantity(item)}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </QuantityButton>
                                                <span>{item.quantity || 1}</span>
                                                <QuantityButton onClick={() => increaseQuantity(item)}>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </QuantityButton>
                                            </QuantityControls>
                                            <span>Price: {item.price}</span>
                                        </ItemDetails>
                                    </CartItem>
                                ))}
                                <CartTotal>
                                    <strong>Total:</strong> R{totalPrice}
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
    justify-content: flex-start;
    gap: 50px;
    align-items: center;
    background: rgba(0, 0, 0, 0.99);
    padding: 10px 10px;
    position: absolute;
    top: 0;
    width: 99%;
    z-index: 100;
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

const CartIconContainer = styled.div`
    position: relative;
    margin-left: 500px; /* Push to the right */
`;

const CartIcon = styled(FontAwesomeIcon)`
    color: white;
    font-size: 24px;
    cursor: pointer;

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
    top: 50px;
    right: 0;
    background: white;
    color: black;
    width: 600px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 200;
    padding: 10px;
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
    width: 100%;

    &:hover {
        background: #d18e00;
    }
`;

const EmptyCart = styled.div`
    text-align: center;
    padding: 10px;
    color: #888;
`;

export default Navbar;