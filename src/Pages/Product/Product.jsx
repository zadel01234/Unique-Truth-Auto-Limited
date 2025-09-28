// // filename: Product.jsx
// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from "react";
// import { Link } from 'react-router-dom';
// import "./Product.css"
// import reartire from "../../images/rear_tire.jpg"
// import engineoilfilter from "../../images/engine_oil_filter.webp"
// import engineoilfilte from "../../images/engine_oil_filter.jpg"
// import fuelinjector from "../../images/fuel_injector.jpg"
// import engine from "../../images/engine.webp"

// const Product = () => {
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

//   return (
//     <div>
//       <div className="product">
//         <main className="container">
//           <nav className="breadcrum">
//             <Link to="/">Home</Link>
//             <span>/</span>
//             <Link to="/category?cat=engine">Engine Parts</Link>
//             <span>/</span>
//             <span>Diesel Engine Oil Filter</span>
//           </nav>

//           <section className="product-detail">
//             <div className="product-gallery">
//               <div className="main-image">
//                 <picture>
//                   <img
//                     src={engineoilfilter}
//                     alt="Diesel Engine Oil Filter"
//                     loading="eager"
//                     width="800"
//                     height="600"
//                   />
//                 </picture>
//               </div>

//               <div className="thumbnail-grid">
//                 <img
//                   src={engineoilfilter}
//                   alt="Diesel Engine Oil Filter - Front View"
//                   loading="lazy"
//                   width="150"
//                   height="150"
//                 />
//                 <img
//                   src={engineoilfilter}
//                   alt="Diesel Engine Oil Filter - Side View"
//                   loading="lazy"
//                   width="150"
//                   height="150"
//                 />
//                 <img
//                   src={engineoilfilter}
//                   alt="Diesel Engine Oil Filter - Top View"
//                   loading="lazy"
//                   width="150"
//                   height="150"
//                 />
//                 <img
//                   src={engineoilfilter}
//                   alt="Diesel Engine Oil Filter - Installed View"
//                   loading="lazy"
//                   width="150"
//                   height="150"
//                 />
//               </div>
//             </div>

//             <div className="product-info">
//               <h1>Diesel Engine Oil Filter</h1>
//               <div className="product-meta">
//                 <span className="sku">SKU: EOF-2284</span>
//                 <div className="product-rating">
//                   ★★★★☆ <span className="rating-count">(24 reviews)</span>
//                 </div>
//               </div>

//               <div className="product-price">
//                 <span className="current">₦18,500</span>
//                 <span className="original">₦22,000</span>
//                 <span className="discount">16% OFF</span>
//               </div>

//               <div className="product-description">
//                 <p>
//                   Our premium diesel engine oil filter provides superior filtration for your tractor's engine, ensuring optimal performance and extended engine life. Specifically designed for Nigerian operating conditions with high dust levels and variable fuel quality.
//                 </p>
//                 <ul>
//                   <li><strong>Premium synthetic filter media</strong> - Captures 98.7% of contaminants at 20 microns</li>
//                   <li><strong>Anti-drain back valve</strong> - Prevents dry starts by maintaining oil in the system</li>
//                   <li><strong>10,000 km service interval</strong> - Twice the lifespan of standard filters</li>
//                   <li><strong>Heavy-duty canister</strong> - Withstands high pressure and vibration</li>
//                   <li><strong>Temperature resistant</strong> - Performs in extreme heat up to 150°C</li>
//                 </ul>
//               </div>

//               <div className="product-actions">
//                 <div className="quantity-selector">
//                   <button 
//                     className="qty-btn minus" 
//                     onClick={() => handleQuantityChange(-1)}
//                   >-</button>
//                   <input 
//                     type="number" 
//                     value={quantity} 
//                     min="1" 
//                     onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
//                   />
//                   <button 
//                     className="qty-btn plus" 
//                     onClick={() => handleQuantityChange(1)}
//                   >+</button>
//                 </div>
//                 <button className="btn btn-primary btn-add-to-cart"><Link to ="/contact"> Get a Quote </Link></button>
//                 <button className="btn-wishlist">♡ Add to Wishlist</button>
//               </div>

//               <div className="product-specs">
//                 <h3>Specifications</h3>
//                 <table>
//                   <tbody>
//                     <tr>
//                       <th>Compatibility</th>
//                       <td>John Deere 5055D, 5050E, 5060E; Massey Ferguson 265, 275</td>
//                     </tr>
//                     <tr>
//                       <th>Part Number</th>
//                       <td>AM107423 (OEM: TY22055)</td>
//                     </tr>
//                     <tr>
//                       <th>Weight</th>
//                       <td>1.2kg</td>
//                     </tr>
//                     <tr>
//                       <th>Dimensions</th>
//                       <td>120mm height × 90mm diameter</td>
//                     </tr>
//                     <tr>
//                       <th>Thread Size</th>
//                       <td>3/4"-16 UNF</td>
//                     </tr>
//                     <tr>
//                       <th>Burst Pressure</th>
//                       <td>450 psi (31 bar)</td>
//                     </tr>
//                     <tr>
//                       <th>Filter Media</th>
//                       <td>Synthetic cellulose blend with wire backing</td>
//                     </tr>
//                     <tr>
//                       <th>Beta Ratio</th>
//                       <td>75 at 20 microns</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </section>

//           <div className="product-tabs" role="tablist">
//             <button
//               className={`tab-btn ${activeTab === "description" ? "active" : ""}`}
//               role="tab"
//               aria-selected={activeTab === "description"}
//               aria-controls="description-tab"
//               onClick={() => setActiveTab("description")}
//             >
//               Description
//             </button>

//             <button
//               className={`tab-btn ${activeTab === "reviews" ? "active" : ""}`}
//               role="tab"
//               aria-selected={activeTab === "reviews"}
//               aria-controls="reviews-tab"
//               onClick={() => setActiveTab("reviews")}
//             >
//               Reviews (24)
//             </button>

//             <button
//               className={`tab-btn ${activeTab === "shipping" ? "active" : ""}`}
//               role="tab"
//               aria-selected={activeTab === "shipping"}
//               aria-controls="shipping-tab"
//               onClick={() => setActiveTab("shipping")}
//             >
//               Shipping
//             </button>
//           </div>

//           <div className="tabs-content">
//             {/* Description Tab */}
//             <div
//               id="description-tab"
//               role="tabpanel"
//               className={`tab-panel ${activeTab === "description" ? "active" : ""}`}
//             >
//               <h3>Product Details</h3>
//               <p>The Unique Truth Auto Limited Diesel Engine Oil Filter is engineered to provide exceptional protection for your tractor's engine in Nigeria's challenging agricultural conditions. Our filters undergo rigorous testing to ensure they meet or exceed OEM specifications.</p>
              
//               <h4>Key Features</h4>
//               <ul>
//                 <li><strong>Advanced Filtration Technology</strong>: Multi-layered synthetic media with depth filtration capability captures harmful particles while maintaining optimal oil flow.</li>
//                 <li><strong>Durable Construction</strong>: Heavy-gauge steel casing with powder-coated exterior resists corrosion from humidity and chemical exposure.</li>
//                 <li><strong>Reliable Sealing</strong>: High-quality gasket material ensures leak-free operation even under extreme temperature fluctuations.</li>
//                 <li><strong>Nigeria-Adapted Design</strong>: Specifically reinforced to handle Nigeria's dusty conditions and variable fuel quality.</li>
//               </ul>
              
//               <h4>Technical Advantages</h4>
//               <p>This filter maintains 95% of its efficiency throughout its service life, unlike conventional filters that degrade over time. The specially designed bypass valve opens at 12-15 psi, protecting your engine during cold starts when oil viscosity is high.</p>
              
//               <h4>Installation Guide</h4>
//               <ol>
//                 <li>Drain engine oil completely</li>
//                 <li>Clean the filter mounting surface</li>
//                 <li>Lightly coat the new filter's gasket with clean oil</li>
//                 <li>Hand-tighten the filter (3/4 turn after gasket contact)</li>
//                 <li>Refill with recommended oil</li>
//                 <li>Run engine and check for leaks</li>
//               </ol>
//             </div>
            
//             {/* Reviews Tab */}
//             <div
//               id="reviews-tab"
//               role="tabpanel"
//               className={`tab-panel ${activeTab === "reviews" ? "active" : ""}`}
//             >
//               <div className="reviews-summary">
//                 <div className="overall-rating">
//                   <span className="rating-value">4.2</span>
//                   <span className="rating-stars">★★★★☆</span>
//                   <span className="rating-count">24 reviews</span>
//                 </div>
//                 <div className="rating-bars">
//                   <div className="rating-bar">
//                     <span className="stars">5★</span>
//                     <div className="bar-container">
//                       <div className="bar" style={{ width: "60%"}}></div>
//                     </div>
//                     <span className="percentage">60% (14)</span>
//                   </div>
//                   <div className="rating-bar">
//                     <span className="stars">4★</span>
//                     <div className="bar-container">
//                       <div className="bar" style={{width: "25%"}}></div>
//                     </div>
//                     <span className="percentage">25% (6)</span>
//                   </div>
//                   <div className="rating-bar">
//                     <span className="stars">3★</span>
//                     <div className="bar-container">
//                       <div className="bar" style={{width: "8%"}}></div>
//                     </div>
//                     <span className="percentage">8% (2)</span>
//                   </div>
//                   <div className="rating-bar">
//                     <span className="stars">2★</span>
//                     <div className="bar-container">
//                       <div className="bar" style={{width: "4%"}}></div>
//                     </div>
//                     <span className="percentage">4% (1)</span>
//                   </div>
//                   <div className="rating-bar">
//                     <span className="stars">1★</span>
//                     <div className="bar-container">
//                       <div className="bar" style={{width: "4%"}}></div>
//                     </div>
//                     <span className="percentage">4% (1)</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="customer-reviews">
//                 <div className="review">
//                   <div className="review-header">
//                     <span className="reviewer-name">Oluwasegun F.</span>
//                     <span className="review-date">March 15, 2025</span>
//                     <span className="review-rating">★★★★★</span>
//                   </div>
//                   <h4 className="review-title">Perfect fit for my John Deere 5055D</h4>
//                   <p className="review-text">This filter works exactly as described. I've used it for two oil changes now and my tractor's engine runs smoother than with the OEM filter. The quality is excellent and the price is much better than buying from the dealership.</p>
//                 </div>
                
//                 <div className="review">
//                   <div className="review-header">
//                     <span className="reviewer-name">Ibrahim K.</span>
//                     <span className="review-date">February 28, 2025</span>
//                     <span className="review-rating">★★★★☆</span>
//                   </div>
//                   <h4 className="review-title">Good quality but shipping delay</h4>
//                   <p className="review-text">The filter itself is high quality and fits my Massey Ferguson 275 perfectly. My only complaint was that it took 5 days to arrive instead of the promised 3. Performance-wise, it's holding up well after 200 hours of use.</p>
//                 </div>
                
//                 <div className="review">
//                   <div className="review-header">
//                     <span className="reviewer-name">Chinedu O.</span>
//                     <span className="review-date">January 10, 2025</span>
//                     <span className="review-rating">★★★☆☆</span>
//                   </div>
//                   <h4 className="review-title">Decent but not perfect</h4>
//                   <p className="review-text">The filter works okay but I noticed a very slight oil weep around the gasket after installation. Tightening it another quarter turn solved the issue. Performance seems comparable to OEM but not better as claimed.</p>
//                 </div>
                
//                 {/* <button className="btn btn-secondary view-all-reviews">View All 24 Reviews</button>
//                 <button className="btn btn-primary write-review">Write a Review</button> */}
//               </div>
//             </div>
            
//             {/* Shipping Tab */}
//             <div
//               id="shipping-tab"
//               role="tabpanel"
//               className={`tab-panel ${activeTab === "shipping" ? "active" : ""}`}
//             >
//               <h3>Delivery Options</h3>
//               <div className="shipping-options">
//                 <div className="shipping-option">
//                   <h4>🚚 Standard Delivery</h4>
//                   <p><strong>3-5 business days</strong> - ₦1,500 (Free for orders over ₦50,000)</p>
//                   <p>Delivery to major cities: Lagos, Abuja, Port Harcourt, Kano, Ibadan</p>
//                 </div>
                
//                 <div className="shipping-option">
//                   <h4>⚡ Express Delivery</h4>
//                   <p><strong>1-2 business days</strong> - ₦3,500</p>
//                   <p>Available for Lagos, Abuja, and Port Harcourt metropolitan areas only</p>
//                 </div>
                
//                 <div className="shipping-option">
//                   <h4>🏪 Pickup from Store</h4>
//                   <p><strong>Same day</strong> - Free</p>
//                   <p>Available at our Lagos warehouse: 12 Industrial Avenue, Ikeja</p>
//                   <p>Open Mon-Fri 8am-6pm, Sat 9am-4pm</p>
//                 </div>
//               </div>
              
//               <h3>Shipping Policy</h3>
//               <ul>
//                 <li>All orders processed within <strong>24 hours</strong> on business days</li>
//                 <li>Rural area deliveries may take <strong>additional 2-3 days</strong></li>
//                 <li>Tracking number provided for all shipped orders</li>
//                 <li>Signature required upon delivery for orders over ₦30,000</li>
//                 <li>Contact us immediately for any shipping damage claims (must be reported within 48 hours of delivery)</li>
//               </ul>
              
//               <h3>International Shipping</h3>
//               <p>We currently only ship within Nigeria. For international inquiries, please <Link to="/contact">contact our sales team</Link> for special arrangements.</p>
              
//               <div className="shipping-notice">
//                 <span>ℹ️</span>
//                 <p>During peak seasons (planting/harvest periods), delivery times may be extended by 1-2 days. We appreciate your understanding.</p>
//               </div>
//             </div>
//           </div>

//           <section className="related-products">
//             <h2>Frequently Bought Together</h2>
//             <div className="product-grid">
//               <div className="product-card">
//                 <div className="product-badge">Best Seller</div>
//                 <div className="product-image">
//                   <img
//                     src={engineoilfilte}
//                     alt="Diesel Engine Oil Filter"
//                     width="300"
//                     height="200"
//                     loading="lazy"
//                   />
                  
//                 </div>
//                 <div className="product-info">
//                   <h3>Diesel Engine Oil Filter</h3>
//                   <p className="product-compatibility">
//                     Compatible with John Deere, Massey Ferguson
//                   </p>
//                   <div className="product-price">
//                     <span className="current-price">₦18,500</span>
//                     <span className="original-price">₦22,000</span>
//                     <span className="discount">16% off</span>
//                   </div>
//                   <div className="product-rating">
//                     ★★★★☆ <span className="rating-count">(24)</span>
//                   </div>
//                   <div className="product-actions">
//                     <button className="btn-add-to-cart" data-product="e1">
//                       <Link to ="/contact"> Get a Quote </Link>
//                     </button>
                    
//                   </div>
//                 </div>
//               </div>

//               <div className="product-card">
//                 <div className="product-badge">New Arrival</div>
//                 <div className="product-image">
//                   <img
//                     src={reartire}
//                     alt="Rear Tractor Tire"
//                     width="300"
//                     height="200"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="product-info">
//                   <h3>Rear Tractor Tire 13.6-28</h3>
//                   <p className="product-compatibility">Fits most 50-75HP tractors</p>
//                   <div className="product-price">
//                     <span className="current-price">₦165,000</span>
//                     <span className="original-price">₦180,000</span>
//                     <span className="discount">8% off</span>
//                   </div>
//                   <div className="product-rating">
//                     ★★★★★ <span className="rating-count">(37)</span>
//                   </div>
//                   <div className="product-actions">
//                     <button className="btn-add-to-cart" data-product="t2">
//                       <Link to ="/contact"> Get a Quote </Link>
//                     </button>
                    
//                   </div>
//                 </div>
//               </div>

//               <div className="product-card">
//                 <div className="product-badge">Top Rated</div>
//                 <div className="product-image">
//                   <img
//                     src={engine}
//                     alt="Premium Diesel Engine Oil"
//                     width="300"
//                     height="200"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="product-info">
//                   <h3>15W-40 Diesel Engine Oil (5L)</h3>
//                   <p className="product-compatibility">API CI-4/SL, 5 Liter Can</p>
//                   <div className="product-price">
//                     <span className="current-price">₦12,800</span>
//                     <span className="original-price">₦14,500</span>
//                     <span className="discount">12% off</span>
//                   </div>
//                   <div className="product-rating">
//                     ★★★★★ <span className="rating-count">(42)</span>
//                   </div>
//                   <div className="product-actions">
//                     <button className="btn-add-to-cart" data-product="o3">
//                       <Link to ="/contact"> Get a Quote </Link>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               <div className="product-card">
//                 <div className="product-badge">Special Offer</div>
//                 <div className="product-image">
//                   <img
//                     src={fuelinjector}
//                     alt="Diesel Fuel Filter"
//                     width="300"
//                     height="200"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="product-info">
//                   <h3>Diesel Fuel Filter</h3>
//                   <p className="product-compatibility">John Deere, Massey Ferguson</p>
//                   <div className="product-price">
//                     <span className="current-price">₦9,750</span>
//                     <span className="original-price">₦11,200</span>
//                     <span className="discount">13% off</span>
//                   </div>
//                   <div className="product-rating">
//                     ★★★★☆ <span className="rating-count">(18)</span>
//                   </div>
//                   <div className="product-actions">
//                     <button className="btn-add-to-cart" data-product="f4">
//                       <Link to ="/contact"> Get a Quote </Link>
//                     </button>
                    
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             {/* <div className="bundle-deal">
//               <h3>Complete Engine Maintenance Kit</h3>
//               <div className="bundle-items">
//                 <div className="bundle-item">
//                   <img src={engineoilfilter} alt="Oil Filter" />
//                   <span>Oil Filter</span>
//                 </div>
//                 <div className="bundle-plus">+</div>
//                 <div className="bundle-item">
//                   <img src={engine} alt="Engine Oil" />
//                   <span>Engine Oil (5L)</span>
//                 </div>
//                 <div className="bundle-plus">+</div>
//                 <div className="bundle-item">
//                   <img src={fuelinjector} alt="Fuel Filter" />
//                   <span>Fuel Filter</span>
//                 </div>
//               </div>
//               <div className="bundle-price">
//                 <span className="original-price">₦41,050</span>
//                 <span className="bundle-save">Save ₦5,300</span>
//                 <span className="current-price">₦35,750</span>
//               </div>
//               <button className="btn btn-primary btn-add-bundle"><Link to ="/contact"> Get a Quote </Link></button>
              
//             </div> */}
//           </section>
//         </main>

// {/*         
//         <button id="back-to-top" aria-label="Back to top">
//           ↑
//         </button> */}
//       </div>
//     </div>
//   )
// }

// export default Product

// src/pages/Product/Product.jsx
// import React from "react";
// import { useParams } from "react-router-dom";

// // Import all product datasets
// import database from "../../data/database";
// import engineProducts from "../../data/engineProducts";
// import electricalData from "../../data/electricalData";
// import hydraulicsData from "../../data/hydraulicsData";
// import tiresProduct from "../../Data/tiresProducts";

// const Product = () => {
//   // ✅ Combine all datasets into one array
//   const allProducts = [
//     ...database,
//     ...engineProducts,
//     ...electricalData,
//     ...hydraulicsData,
//     ...tiresProduct,
//   ];

//   // ✅ Get product ID from URL
//   const { id } = useParams();

//   // ✅ Find product by ID
//   const product = allProducts.find((item) => item.id === parseInt(id));

//   // ✅ Default product (fallback if no match)
//   const defaultProduct = {
//     id: 0,
//     name: "Diesel Engine Oil Filter",
//     category: "Engine",
//     price: "₦18,500",
//     description:
//       "Our premium diesel engine oil filter provides superior filtration for your tractor's engine, ensuring durability and optimal performance even in harsh conditions.",
//     image: "/images/engine_oil_filter.webp",
//   };

//   // ✅ Decide what to display
//   const displayProduct = product || defaultProduct;

//   return (
//     <div className="product-container">
//       <h1>{displayProduct.name}</h1>
//       <p><strong>Category:</strong> {displayProduct.category}</p>
//       {displayProduct.price && (
//         <p><strong>Price:</strong> {displayProduct.price}</p>
//       )}
//       <p>{displayProduct.description}</p>
//       <img
//         src={displayProduct.image}
//         alt={displayProduct.name}
//         style={{ width: "300px", borderRadius: "8px" }}
//       />
//     </div>
//   );
// };

// export default Product;

// ProductPage.jsx
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Import all your data files
import engineProducts from "../../Data/electricalData";
import hydraulicsData from "../../Data/hydraulicsData";
import tiresProduct from "../../Data/tiresProducts";

const ProductPage = () => {
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
        dataset = [];
    }

    const foundProduct = dataset.find(item => item.id === id);
    setProduct(foundProduct);
  }, [id, category]);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-page">
      {product.image && <img src={product.image} alt={product.name} />}
      <p>Category: {product.category}</p>
      <h1>{product.name}</h1>
      Add more product details here
    </div>
  );
};

export default ProductPage;
