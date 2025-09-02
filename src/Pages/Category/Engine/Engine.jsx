import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Engine.css";
import engineOilFilter from "../../../images/engine_oil_filter.webp";
import engine from "../../../images/engine.webp";
import starter from "../../../images/starter_motor.webp";
import valve from "../../../images/control_valve.webp";


const Engine = () => {
  const [filters, setFilters] = useState({
    type: ['oil-filter', 'air-filter', 'fuel-filter', 'gasket', 'piston'],
    brand: ['john-deere', 'massey-ferguson', 'kubota', 'new-holland'],
    priceRange: 50000
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
      type: ['oil-filter', 'air-filter', 'fuel-filter', 'gasket', 'piston'],
      brand: ['john-deere', 'massey-ferguson', 'kubota', 'new-holland'],
      priceRange: 50000
    });
  };

  const engineProducts = [
    {
      id: 1,
      name: "Premium Oil Filter",
      image: engineOilFilter,
      compatibility: "Fits John Deere 5055D, 5060E",
      currentPrice: 18500,
      originalPrice: 22000,
      rating: 4,
      reviews: 24,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Heavy Duty Oil Motor Engine",
      image: starter,
      compatibility: "Fits Massey Ferguson 265, 275",
      currentPrice: 21750,
      originalPrice: 25000,
      rating: 5,
      reviews: 18,
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "High Performance Air Filter",
      image: engineOilFilter, 
      compatibility: "Fits Kubota L2501, L3301",
      currentPrice: 15200,
      originalPrice: null,
      rating: 4,
      reviews: 12
    },
    {
      id: 4,
      name: "Premium Oil Filter",
      image: engineOilFilter,
      compatibility: "Fits John Deere 5055D, 5060E",
      currentPrice: 18500,
      originalPrice: 22000,
      rating: 4,
      reviews: 24,
      badge: "Best Seller"
    },
    {
      id: 5,
      name: "Heavy Duty Engine",
      image: engine,
      compatibility: "Fits Massey Ferguson 265, 275",
      currentPrice: 21750,
      originalPrice: 25000,
      rating: 5,
      reviews: 18,
      badge: "New Arrival"
    },
    {
      id: 6,
      name: "High Performance Control Valve",
      image: valve,
      compatibility: "Fits Kubota L2501, L3301",
      currentPrice: 15200,
      originalPrice: null,
      rating: 4,
      reviews: 12
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
    <div className="category-engine">
      <main className="container">
        <section className="category-hero">
          <h1>Engine Parts</h1>
          <p>Premium components to keep your tractor running at peak performance</p>
        </section>

        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/category">Categories</Link>
          <span>/</span>
          <span>Engine Parts</span>
        </nav>

        <div className="category-content">
          <aside className="category-sidebar">
            <div className="sidebar-widget">
              <h3>Filter Engine Parts</h3>
              
              <div className="filter-section">
                <h4>Part Type</h4>
                <ul className="filter-list">
                  {['oil-filter', 'air-filter', 'fuel-filter', 'gasket', 'piston'].map(type => (
                    <li key={type}>
                      <label>
                        <input 
                          type="checkbox" 
                          name="type" 
                          value={type}
                          checked={filters.type.includes(type)}
                          onChange={() => handleFilterChange('type', type)}
                        /> 
                        {type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
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
                    max="50000" 
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
              <p>Our engine specialists can help you find the right parts for your tractor model.</p>
              <Link to="/contact" className="btn btn-outline">
                <span>📞</span> Contact Support
              </Link>
            </div>
          </aside>

          <div className="category-main">
            <div className="category-toolbar">
              <div className="results-count">Showing {engineProducts.length} of 86 engine parts</div>
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
              {engineProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.badge && <div className="product-badge">{product.badge}</div>}
                  <div className="product-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                    <button className="quick-view">Quick View</button>
                  </div>
                  <div className="product-info">
                    <h3><Link to={`/product-engine-${product.id}`}>{product.name}</Link></h3>
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
                      <button className="btn-add-to-cart"><Link to ="/contact"> Get a Quote </Link></button>
                      <button className="btn-wishlist" aria-label="Add to wishlist">
                        ♡
                      </button>
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

export default Engine;