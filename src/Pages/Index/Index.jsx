import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Index.css";
import delivery from "../../images/delivery.avif";
import shipping from "../../images/shipping.jpg";
import support from "../../images/support.jpg";
// import logo from "../../images/logo.avif";
import tractorhero from "../../images/tractor-hero.avif";
import Two from "../../images/2.jpg";
import One from "../../images/1.jpg";
import warehouse from "../../images/warehouse.jpg";
import checkmark from "../../images/checkmark.jpg";
import price from "../../images/price.jpg";
import quality from "../../images/quality.jpg";
import reartire from "../../images/rear_tire.jpg";
import engineoilfilter from "../../images/engine_oil_filter.webp";
import implement from "../../images/implements.webp";
import hydraulics from "../../images/hydraulics.webp";
import tires from "../../images/tires.webp";
import engine from "../../images/engine.webp";

const Index = () => {
  useEffect(() => {
      document.title = "Unique Truth Auto Limited"; // 👈 change tab title here
    }, []);



  const featuredProducts = [
    {
      id: 1,
      name: "Diesel Engine Oil Filter",
      image: engineoilfilter,
      compatibility: "Compatible with John Deere, Massey Ferguson",
      rating: 4,
      reviews: 24,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Rear Tractor Tire 13.6-28",
      image: reartire,
      compatibility: "Fits most 50-75HP tractors",
      rating: 5,
      reviews: 37,
      badge: "New Arrival"
    },
    {
      id: 3,
      name: "Hydraulic Pump Assembly",
      image: hydraulics,
      compatibility: "John Deere 5055D, 5060E",
      rating: 4,
      reviews: 18,
      badge: "Top Rated"
    },
    {
      id: 4,
      name: "Plough Implement",
      image: implement,
      compatibility: "Universal 3-point hitch",
      rating: 4,
      reviews: 22,
      badge: "Best Seller"
    },
    {
      id: 5,
      name: "Front Tractor Tire",
      image: tires,
      compatibility: "Fits most utility tractors",
      rating: 4,
      reviews: 15
    },
    {
      id: 6,
      name: "Engine Gasket Set",
      image: engine,
      compatibility: "Massey Ferguson 265, 275",
      rating: 5,
      reviews: 29,
      badge: "New Arrival"
    },
    {
      id: 7,
      name: "Plough Implement",
      image: implement,
      compatibility: "Universal 3-point hitch",
      rating: 4,
      reviews: 22,
      badge: "Best Seller"
    },
    {
      id: 8,
      name: "Front Tractor Tire",
      image: tires,
      compatibility: "Fits most utility tractors",
      rating: 4,
      reviews: 15
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
    <div className="home">
      {/* Hero section with call-to-action */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Your Trusted Source for Tractor Parts in Nigeria</h1>
            <p className="hero-subtitle">
              Premium quality parts for all major tractor brands with nationwide
              delivery
            </p>
            <div className="hero-cta">
              <Link to="/category" className="btn btn-primary">Shop Now</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Our Experts</Link>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="trust-badges">
          <div className="trust-item">
            <img src={delivery} alt="Fast delivery" width="40" height="40" />
            <span>Fast Nationwide Delivery</span>
          </div>
          <div className="trust-item">
            <img src={shipping} alt="Original parts" width="40" height="40" />
            <span>Genuine Parts Guarantee</span>
          </div>
          <div className="trust-item">
            <img src={support} alt="24/7 support" width="40" height="40" />
            <span>Expert Support</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main id="main-content" className="container">
        {/* Shop by category section */}
        <section className="category-section">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <Link to="/category" className="view-all">View All Categories</Link>
          </div>

          <div className="categories">
            <Link to="/category/engine" className="category-card">
              <div className="category-image">
                <img src={engine} alt="Engine Parts" width="300" height="200" loading="lazy" />
              </div>
              <div className="category-info">
                <h3>Engine Parts</h3>
                <p className="category-count">125+ products</p>
              </div>
            </Link>

            <Link to="/category/tires" className="category-card">
              <div className="category-image">
                <img src={tires} alt="Tires & Wheels" width="300" height="200" loading="lazy" />
              </div>
              <div className="category-info">
                <h3>Tires & Wheels</h3>
                <p className="category-count">80+ products</p>
              </div>
            </Link>

            <Link to="/category/hydraulics" className="category-card">
              <div className="category-image">
                <img src={hydraulics} alt="Hydraulics" width="300" height="200" loading="lazy" />
              </div>
              <div className="category-info">
                <h3>Hydraulics</h3>
                <p className="category-count">65+ products</p>
              </div>
            </Link>

            <Link to="/category?cat=implements" className="category-card">
              <div className="category-image">
                <img src={implement} alt="Implements" width="300" height="200" loading="lazy" />
              </div>
              <div className="category-info">
                <h3>Implements</h3>
                <p className="category-count">90+ products</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured products section */}
        <section className="featured-products">
          <div className="section-header">
            <h2>Featured Products</h2>
            <Link to="/category" className="view-all">View All Products</Link>
          </div>

          <div className="product-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                {product.badge && <div className="product-badge">{product.badge}</div>}
                <div className="product-image">
                  <img src={product.image} alt={product.name} width="300" height="200" loading="lazy" />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-compatibility">{product.compatibility}</p>
                  <div className="product-rating">
                    {renderStars(product.rating)}
                    <span className="rating-count">({product.reviews})</span>
                  </div>
                  <div className="product-quote">
                    <Link 
                      to={`/contact?product=${encodeURIComponent(product.name)}`} 
                      className="btn-get-quote"
                    >
                      Get a Quote
                    </Link>
                  </div>
                  {/* <div className="product-actions">
                    <button className="btn-add-to-cart">Add to Cart</button>
                    <button className="btn-wishlist" aria-label="Add to wishlist">
                      ♡
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why choose us section */}
        <section className="benefits-section">
          <h2 className="section-title">Why Choose Unique Truth Auto Limited?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <img src={quality} alt="Quality icon" width="60" height="60" />
              <h3>Premium Quality Parts</h3>
              <p>
                We source only the highest quality parts that meet or exceed OEM
                specifications.
              </p>
            </div>

            <div className="benefit-card">
              <img src={delivery} alt="Delivery icon" width="60" height="60" />
              <h3>Fast Delivery</h3>
              <p>
                Same-day dispatch for Lagos orders, nationwide delivery within 3-5
                working days.
              </p>
            </div>

            <div className="benefit-card">
              <img src={price} alt="Price icon" width="60" height="60" />
              <h3>Competitive Pricing</h3>
              <p>Direct-from-factory prices with no middleman markups.</p>
            </div>

            <div className="benefit-card">
              <img src={support} alt="Support icon" width="60" height="60" />
              <h3>Expert Support</h3>
              <p>
                Our team of tractor specialists can help you find the right part
                for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* About us section */}
        <section className="about-section">
          <div className="about-content">
            <h2>About Unique Truth Auto Limited</h2>
            <h3>With Over 25 Years' Experience in Agricultural Parts</h3>
            <p>
              We are Nigeria's leading independent distributor of agricultural
              tractor spare parts and accessories, serving farmers and mechanics
              across the country since 1998.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">15,000+</span>
                <span className="stat-label">Parts in Stock</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5,000+</span>
                <span className="stat-label">Satisfied Customers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">36</span>
                <span className="stat-label">States Covered</span>
              </div>
            </div>

            <div className="about-features">
              <div className="feature-item">
                <img src={checkmark} alt="Checkmark" width="20" height="20" />
                <span>Genuine and aftermarket parts available</span>
              </div>
              <div className="feature-item">
                <img src={checkmark} alt="Checkmark" width="20" height="20" />
                <span>Technical support for all products</span>
              </div>
              <div className="feature-item">
                <img src={checkmark} alt="Checkmark" width="20" height="20" />
                <span>Bulk order discounts available</span>
              </div>
            </div>

            <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
          </div>
          <div className="about-image">
            <img
              src={warehouse}
              alt="Our parts warehouse"
              width="600"
              height="400"
              loading="lazy"
            />
            <div className="experience-badge">
              <span>25+ Years</span>
              <span>Experience</span>
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="testimonials-section">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Found the exact hydraulic pump I needed for my Massey Ferguson
                when no one else could help. Delivered to Abeokuta in just 2
                days!"
              </p>
              <div className="testimonial-author">
                <img src={One} alt="Customer" width="50" height="50" />
                <div>
                  <p className="author-name">Oluwaseun Adebayo</p>
                  <p className="author-location">Farm Owner, Ogun State</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★☆</div>
              <p className="testimonial-text">
                "Their prices are very competitive compared to other suppliers in
                Lagos. I've saved over ₦200,000 on parts this year alone."
              </p>
              <div className="testimonial-author">
                <img src={Two} alt="Customer" width="50" height="50" />
                <div>
                  <p className="author-name">Chinedu Okonkwo</p>
                  <p className="author-location">Mechanic, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter section */}
        <section className="newsletter-section">
          <div className="container">
            <div className="newsletter-card">
              <div className="newsletter-content">
                <div className="newsletter-header">
                  <h2 className="newsletter-title">Get Exclusive Tractor Parts Deals</h2>
                  <p className="newsletter-subtitle">Subscribe to our newsletter for:</p>
                  <ul className="newsletter-benefits">
                    <li>First access to new arrivals</li>
                    <li>Members-only discounts</li>
                    <li>Maintenance tips & farming insights</li>
                  </ul>
                </div>

                <form className="newsletter-form">
                  <div className="form-group">
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <div className="input-group">
                      <input
                        type="email"
                        id="newsletter-email"
                        placeholder="Your email address"
                        required
                        aria-label="Enter your email address"
                      />
                      <button type="submit" className="btn btn-primary">
                        <span>Subscribe</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>

                  <div className="form-agreement">
                    <input type="checkbox" id="newsletter-agree" required defaultChecked />
                    <label htmlFor="newsletter-agree">
                      I agree to receive marketing emails (unsubscribe anytime)
                    </label>
                  </div>
                </form>
              </div>

              <div className="newsletter-image">
                <div className="image-wrapper">
                  <img
                    src={tractorhero}
                    alt="Farmer checking tractor parts"
                    width="500"
                    height="350"
                    loading="lazy"
                    className="newsletter-img"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Back to top button */}
      <button id="back-to-top" aria-label="Back to top">
        ↑
      </button>

      {/* Mobile menu overlay */}
      <div className="mobile-menu-overlay"></div>
    </div>
  );
};

export default Index;