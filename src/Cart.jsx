import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import IphoneLogo from './assets/iphone13.svg'
import SmartWatchLogo from './assets/smartwatch.svg'

function Cart() {
    const [cartItems, setCartItems] = useState([
        { 
            id: 1, 
            name: 'IPhone 13', 
            price: 1500000, 
            quantity: 1, 
            image: {IphoneLogo}
        },
        { 
            id: 2, 
            name: 'Smart Watch Ultra', 
            price: 850000,
            quantity: 1, 
            image: {SmartWatchLogo} 
        },
    ]);

    const handleQuantityChange = (id, newQuantity) => {
        // Ensure quantity doesn't go below 1
        if (newQuantity < 1) {
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const calculateSubtotal = (price, quantity) => {
        return price * quantity;
    };

    return (
        <>
            <div className="hero">
                <h1 className="text-center fw-lighter">Cart</h1>
                <small className="text-center w-100"><Link to={'/'}>Home</Link> &gt; Cart</small>
            </div>
            <div className="container">
                <table className="w-100">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr className="product" key={item.id}>
                                <td className="d-flex align-items-center ">
                                    <div><img className='item-image' src={item.image} alt={item.name} /></div>
                                    <div className="product-info">
                                        <p className='item-name'>{item.name}</p>
                                        <p className='price'>₦{item.price.toLocaleString()}</p>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        className="minus"
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <input
                                        className="quantity-input"
                                        value={item.quantity}
                                        min="1"
                                        type="number"
                                        readOnly
                                    />
                                    <button
                                        className="plus"
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </td>
                                <td className="subtotal">₦{calculateSubtotal(item.price, item.quantity).toLocaleString()}</td>
                                <td>
                                    <button
                                        className="cancel-button"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        <i className="bi bi-x-lg"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Cart;