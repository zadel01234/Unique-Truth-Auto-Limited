// // filename: Product.jsx
// import React from 'react'
// import { useLocation } from "react-router-dom";
// import { useEffect } from 'react';
// import { useState } from "react";
// import { Link } from 'react-router-dom';
// // import "./Product.css"
// import "./prod.css"
// import reartire from "../../images/rear_tire.jpg"
// import engineoilfilte from "../../images/engine_oil_filter.jpg"
// import fuelinjector from "../../images/fuel_injector.jpg"
// import engine from "../../images/engine.webp"



// import engineProducts from "../../Data/engineProducts";
// import electricalData from "../../Data/electricalData";
// import hydraulicsData from "../../Data/hydraulicsData";
// import tiresProduct from "../../Data/tiresProducts";

// const Product = () => {
//   const renderStars = (rating) => {
//     return [...Array(5)].map((_, i) => (
//       <span key={i} className={i < rating ? 'star filled' : 'star'}>
//         {i < rating ? '★' : '☆'}
//       </span>
//     ));
//   };


//   useEffect(() => {
//       document.title = "Products page | Unique Truth Auto "; // 👈 change tab title here
//     }, []);

//   const [activeTab, setActiveTab] = useState("description");
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (change) => {
//     const newQuantity = quantity + change;
//     if (newQuantity >= 1) {
//       setQuantity(newQuantity);
//     }
//   };

//   const { search } = useLocation();
//   const queryParams = new URLSearchParams(search);
//   const id = parseInt(queryParams.get("id"), 10);
//   const category = queryParams.get("category");

//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     let dataset = [];

//     switch (category) {
//       case "Engine":
//         dataset = engineProducts;
//         break;
//       case "Electrical":
//         dataset = electricalData;
//         break;
//       case "Hydraulics":
//         dataset = hydraulicsData;
//         break;
//       case "Tires":
//         dataset = tiresProduct;
//         break;
//       default:
//         dataset = engineProducts;
//     }

//     const foundProduct = dataset.find(item => item.id === id);
//     setProduct(foundProduct);
//   }, [id, category]);

//   if (!product) {
//     return <h2>Product not found</h2>;
//   }


// filename: Product.jsx
import React, { useEffect, useState } from 'react'
import { useLocation, Link } from "react-router-dom";
import "./prod.css"

import reartire from "../../images/rear_tire.jpg"
import engineoilfilte from "../../images/engine_oil_filter.jpg"
import fuelinjector from "../../images/fuel_injector.jpg"
import engine from "../../images/engine.webp"

import engineProducts from "../../Data/engineProducts";
import electricalData from "../../Data/electricalData";
import hydraulicsData from "../../Data/hydraulicsData";
import tiresProduct from "../../Data/tiresProducts";

const Product = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  useEffect(() => {
    document.title = "Products page | Unique Truth Auto "; 
  }, []);

  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = parseInt(queryParams.get("id"), 10);
  const category = queryParams.get("category");

  const [product, setProduct] = useState(null);

  useEffect(() => {
    let dataset = [];

    switch (category) {
      case "Engine":
        dataset = engineProducts;
        break;
      case "Electrical":
        dataset = electricalData;
        break;
      case "Hydraulics":
        dataset = hydraulicsData;
        break;
      case "Tires":
        dataset = tiresProduct;
        break;
      default:
        // 👇 fallback dataset (Engine by default)
        dataset = engineProducts;
    }

    let foundProduct = null;

    if (id && !isNaN(id)) {
      foundProduct = dataset.find(item => item.id === id);
    }

    // 👇 fallback product if none found
    if (!foundProduct && dataset.length > 0) {
      foundProduct = dataset[0];
    }

    setProduct(foundProduct);
  }, [id, category]);

  if (!product) {
    return <h2>Product not found</h2>;
  }
  

  return (
    <div>
      <div className="product">
        <main className="container">
          {/* <nav className="breadcrum">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/category?cat=engine">Engine Parts</Link>
            <span>/</span>
            <span>Diesel Engine Oil Filter</span>
          </nav> */}
          <nav className="breadcrum">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to={`/category/${product.category?.toLowerCase()}`}>
              {product.category} Parts
            </Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>
        <section className='product-detail'>
          <div className="product-display">
            <div className="product-left">
              <div className="thumbnail-list">
                {[1, 2, 3, 4].map((_, i) => (
                  <img key={i} src={product.image} alt={product.name} />
                ))}
              </div>
              <div className="main-image">
                <img src={product.image} alt={product.name} />
              </div>
            </div>

            <div className="product-right">
              <h1 className="product-title">{product.name}</h1>

              <div className="product-ratin">
                {renderStars(product.rating)}
                <span className="rating-count">({product.reviews})</span>
              </div>

              <p className="product-description">
                {product.compatibility} {product.description}
              </p>

              <div className="product-size">
                <h2>Sizes</h2>
                <div className="sizes">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button key={size} className="size-btn">{size}</button>
                  ))}
                </div>
              </div>

              <div className="product-actions">
                <Link to="/contact" className="quote-btn">Get a Quote</Link>
              </div>

              <div className="product-meta">
                <p><span>Category:</span> {product.category}</p>
                <p><span>Tags:</span> {product.brand}, {product.badge}, {product.compatibility}</p>
              </div>
            </div>
          </div>
        </section>

          <div className="product-tabs" role="tablist">
            <button
              className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "description"}
              aria-controls="description-tab"
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>

            <button
              className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "reviews"}
              aria-controls="reviews-tab"
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (24)
            </button>

            <button
              className={`tab-btn ${activeTab === "shipping" ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === "shipping"}
              aria-controls="shipping-tab"
              onClick={() => setActiveTab("shipping")}
            >
              Shipping
            </button>
          </div>

          <div className="tabs-content">
            {/* Description Tab */}
            <div
              id="description-tab"
              role="tabpanel"
              className={`tab-panel ${activeTab === "description" ? "active" : ""}`}
            >
              <h3>Product Details</h3>
              <p>The Unique Truth Auto Limited Diesel Engine Oil Filter is engineered to provide exceptional protection for your tractor's engine in Nigeria's challenging agricultural conditions. Our filters undergo rigorous testing to ensure they meet or exceed OEM specifications.</p>
              
              <h4>Key Features</h4>
              <ul>
                <li><strong>Advanced Filtration Technology</strong>: Multi-layered synthetic media with depth filtration capability captures harmful particles while maintaining optimal oil flow.</li>
                <li><strong>Durable Construction</strong>: Heavy-gauge steel casing with powder-coated exterior resists corrosion from humidity and chemical exposure.</li>
                <li><strong>Reliable Sealing</strong>: High-quality gasket material ensures leak-free operation even under extreme temperature fluctuations.</li>
                <li><strong>Nigeria-Adapted Design</strong>: Specifically reinforced to handle Nigeria's dusty conditions and variable fuel quality.</li>
              </ul>
              
              <h4>Technical Advantages</h4>
              <p>This filter maintains 95% of its efficiency throughout its service life, unlike conventional filters that degrade over time. The specially designed bypass valve opens at 12-15 psi, protecting your engine during cold starts when oil viscosity is high.</p>
              
              <h4>Installation Guide</h4>
              <ol>
                <li>Drain engine oil completely</li>
                <li>Clean the filter mounting surface</li>
                <li>Lightly coat the new filter's gasket with clean oil</li>
                <li>Hand-tighten the filter (3/4 turn after gasket contact)</li>
                <li>Refill with recommended oil</li>
                <li>Run engine and check for leaks</li>
              </ol>
            </div>
            
            {/* Reviews Tab */}
            <div
              id="reviews-tab"
              role="tabpanel"
              className={`tab-panel ${activeTab === "reviews" ? "active" : ""}`}
            >
              <div className="reviews-summary">
                <div className="overall-rating">
                  <span className="rating-value">4.2</span>
                  <span className="rating-stars">★★★★☆</span>
                  <span className="rating-count">24 reviews</span>
                </div>
                <div className="rating-bars">
                  <div className="rating-bar">
                    <span className="stars">5★</span>
                    <div className="bar-container">
                      <div className="bar" style={{ width: "60%"}}></div>
                    </div>
                    <span className="percentage">60% (14)</span>
                  </div>
                  <div className="rating-bar">
                    <span className="stars">4★</span>
                    <div className="bar-container">
                      <div className="bar" style={{width: "25%"}}></div>
                    </div>
                    <span className="percentage">25% (6)</span>
                  </div>
                  <div className="rating-bar">
                    <span className="stars">3★</span>
                    <div className="bar-container">
                      <div className="bar" style={{width: "8%"}}></div>
                    </div>
                    <span className="percentage">8% (2)</span>
                  </div>
                  <div className="rating-bar">
                    <span className="stars">2★</span>
                    <div className="bar-container">
                      <div className="bar" style={{width: "4%"}}></div>
                    </div>
                    <span className="percentage">4% (1)</span>
                  </div>
                  <div className="rating-bar">
                    <span className="stars">1★</span>
                    <div className="bar-container">
                      <div className="bar" style={{width: "4%"}}></div>
                    </div>
                    <span className="percentage">4% (1)</span>
                  </div>
                </div>
              </div>
              
              <div className="customer-reviews">
                <div className="review">
                  <div className="review-header">
                    <span className="reviewer-name">Oluwasegun F.</span>
                    <span className="review-date">March 15, 2025</span>
                    <span className="review-rating">★★★★★</span>
                  </div>
                  <h4 className="review-title">Perfect fit for my John Deere 5055D</h4>
                  <p className="review-text">This filter works exactly as described. I've used it for two oil changes now and my tractor's engine runs smoother than with the OEM filter. The quality is excellent and the price is much better than buying from the dealership.</p>
                </div>
                
                <div className="review">
                  <div className="review-header">
                    <span className="reviewer-name">Ibrahim K.</span>
                    <span className="review-date">February 28, 2025</span>
                    <span className="review-rating">★★★★☆</span>
                  </div>
                  <h4 className="review-title">Good quality but shipping delay</h4>
                  <p className="review-text">The filter itself is high quality and fits my Massey Ferguson 275 perfectly. My only complaint was that it took 5 days to arrive instead of the promised 3. Performance-wise, it's holding up well after 200 hours of use.</p>
                </div>
                
                <div className="review">
                  <div className="review-header">
                    <span className="reviewer-name">Chinedu O.</span>
                    <span className="review-date">January 10, 2025</span>
                    <span className="review-rating">★★★☆☆</span>
                  </div>
                  <h4 className="review-title">Decent but not perfect</h4>
                  <p className="review-text">The filter works okay but I noticed a very slight oil weep around the gasket after installation. Tightening it another quarter turn solved the issue. Performance seems comparable to OEM but not better as claimed.</p>
                </div>
                
                {/* <button className="btn btn-secondary view-all-reviews">View All 24 Reviews</button>
                <button className="btn btn-primary write-review">Write a Review</button> */}
              </div>
            </div>
            
            {/* Shipping Tab */}
            <div
              id="shipping-tab"
              role="tabpanel"
              className={`tab-panel ${activeTab === "shipping" ? "active" : ""}`}
            >
              <h3>Delivery Options</h3>
              <div className="shipping-options">
                <div className="shipping-option">
                  <h4>🚚 Standard Delivery</h4>
                  <p><strong>3-5 business days</strong> - ₦1,500 (Free for orders over ₦50,000)</p>
                  <p>Delivery to major cities: Lagos, Abuja, Port Harcourt, Kano, Ibadan</p>
                </div>
                
                <div className="shipping-option">
                  <h4>⚡ Express Delivery</h4>
                  <p><strong>1-2 business days</strong> - ₦3,500</p>
                  <p>Available for Lagos, Abuja, and Port Harcourt metropolitan areas only</p>
                </div>
                
                <div className="shipping-option">
                  <h4>🏪 Pickup from Store</h4>
                  <p><strong>Same day</strong> - Free</p>
                  <p>Available at our Lagos warehouse: 12 Industrial Avenue, Ikeja</p>
                  <p>Open Mon-Fri 8am-6pm, Sat 9am-4pm</p>
                </div>
              </div>
              
              <h3>Shipping Policy</h3>
              <ul>
                <li>All orders processed within <strong>24 hours</strong> on business days</li>
                <li>Rural area deliveries may take <strong>additional 2-3 days</strong></li>
                <li>Tracking number provided for all shipped orders</li>
                <li>Signature required upon delivery for orders over ₦30,000</li>
                <li>Contact us immediately for any shipping damage claims (must be reported within 48 hours of delivery)</li>
              </ul>
              
              <h3>International Shipping</h3>
              <p>We currently only ship within Nigeria. For international inquiries, please <Link to="/contact">contact our sales team</Link> for special arrangements.</p>
              
              <div className="shipping-notice">
                <span>ℹ️</span>
                <p>During peak seasons (planting/harvest periods), delivery times may be extended by 1-2 days. We appreciate your understanding.</p>
              </div>
            </div>
          </div>

          <section className="related-products">
            <h2>Frequently Bought Together</h2>
            <div className="product-gr">
              <div className="product-card">
                <div className="product-badge">Best Seller</div>
                <div className="product-image">
                  <img
                    src={engineoilfilte}
                    alt="Diesel Engine Oil Filter"
                    width="300"
                    height="200"
                    loading="lazy"
                  />
                  
                </div>
                <div className="product-info">
                  <h3>Diesel Engine Oil Filter</h3>
                  <p className="product-compatibility">
                    Compatible with John Deere, Massey Ferguson
                  </p>
                  <div className="product-price">
                    <span className="current-price">₦18,500</span>
                    <span className="original-price">₦22,000</span>
                    <span className="discount">16% off</span>
                  </div>
                  <div className="product-rating">
                    ★★★★☆ <span className="rating-count">(24)</span>
                  </div>
                  <div className="product-actions">
                      <Link to ="/contact" className="btn-add-to-cart" data-product="e1"> Get a Quote </Link>                    
                  </div>
                </div>
              </div>

              <div className="product-card">
                <div className="product-badge">New Arrival</div>
                <div className="product-image">
                  <img
                    src={reartire}
                    alt="Rear Tractor Tire"
                    width="300"
                    height="200"
                    loading="lazy"
                  />
                </div>
                <div className="product-info">
                  <h3>Rear Tractor Tire 13.6-28</h3>
                  <p className="product-compatibility">Fits most 50-75HP tractors</p>
                  <div className="product-price">
                    <span className="current-price">₦165,000</span>
                    <span className="original-price">₦180,000</span>
                    <span className="discount">8% off</span>
                  </div>
                  <div className="product-rating">
                    ★★★★★ <span className="rating-count">(37)</span>
                  </div>
                  <div className="product-actions">
                    <Link to ="/contact" className="btn-add-to-cart" data-product="e1"> Get a Quote </Link>
                  </div>
                </div>
              </div>

              <div className="product-card">
                <div className="product-badge">Top Rated</div>
                <div className="product-image">
                  <img
                    src={engine}
                    alt="Premium Diesel Engine Oil"
                    width="300"
                    height="200"
                    loading="lazy"
                  />
                </div>
                <div className="product-info">
                  <h3>15W-40 Diesel Engine Oil (5L)</h3>
                  <p className="product-compatibility">API CI-4/SL, 5 Liter Can</p>
                  <div className="product-price">
                    <span className="current-price">₦12,800</span>
                    <span className="original-price">₦14,500</span>
                    <span className="discount">12% off</span>
                  </div>
                  <div className="product-rating">
                    ★★★★★ <span className="rating-count">(42)</span>
                  </div>
                  <div className="product-actions">
                    <Link to ="/contact" className="btn-add-to-cart" data-product="e1"> Get a Quote </Link>
                  </div>
                </div>
              </div>

              <div className="product-card">
                <div className="product-badge">Special Offer</div>
                <div className="product-image">
                  <img
                    src={fuelinjector}
                    alt="Diesel Fuel Filter"
                    width="300"
                    height="200"
                    loading="lazy"
                  />
                </div>
                <div className="product-info">
                  <h3>Diesel Fuel Filter</h3>
                  <p className="product-compatibility">John Deere, Massey Ferguson</p>
                  <div className="product-price">
                    <span className="current-price">₦9,750</span>
                    <span className="original-price">₦11,200</span>
                    <span className="discount">13% off</span>
                  </div>
                  <div className="product-rating">
                    ★★★★☆ <span className="rating-count">(18)</span>
                  </div>
                  <div className="product-actions">
                    <Link to ="/contact" className="btn-add-to-cart" data-product="e1"> Get a Quote </Link>                   
                  </div>
                </div>
              </div>
            </div>
            
          </section>
        </main>
      </div>
    </div>
  )
}

export default Product