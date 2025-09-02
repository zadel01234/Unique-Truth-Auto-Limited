import React from 'react'
import "./Cart.css"
import "../Index/Index.css"
import logo from "../../images/logo.avif"
import emptycart from "../../images/shopping_trolley.png"

const Cart = () => {
  return (
    <div>
        <div className="cart">

            <main className="container">
            <div className="cart-header">
                <h1>Your Shopping Cart</h1>
                <nav className="breadcrumb">
                <a href="index.html">Home</a>
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
                    {/* <!-- Cart items will be dynamically inserted here --> */}
                    <div className="empty-cart-message">
                    <img src={emptycart} alt="Empty cart" width="200" />
                    <h3>Your cart is empty</h3>
                    <p>Browse our tractor parts to get started</p>
                    <a href="category.html" className="btn btn-primary">Shop Now</a>
                    </div>
                </div>
                </div>

                <div className="cart-summary">
                <div className="summary-card">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                    <span>Subtotal</span>
                    <span id="subtotal">₦0.00</span>
                    </div>
                    <div className="summary-row">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                    </div>
                    <div className="summary-row total">
                    <span>Estimated Total</span>
                    <span id="total">₦0.00</span>
                    </div>

                    <button id="checkout-btn" className="btn btn-primary btn-checkout">
                    Proceed to Checkout
                    </button>

                    <div className="payment-methods">
                    <i className="fab fa-cc-visa" title="Visa"></i>
                    <i className="fab fa-cc-mastercard" title="Mastercard"></i>
                    <i className="fas fa-credit-card" title="Verve"></i>
                    </div>

                    <button id="clear-cart-btn" className="btn btn-text btn-clear">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                        d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                        />
                    </svg>
                    Clear Cart
                    </button>
                </div>

                <div className="customer-support">
                    <h4>Need Help?</h4>
                    <p>Our tractor parts specialists are available to assist you.</p>
                    <a href="contact.html" className="btn btn-outline">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                        />
                    </svg>
                    Contact Support
                    </a>
                </div>
                </div>
            </div>
            </main>

            <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                <div className="footer-col footer-about">
                    <a href="index.html" className="footer-logo">
                    <img
                        src={logo}
                        alt="Unique Truth Auto Limited"
                        width="60"
                        height="60"
                        className="logo-img"
                    />
                    </a>
                    <p>
                    Nigeria's trusted supplier of quality tractor parts and
                    agricultural equipment since 1998.
                    </p>
                    <div className="footer-social">
                    <a href="#" aria-label="Facebook"
                        ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a href="#" aria-label="Twitter"
                        ><i className="fab fa-twitter"></i
                    ></a>
                    <a href="#" aria-label="Instagram"
                        ><i className="fab fa-instagram"></i
                    ></a>
                    <a href="#" aria-label="WhatsApp"
                        ><i className="fab fa-whatsapp"></i
                    ></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Shop</h3>
                    <ul>
                    <li><a href="category.html?cat=engine">Engine Parts</a></li>
                    <li><a href="category.html?cat=tires">Tires & Wheels</a></li>
                    <li>
                        <a href="category.html?cat=hydraulics">Hydraulic Systems</a>
                    </li>
                    <li>
                        <a href="category.html?cat=electrical">Electrical Parts</a>
                    </li>
                    <li><a href="category.html?cat=implements">Implements</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Company</h3>
                    <ul>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="careers.html">Careers</a></li>
                    <li><a href="terms.html">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact Info</h3>
                    <address>
                    <p>
                        <i className="fas fa-map-marker-alt"></i> 12 Industrial Avenue,
                        Ikeja, Lagos
                    </p>
                    <p>
                        <i className="fas fa-phone-alt"></i>
                        <a href="tel:+2348021234567">0802 123 4567</a>
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:info@uniquetruthautolimited.com"
                        >info@uniquetruthautolimited.com</a
                        >
                    </p>
                    <p>
                        <i className="fas fa-clock"></i> Mon-Fri: 8am - 6pm, Sat: 9am - 4pm
                    </p>
                    </address>
                </div>
                </div>

                <div className="footer-bottom">
                <div className="payment-methods">
                    <i className="fab fa-cc-visa" title="Visa"></i>
                    <i className="fab fa-cc-mastercard" title="Mastercard"></i>
                    <i className="fas fa-credit-card" title="Verve"></i>
                    <i className="fas fa-university" title="Bank Transfer"></i>
                    <i className="fas fa-money-bill-wave" title="Cash on Delivery"></i>
                </div>

                <div className="copyright">
                    <p>&copy; 2025 Unique Truth Auto Limited. All rights reserved.</p>
                </div>
                </div>
            </div>
            </footer>
            {/* <!-- Back to top button --> */}
            <button id="back-to-top" aria-label="Back to top">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M18 15l-6-6-6 6" />
            </svg>
            </button>

            {/* <!-- Mobile menu overlay --> */}
            <div className="mobile-menu-overlay"></div>

            {/* <!-- JavaScript --> */}
            {/* <script src="js/main.js" defer></script> */}

            {/* <!-- Structured data --> */}
            {/* <script type="application/ld+json"> */}
            {/* {
                "@context": "https://schema.org",
                "@type": "AutoPartsStore",
                "name": "Unique Truth Auto Limited",
                "image": "https://www.uniquetruthautolimited.com/images/logo.png",
                "@id": "",
                "url": "https://www.uniquetruthautolimited.com",
                "telephone": "+2348021234567",
                "address": {
                "@type": "PostalAddress",
                "streetAddress": "12 Industrial Avenue",
                "addressLocality": "Ikeja",
                "addressRegion": "Lagos",
                "postalCode": "",
                "addressCountry": "NG"
                },
                "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.6018,
                "longitude": 3.3515
                },
                "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
                },
                "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "16:00"
                }
            } */}
            {/* </script> */}
            {/* <script src="js/cart.js"></script> */}
        </div>
    </div>
  )
}

export default Cart
