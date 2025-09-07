import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Electrical.css";

import electrical from "../../../images/electrical.jpeg"
import Battery from "../../../images/battery.webp"

const Electrical = () => {
  useEffect(() => {
      document.title = "Electrical Categories | Unique Truth Auto "; // 👈 change tab title here
    }, []);



  const [filters, setFilters] = useState({
    type: ['alternator', 'starter', 'battery', 'switch', 'wiring'],
    brand: ['john-deere', 'massey-ferguson', 'kubota', 'new-holland'],
    voltage: ['12v', '24v', '6v'],
    priceRange: 100000
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
      type: ['alternator', 'starter', 'battery', 'switch', 'wiring'],
      brand: ['john-deere', 'massey-ferguson', 'kubota', 'new-holland'],
      voltage: ['12v', '24v', '6v'],
      priceRange: 100000
    });
  };

  const electricalProducts = [
    {
      id: 1,
      name: "Heavy Duty Alternator",
      image: electrical,
      compatibility: "Fits John Deere 5055D, 5060E",
      rating: 4,
      reviews: 32,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "High Torque Starter Motor",
      image: electrical,
      compatibility: "Fits Massey Ferguson 265, 275",
      rating: 5,
      reviews: 21,
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "Heavy Duty Tractor Battery",
      image: Battery,
      compatibility: "Fits Kubota L2501, L3301",
      rating: 4,
      reviews: 15
    },
    {
      id: 4,
      name: "Light Switch Assembly",
      image: Battery,
      compatibility: "Fits New Holland TT4.75",
      rating: 3,
      reviews: 8
    },
    {
      id: 5,
      name: "Complete Wiring Harness",
      image: electrical,
      compatibility: "Fits John Deere 5055D",
      rating: 4,
      reviews: 11,
      badge: "Limited Stock"
    },
    {
      id: 6,
      name: "Fuse Box Assembly",
      image: Battery,
      compatibility: "Fits Massey Ferguson 265",
      rating: 3,
      reviews: 6
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

  return (
    <div>
      <main className="container">
        <section 
          className="category-hero" 
          // style={{ 
          //   backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../../images/tractor_bg.webp')" 
          // }}
        >
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
                          name="type" 
                          value={type}
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
                <h4>Voltage</h4>
                <ul className="filter-list">
                  {['12v', '24v', '6v'].map(voltage => (
                    <li key={voltage}>
                      <label>
                        <input 
                          type="checkbox" 
                          name="voltage" 
                          value={voltage}
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
              <div className="results-count">Showing {electricalProducts.length} of 72 electrical parts</div>
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
              {electricalProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.badge && <div className="product-badge">{product.badge}</div>}
                  <div className="product-image">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className="product-info">
                    <h3><Link to={`/product-electrical-${product.id}`}>{product.name}</Link></h3>
                    <p className="product-compatibility">{product.compatibility}</p>
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
                    <div className="product-actions">
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

export default Electrical;