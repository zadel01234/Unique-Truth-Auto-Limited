import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import "./Tires.css";
import rearTire from "../../../images/rear_tire.jpg";
import frontTire from "../../../images/front_tire.jpg";
import Tire from "../../../images/tires.webp";


const Tires = () => {
  useEffect(() => {
        document.title = "Tires Categories | Unique Truth Auto "; // 👈 change tab title here
      }, []);




  const [filters, setFilters] = useState({
    type: ['rear-tire', 'front-tire', 'wheel', 'tube'],
    size: ['small', 'medium', 'large'],
    brand: ['john-deere', 'massey-ferguson', 'kubota'],
    priceRange: 300000
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
      type: ['rear-tire', 'front-tire', 'wheel', 'tube'],
      size: ['small', 'medium', 'large'],
      brand: ['john-deere', 'massey-ferguson', 'kubota'],
      priceRange: 300000
    });
  };

  const tiresProducts = [
    {
      id: 1,
      name: "Rear Tractor Tire 13.6-28",
      image: rearTire,
      compatibility: "Fits most 50-75HP tractors",
      currentPrice: 165000,
      originalPrice: 180000,
      rating: 5,
      reviews: 37,
      badge: "Best Seller",
      type: "rear-tire",
      size: "medium"
    },
    {
      id: 2,
      name: "Front Tractor Tire 7.50-16",
      image: frontTire,
      compatibility: "Fits John Deere 5055D, 5060E",
      currentPrice: 85000,
      originalPrice: 95000,
      rating: 4,
      reviews: 24,
      badge: "New Arrival",
      type: "front-tire",
      size: "small"
    },
    {
      id: 3,
      name: "Heavy Duty Tractor Wheel",
      image: Tire,
      compatibility: "Fits Massey Ferguson 265, 275",
      currentPrice: 45000,
      originalPrice: 52000,
      rating: 4,
      reviews: 18,
      type: "wheel",
      size: "medium"
    },
    {
      id: 4,
      name: "Premium Tire Tube",
      image: frontTire,
      compatibility: "For 13.6-28 tires",
      currentPrice: 15000,
      originalPrice: 18000,
      rating: 4,
      reviews: 22,
      type: "tube",
      size: "medium"
    },
    {
      id: 5,
      name: "Large Rear Tire 18.4-34",
      image: Tire,
      compatibility: "Fits heavy-duty tractors",
      currentPrice: 245000,
      originalPrice: 275000,
      rating: 5,
      reviews: 15,
      badge: "Premium",
      type: "rear-tire",
      size: "large"
    },
    {
      id: 6,
      name: "Front Tire 6.00-12",
      image: frontTire,
      compatibility: "Fits compact tractors",
      currentPrice: 48000,
      originalPrice: 55000,
      rating: 4,
      reviews: 12,
      type: "front-tire",
      size: "small"
    },
    {
      id: 7,
      name: "Steel Wheel Rim",
      image: rearTire,
      compatibility: "Universal fit for various tractors",
      currentPrice: 32000,
      originalPrice: 38000,
      rating: 4,
      reviews: 19,
      type: "wheel",
      size: "medium"
    },
    {
      id: 8,
      name: "Heavy Duty Tube",
      image: Tire,
      compatibility: "For large tractor tires",
      currentPrice: 22000,
      originalPrice: 26000,
      rating: 4,
      reviews: 8,
      type: "tube",
      size: "large"
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
    <div className="category-tires">
      <main className="container">
        <section 
          className="category-hero" 
        //   style={{ 
        //     backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('images/tires-hero-bg.jpg')" 
        //   }}
        >
          <h1>Tires & Wheels</h1>
          <p>Durable tires and wheels designed for agricultural use in all terrain conditions</p>
        </section>

        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/category">Categories</Link>
          <span>/</span>
          <span>Tires & Wheels</span>
        </nav>

        <div className="category-content">
          <aside className="category-sidebar">
            <div className="sidebar-widget">
              <h3>Filter Products</h3>
              
              <div className="filter-section">
                <h4>Tire Type</h4>
                <ul className="filter-list">
                  {['rear-tire', 'front-tire', 'wheel', 'tube'].map(type => (
                    <li key={type}>
                      <label>
                        <input 
                          type="checkbox" 
                          name="type" 
                          value={type}
                          checked={filters.type.includes(type)}
                          onChange={() => handleFilterChange('type', type)}
                        /> 
                        {type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}s
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-section">
                <h4>Tire Size</h4>
                <ul className="filter-list">
                  {['small', 'medium', 'large'].map(size => (
                    <li key={size}>
                      <label>
                        <input 
                          type="checkbox" 
                          name="size" 
                          value={size}
                          checked={filters.size.includes(size)}
                          onChange={() => handleFilterChange('size', size)}
                        /> 
                        {size.charAt(0).toUpperCase() + size.slice(1)} {size === 'small' ? '(Under 12")' : size === 'medium' ? '(12"-28")' : '(28"+)'}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="filter-section">
                <h4>Brand Compatibility</h4>
                <ul className="filter-list">
                  {['john-deere', 'massey-ferguson', 'kubota'].map(brand => (
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
                    max="300000" 
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
              <h3>Tire Installation</h3>
              <p>We offer professional tire installation services at our Lagos workshop.</p>
              <Link to="/contact" className="btn btn-outline">
                <span>🔧</span> Schedule Installation
              </Link>
            </div>
          </aside>

          <div className="category-main">
            <div className="category-toolbar">
              <div className="results-count">Showing {tiresProducts.length} of 32 products</div>
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
              {tiresProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.badge && <div className="product-badge">{product.badge}</div>}
                  <div className="product-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <h3><Link to={`/product-tires-${product.id}`}>{product.name}</Link></h3>
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
                      <button className="btn-add-to-cart">Add to Cart</button>
                      
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

export default Tires;