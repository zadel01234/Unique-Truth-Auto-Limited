import React, { useState } from 'react';
import { Link } from 'react-router';
import "./Cart.css";
import emptycart from "../../images/shopping_trolley.png";
import engineoilfilter from "../../images/engine_oil_filter.webp";
import reartire from "../../images/rear_tire.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Diesel Engine Oil Filter",
      image: engineoilfilter,
      price: 18500,
      quantity: 2,
      compatibility: "John Deere, Massey Ferguson",
      sku: "EOF-2284"
    },
    {
      id: 2,
      name: "Rear Tractor Tire 13.6-28",
      image: reartire,
      price: 165000,
      quantity: 1,
      compatibility: "Fits most 50-75HP tractors",
      sku: "TT-13628"
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 0 ? 1500 : 0;
  const total = subtotal + shipping;

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="cart">
      <main className="container">
        <div className="cart-header">
          <h1>Your Shopping Cart</h1>
          <nav className="breadcrumbs" style={{padding: "10px 0px"}}>
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/category">Category</Link>
            <span>/</span>
            <span>Shopping Cart</span>
          </nav>
        </div>

        <div className="cart-container">
          <div className="cart-items-container">
            <div className="cart-items-header">
              <div className="header-product">Product</div>
              <div className="header-price">Price</div>
              <div className="header-quantity">Quantity</div>
              <div className="header-subtotal">Subtotal</div>
              <div className="header-remove"></div>
            </div>

            <div id="cart-items" className="cart-items">
              {cartItems.length === 0 ? (
                <div className="empty-cart-message">
                  <img src={emptycart} alt="Empty cart" width="200" />
                  <h3>Your cart is empty</h3>
                  <p>Browse our tractor parts to get started</p>
                  <a href="/category" className="btn btn-primary">Shop Now</a>
                </div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-product">
                      <img src={item.image} alt={item.name} width="80" height="80" />
                      <div className="item-details">
                        <h4>{item.name}</h4>
                        <p className="item-compatibility">{item.compatibility}</p>
                        <p className="item-sku">SKU: {item.sku}</p>
                      </div>
                    </div>
                    
                    <div className="item-price">
                      {formatPrice(item.price)}
                    </div>
                    
                    <div className="item-quantity">
                      <div className="quantity-selector">
                        <button 
                          className="qty-btn minus" 
                          onClick={() => updateQuantity(item.id, -1)}
                        >-</button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          className="qty-btn plus" 
                          onClick={() => updateQuantity(item.id, 1)}
                        >+</button>
                      </div>
                    </div>
                    
                    <div className="item-subtotal">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                    
                    <div className="item-remove">
                      <button 
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span id="subtotal">{formatPrice(subtotal)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{subtotal > 0 ? formatPrice(shipping) : 'Calculated at checkout'}</span>
              </div>
              <div className="summary-row total">
                <span>Estimated Total</span>
                <span id="total">{formatPrice(total)}</span>
              </div>

              <button 
                id="checkout-btn" 
                className="btn btn-primary btn-checkout"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>

              <div className="payment-methods">
                <span title="Visa">Visa</span>
                <span title="Mastercard">Mastercard</span>
                <span title="Verve">Verve</span>
              </div>

              {cartItems.length > 0 && (
                <button 
                  id="clear-cart-btn" 
                  className="btn btn-text btn-clear"
                  onClick={clearCart}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                  Clear Cart
                </button>
              )}
            </div>

            <div className="customer-support">
              <h4>Need Help?</h4>
              <p>Our tractor parts specialists are available to assist you.</p>
              <a href="/contact" className="btn btn-outline">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>


      <button id="back-to-top" aria-label="Back to top">
        ↑
      </button>
    </div>
  );
};

export default Cart;