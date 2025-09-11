// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import "./Electrical.css";

// import electrical from "../../../images/electrical.jpeg"
// import Battery from "../../../images/battery.webp"

// const Electrical = () => {
//   useEffect(() => {
//       document.title = "Electrical Categories | Unique Truth Auto "; // 👈 change tab title here
//     }, []);



//   const [filters, setFilters] = useState({
//     type: ['alternator', 'starter', 'battery', 'switch', 'wiring'],
//     brand: ['john-deere', 'massey-ferguson', 'kubota', 'new-holland'],
//     voltage: ['12v', '24v', '6v'],
//     priceRange: 100000
//   });

//   const handleFilterChange = (filterType, value) => {
//     setFilters(prev => {
//       const updatedFilters = { ...prev };
//       if (updatedFilters[filterType].includes(value)) {
//         updatedFilters[filterType] = updatedFilters[filterType].filter(item => item !== value);
//       } else {
//         updatedFilters[filterType] = [...updatedFilters[filterType], value];
//       }
//       return updatedFilters;
//     });
//   };

//   const handlePriceChange = (e) => {
//     setFilters(prev => ({
//       ...prev,
//       priceRange: parseInt(e.target.value)
//     }));
//   };

//   const resetFilters = () => {
//     setFilters({
//       type: ['alternator', 'starter', 'battery', 'switch', 'wiring'],
//       brand: ['john-deere', 'massey-ferguson', 'kubota', 'new-holland'],
//       voltage: ['12v', '24v', '6v'],
//       priceRange: 100000
//     });
//   };

//   const electricalProducts = [
//     {
//       id: 1,
//       name: "Heavy Duty Alternator",
//       image: electrical,
//       compatibility: "Fits John Deere 5055D, 5060E",
//       rating: 4,
//       reviews: 32,
//       badge: "Best Seller"
//     },
//     {
//       id: 2,
//       name: "High Torque Starter Motor",
//       image: electrical,
//       compatibility: "Fits Massey Ferguson 265, 275",
//       rating: 5,
//       reviews: 21,
//       badge: "New Arrival"
//     },
//     {
//       id: 3,
//       name: "Heavy Duty Tractor Battery",
//       image: Battery,
//       compatibility: "Fits Kubota L2501, L3301",
//       rating: 4,
//       reviews: 15
//     },
//     {
//       id: 4,
//       name: "Light Switch Assembly",
//       image: Battery,
//       compatibility: "Fits New Holland TT4.75",
//       rating: 3,
//       reviews: 8
//     },
//     {
//       id: 5,
//       name: "Complete Wiring Harness",
//       image: electrical,
//       compatibility: "Fits John Deere 5055D",
//       rating: 4,
//       reviews: 11,
//       badge: "Limited Stock"
//     },
//     {
//       id: 6,
//       name: "Fuse Box Assembly",
//       image: Battery,
//       compatibility: "Fits Massey Ferguson 265",
//       rating: 3,
//       reviews: 6
//     }
//   ];

//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <span key={i} className={i <= rating ? 'star filled' : 'star'}>
//           {i <= rating ? '★' : '☆'}
//         </span>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div>
//       <main className="container">
//         <section 
//           className="category-hero" 
//           // style={{ 
//           //   backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../../images/tractor_bg.webp')" 
//           // }}
//         >
//           <h1>Electrical Parts</h1>
//           <p>Premium electrical components to keep your tractor's systems running smoothly</p>
//         </section>

//         <nav className="breadcrumb">
//           <Link to="/">Home</Link>
//           <span>/</span>
//           <Link to="/category">Categories</Link>
//           <span>/</span>
//           <span>Electrical Parts</span>
//         </nav>

//         <div className="category-content">
//           <aside className="category-sidebar">
//             <div className="sidebar-widget">
//               <h3>Filter Electrical Parts</h3>
              
//               <div className="filter-section">
//                 <h4>Part Type</h4>
//                 <ul className="filter-list">
//                   {['alternator', 'starter', 'battery', 'switch', 'wiring'].map(type => (
//                     <li key={type}>
//                       <label>
//                         <input 
//                           type="checkbox" 
//                           name="type" 
//                           value={type}
//                           checked={filters.type.includes(type)}
//                           onChange={() => handleFilterChange('type', type)}
//                         /> 
//                         {type.charAt(0).toUpperCase() + type.slice(1)}
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="filter-section">
//                 <h4>Brand Compatibility</h4>
//                 <ul className="filter-list">
//                   {['john-deere', 'massey-ferguson', 'kubota', 'new-holland'].map(brand => (
//                     <li key={brand}>
//                       <label>
//                         <input 
//                           type="checkbox" 
//                           name="brand" 
//                           value={brand}
//                           checked={filters.brand.includes(brand)}
//                           onChange={() => handleFilterChange('brand', brand)}
//                         /> 
//                         {brand.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="filter-section">
//                 <h4>Voltage</h4>
//                 <ul className="filter-list">
//                   {['12v', '24v', '6v'].map(voltage => (
//                     <li key={voltage}>
//                       <label>
//                         <input 
//                           type="checkbox" 
//                           name="voltage" 
//                           value={voltage}
//                           checked={filters.voltage.includes(voltage)}
//                           onChange={() => handleFilterChange('voltage', voltage)}
//                         /> 
//                         {voltage.toUpperCase()}
//                       </label>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="filter-section">
//                 <h4>Price Range</h4>
//                 <div className="price-range">
//                   <input 
//                     type="range" 
//                     min="0" 
//                     max="100000" 
//                     value={filters.priceRange}
//                     onChange={handlePriceChange}
//                   />
//                   <div className="price-values">
//                     <span>₦0</span>
//                     <span>₦{filters.priceRange.toLocaleString()}+</span>
//                   </div>
//                 </div>
//               </div>

//               <button className="btn btn-primary btn-apply">Apply Filters</button>
//               <button className="btn btn-text btn-reset" onClick={resetFilters}>Reset All</button>
//             </div>

//             <div className="sidebar-widget">
//               <h3>Need Help?</h3>
//               <p>Our electrical specialists can help you find the right parts for your tractor model.</p>
//               <Link to="/contact" className="btn btn-outline">
//                 <span>📞</span> Contact Support
//               </Link>
//             </div>
//           </aside>

//           <div className="category-main">
//             <div className="category-toolbar">
//               <div className="results-count">Showing {electricalProducts.length} of 72 electrical parts</div>
//               <div className="sort-options">
//                 <label htmlFor="sort">Sort By:</label>
//                 <select id="sort">
//                   <option>Popularity</option>
//                   <option>Price: Low to High</option>
//                   <option>Price: High to Low</option>
//                   <option>Newest Arrivals</option>
//                 </select>
//               </div>
//             </div>

//             <div className="product-grid">
//               {electricalProducts.map(product => (
//                 <div key={product.id} className="product-card">
//                   {product.badge && <div className="product-badge">{product.badge}</div>}
//                   <div className="product-image">
//                     <img src={product.image} alt={product.name} loading="lazy" />
//                   </div>
//                   <div className="product-info">
//                     <h3><Link to={`/product-electrical-${product.id}`}>{product.name}</Link></h3>
//                     <p className="product-compatibility">{product.compatibility}</p>
//                     <div className="product-rating">
//                       {renderStars(product.rating)}
//                       <span className="rating-count">({product.reviews})</span> 
//                     </div>
//                     <div className="product-quote">
//                       <Link 
//                         to={`/contact?product=${encodeURIComponent(product.name)}&model=${encodeURIComponent(product.compatibility.replace('Fits ', ''))}`} 
//                         className="btn-get-quote"
//                       >
//                         Get a Quote
//                       </Link>
//                     </div>
//                     <div className="product-actions">
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="pagination">
//               <a href="#" className="page-link active">1</a>
//               <a href="#" className="page-link">2</a>
//               <a href="#" className="page-link">3</a>
//               <span className="page-dots">...</span>
//               <a href="#" className="page-link">Next →</a>
//             </div>
//           </div>
//         </div>
//       </main>

//     </div>
//   );
// };

// export default Electrical;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Electrical.css";

// Import data
import electricalProducts from "../../../Data/electricalData";

const Electrical = () => {
  useEffect(() => {
    document.title = "Electrical Categories | Unique Truth Auto ";
  }, []);

  const [filters, setFilters] = useState({
    type: [],
    brand: [],
    voltage: [],
    priceRange: 100000
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const updated = { ...prev };
      if (updated[filterType].includes(value)) {
        updated[filterType] = updated[filterType].filter(item => item !== value);
      } else {
        updated[filterType] = [...updated[filterType], value];
      }
      return updated;
    });
    setCurrentPage(1);
  };

  const handlePriceChange = (e) => {
    setFilters(prev => ({
      ...prev,
      priceRange: parseInt(e.target.value)
    }));
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters({
      type: [],
      brand: [],
      voltage: [],
      priceRange: 100000
    });
    setCurrentPage(1);
  };

  // Filtering logic
  const filteredProducts = electricalProducts.filter(product => {
    const matchType = filters.type.length ? filters.type.includes(product.type) : true;
    const matchBrand = filters.brand.length ? filters.brand.includes(product.brand) : true;
    const matchVoltage = filters.voltage.length ? filters.voltage.includes(product.voltage) : true;
    const matchPrice = product.currentPrice <= filters.priceRange;
    return matchType && matchBrand && matchVoltage && matchPrice;
  });

  // Pagination logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  const formatPrice = (price) => `₦${price.toLocaleString()}`;

  const getVisiblePages = () => {
    if (totalPages <= 3) return [...Array(totalPages)].map((_, i) => i + 1);
    if (currentPage === 1) return [1, 2, 3];
    if (currentPage === totalPages) return [totalPages - 2, totalPages - 1, totalPages];
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  return (
    <div>
      <main className="container">
        <section className="category-hero">
          <h1>Electrical Parts</h1>
          <p>Premium electrical components to keep your tractor's systems running smoothly</p>
        </section>

        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/category">Categories</Link>
          <span>/</span>
          <span>Electrical Parts</span>
        </nav>

        <div className="category-content">
          <aside className="category-sidebar">
            <div className="sidebar-widget">
              <h3>Filter Electrical Parts</h3>
              
              <div className="filter-section">
                <h4>Part Type</h4>
                <ul className="filter-list">
                  {['alternator', 'starter', 'battery', 'switch', 'wiring'].map(type => (
                    <li key={type}>
                      <label>
                        <input 
                          type="checkbox" 
                          checked={filters.type.includes(type)}
                          onChange={() => handleFilterChange('type', type)}
                        /> 
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-section">
                <h4>Brand Compatibility</h4>
                <ul className="filter-list">
                  {['john-deere', 'massey-ferguson', 'kubota', 'new-holland'].map(brand => (
                    <li key={brand}>
                      <label>
                        <input 
                          type="checkbox" 
                          checked={filters.brand.includes(brand)}
                          onChange={() => handleFilterChange('brand', brand)}
                        /> 
                        {brand.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-section">
                <h4>Voltage</h4>
                <ul className="filter-list">
                  {['12v', '24v', '6v'].map(voltage => (
                    <li key={voltage}>
                      <label>
                        <input 
                          type="checkbox" 
                          checked={filters.voltage.includes(voltage)}
                          onChange={() => handleFilterChange('voltage', voltage)}
                        /> 
                        {voltage.toUpperCase()}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-section">
                <h4>Price Range</h4>
                <div className="price-range">
                  <input 
                    type="range" 
                    min="0" 
                    max="100000" 
                    value={filters.priceRange}
                    onChange={handlePriceChange}
                  />
                  <div className="price-values">
                    <span>₦0</span>
                    <span>₦{filters.priceRange.toLocaleString()}+</span>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary btn-apply">Apply Filters</button>
              <button className="btn btn-text btn-reset" onClick={resetFilters}>Reset All</button>
            </div>

            <div className="sidebar-widget">
              <h3>Need Help?</h3>
              <p>Our electrical specialists can help you find the right parts for your tractor model.</p>
              <Link to="/contact" className="btn btn-outline">
                <span>📞</span> Contact Support
              </Link>
            </div>
          </aside>

          <div className="category-main">
            <div className="category-toolbar">
              <div className="results-count">
                Showing {currentProducts.length} of {filteredProducts.length} electrical parts
              </div>
              <div className="sort-options">
                <label htmlFor="sort">Sort By:</label>
                <select id="sort">
                  <option>Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>
              </div>
            </div>

            <div className="product-grid">
              {currentProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.badge && <div className="product-badge">{product.badge}</div>}
                  <div className="product-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <h3><Link to={`/product-electrical-${product.id}`}>{product.name}</Link></h3>
                    <p className="product-compatibility">{product.compatibility}</p>
                    <div className="product-price">
                      <span className="current-price">{formatPrice(product.currentPrice)}</span>
                      {product.originalPrice && (
                        <>
                          <span className="original-price">{formatPrice(product.originalPrice)}</span>
                          <span className="discount">
                            {Math.round((1 - product.currentPrice / product.originalPrice) * 100)}% off
                          </span>
                        </>
                      )}
                    </div>
                    <div className="product-rating">
                      {renderStars(product.rating)}
                      <span className="rating-count">({product.reviews})</span>
                    </div>
                    <div className="product-quote">
                      <Link 
                        to={`/contact?product=${encodeURIComponent(product.name)}&model=${encodeURIComponent(product.compatibility.replace('Fits ', ''))}`} 
                        className="btn-get-quote"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="pagination">
                {getVisiblePages().map(num => (
                  <button 
                    key={num} 
                    className={`page-link ${num === currentPage ? 'active' : ''}`}
                    onClick={() => paginate(num)}
                  >
                    {num}
                  </button>
                ))}
                {currentPage < totalPages && (
                  <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                    Next →
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Electrical;
