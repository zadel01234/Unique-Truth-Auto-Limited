import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import "./Engine.css";
import "./Hydraulics.css";

// Import images (you'll need to add these imports)
// import hydraulicsHeroBg from "../../images/hydraulics-hero-bg.jpg";
import hydraulicPump from "../../../images/hydraulic_pump.webp";
import hydraulics from "../../../images/hydraulics.webp";
// import hydraulicCylinder from "../../images/hydraulic-cylinder.jpg";
// import hydraulicValve from "../../images/hydraulic-valve.jpg";

const Hydraulics = () => {
  const [filters, setFilters] = useState({
    type: ['pump', 'cylinder', 'valve', 'hose', 'seal'],
    brand: ['john-deere', 'massey-ferguson', 'kubota', 'new-holland'],
    priceRange: 75000
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const updatedFilters = { ...prev };
      if (updatedFilters[filterType].includes(value)) {
        updatedFilters[filterType] = updatedFilters[filterType].filter(item => item !== value);
      } else {
        updatedFilters[filterType] = [...updatedFilters[filterType], value];
      }
      return updatedFilters;
    });
  };

  const handlePriceChange = (e) => {
    setFilters(prev => ({
      ...prev,
      priceRange: parseInt(e.target.value)
    }));
  };

  const resetFilters = () => {
    setFilters({
      type: ['pump', 'cylinder', 'valve', 'hose', 'seal'],
      brand: ['john-deere', 'massey-ferguson', 'kubota', 'new-holland'],
      priceRange: 75000
    });
  };

  const hydraulicsProducts = [
    {
      id: 1,
      name: "Hydraulic Pump Assembly",
      image: hydraulicPump,
      compatibility: "Fits John Deere 5055D, 5060E",
      currentPrice: 42500,
      originalPrice: 48000,
      rating: 4,
      reviews: 24,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Heavy Duty Hydraulic Cylinder",
      image: hydraulicPump,
      compatibility: "Fits Massey Ferguson 265, 275",
      currentPrice: 38750,
      originalPrice: 45000,
      rating: 5,
      reviews: 18,
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "Control Valve Assembly",
      image: hydraulicPump,
      compatibility: "Fits Kubota L2501, L3301",
      currentPrice: 35200,
      originalPrice: null,
      rating: 4,
      reviews: 12
    },
    {
      id: 4,
      name: "Hydraulic Hose Kit",
      image: hydraulics,
      compatibility: "Universal fit for most tractors",
      currentPrice: 18500,
      originalPrice: 22000,
      rating: 4,
      reviews: 15
    },
    {
      id: 5,
      name: "Seal Kit",
      image: hydraulics,
      compatibility: "Fits various hydraulic systems",
      currentPrice: 9500,
      originalPrice: 12000,
      rating: 4,
      reviews: 22,
      badge: "Top Rated"
    },
    {
      id: 6,
      name: "Hydraulic Filter",
      image: hydraulics,
      compatibility: "Fits New Holland tractors",
      currentPrice: 12500,
      originalPrice: 15000,
      rating: 4,
      reviews: 19
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="category-hydraulics">
      <main className="container">
        <section 
          className="category-hero" 
        >
          <h1>Hydraulic Systems</h1>
          <p>Premium hydraulic components for smooth tractor operation</p>
        </section>

        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/category">Categories</Link>
          <span>/</span>
          <span>Hydraulic Systems</span>
        </nav>

        <div className="category-content">
          <aside className="category-sidebar">
            <div className="sidebar-widget">
              <h3>Filter Hydraulic Parts</h3>
              
              <div className="filter-section">
                <h4>Part Type</h4>
                <ul className="filter-list">
                  {['pump', 'cylinder', 'valve', 'hose', 'seal'].map(type => (
                    <li key={type}>
                      <label>
                        <input 
                          type="checkbox" 
                          name="type" 
                          value={type}
                          checked={filters.type.includes(type)}
                          onChange={() => handleFilterChange('type', type)}
                        /> 
                        {type.charAt(0).toUpperCase() + type.slice(1)}s
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
                          name="brand" 
                          value={brand}
                          checked={filters.brand.includes(brand)}
                          onChange={() => handleFilterChange('brand', brand)}
                        /> 
                        {brand.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
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
                    max="75000" 
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
              <p>Our hydraulic specialists can help you find the right parts for your tractor model.</p>
              <Link to="/contact" className="btn btn-outline">
                <span>📞</span> Contact Support
              </Link>
            </div>
          </aside>

          <div className="category-main">
            <div className="category-toolbar">
              <div className="results-count">Showing {hydraulicsProducts.length} of 65 hydraulic parts</div>
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
              {hydraulicsProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.badge && <div className="product-badge">{product.badge}</div>}
                  <div className="product-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <h3><Link to={`/product-hydraulics-${product.id}`}>{product.name}</Link></h3>
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
                    <div className="product-actions">
                      <button className="btn-add-to-cart"><Link to = "/contact">Get A Quote</Link></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <a href="#" className="page-link active">1</a>
              <a href="#" className="page-link">2</a>
              <a href="#" className="page-link">3</a>
              <span className="page-dots">...</span>
              <a href="#" className="page-link">Next →</a>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default Hydraulics;