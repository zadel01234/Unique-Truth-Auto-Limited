// import React, { useState, useEffect } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import "./NavBar.css";

// const NavBar = () => {
//   const [activeLink, setActiveLink] = useState('/');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   // Update active link when location changes
//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location]);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <header className="navbar">
//       <div className="container">
//         {/* Logo */}
//         <div className="logo-container">
//           <Link to="/" className="logo">
//             <span className="company-name">Unique Truth Auto Limited</span>
//           </Link>
//         </div>

//         {/* Hamburger (now separate) */}
//         <button 
//           className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
//           aria-label="Toggle navigation"
//           onClick={toggleMobileMenu}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         {/* Nav links */}
//         <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Main navigation">
//           <Link 
//             to="/" 
//             className={activeLink === '/' ? 'active' : ''}
//             onClick={closeMobileMenu}
//           >
//             Home
//           </Link>
//           <Link 
//             to="/category" 
//             className={activeLink.startsWith('/category') ? 'active' : ''}
//             onClick={closeMobileMenu}
//           >
//             Category
//           </Link>
//           <Link 
//             to="/about" 
//             className={activeLink.startsWith('/about') ? 'active' : ''}
//             onClick={closeMobileMenu}
//           >
//             About Us
//           </Link>
//           <Link 
//             to="/contact" 
//             className={activeLink.startsWith('/contact') ? 'active' : ''}
//             onClick={closeMobileMenu}
//           >
//             Contact
//           </Link>
//           <Link 
//             to="/product" 
//             className={activeLink.startsWith('/product') ? 'active' : ''}
//             onClick={closeMobileMenu}
//           >
//             Products
//           </Link>

//           <form action="/search" method="get" className="search-form" role="search">
//             <label htmlFor="search" className="sr-only">Search products</label>
//             <input
//               type="text"
//               id="search"
//               name="q"
//               placeholder="Search parts..."
//               autoComplete="off"
//             />
//             <button type="submit" aria-label="Search">
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
//                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//               </svg>
//             </button>
//             <div className="search-suggestions"></div>
//           </form>
//         </nav>
//       </div>
      
//       {/* Mobile menu overlay */}
//       <div 
//         className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
//         onClick={closeMobileMenu}
//       ></div>
//     </header>
//   );
// };

// export default NavBar;



// import React, { useState, useEffect } from 'react';
// import { useLocation, Link, useNavigate } from 'react-router-dom';
// import "./NavBar.css";

// const NavBar = () => {
//   const [activeLink, setActiveLink] = useState('/');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Update active link when location changes
//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location]);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
//       setSearchQuery("");
//       closeMobileMenu();
//     }
//   };

//   return (
//     <header className="navbar">
//       <div className="container">
//         {/* Logo */}
//         <div className="logo-container">
//           <Link to="/" className="logo">
//             <span className="company-name">Unique Truth Auto Limited</span>
//           </Link>
//         </div>

//         {/* Hamburger */}
//         <button 
//           className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
//           aria-label="Toggle navigation"
//           onClick={toggleMobileMenu}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         {/* Nav links */}
//         <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Main navigation">
//           <Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={closeMobileMenu}>Home</Link>
//           <Link to="/category" className={activeLink.startsWith('/category') ? 'active' : ''} onClick={closeMobileMenu}>Category</Link>
//           <Link to="/about" className={activeLink.startsWith('/about') ? 'active' : ''} onClick={closeMobileMenu}>About Us</Link>
//           <Link to="/contact" className={activeLink.startsWith('/contact') ? 'active' : ''} onClick={closeMobileMenu}>Contact</Link>
//           <Link to="/product" className={activeLink.startsWith('/product') ? 'active' : ''} onClick={closeMobileMenu}>Products</Link>

//           {/* Search bar */}
//           <form onSubmit={handleSearchSubmit} className="search-form" role="search">
//             <label htmlFor="search" className="sr-only">Search products</label>
//             <input
//               type="text"
//               id="search"
//               name="q"
//               placeholder="Search parts..."
//               autoComplete="off"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button type="submit" aria-label="Search">
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
//                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//               </svg>
//             </button>
//           </form>
//         </nav>
//       </div>

//       {/* Mobile menu overlay */}
//       <div 
//         className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
//         onClick={closeMobileMenu}
//       ></div>
//     </header>
//   );
// };

// export default NavBar;


// import React, { useState, useEffect } from 'react';
// import { useLocation, Link, useNavigate } from 'react-router-dom';
// import database from '../../Data/Database'; // product list
// import "./NavBar.css";

// const NavBar = () => {
//   const [activeLink, setActiveLink] = useState('/');
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setActiveLink(location.pathname);
//   }, [location]);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
//   const closeMobileMenu = () => setIsMobileMenuOpen(false);

//   // filter as user types
//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     if (query.trim() === "") {
//       setFilteredProducts([]);
//       return;
//     }

//     const results = database.filter((p) =>
//       p.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(results);
//   };

//   // when clicking a suggestion
//   const handleSelectProduct = (database) => {
//     setSearchQuery(""); // clear search
//     setFilteredProducts([]); // hide dropdown
//     closeMobileMenu();
//     navigate(`/category/${database.category.toLowerCase()}`);
//   };

//   return (
//     <header className="navbar">
//       <div className="container">
//         {/* Logo */}
//         <div className="logo-container">
//           <Link to="/" className="logo">
//             <span className="company-name">Unique Truth Auto Limited</span>
//           </Link>
//         </div>

//         {/* Hamburger */}
//         <button 
//           className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
//           aria-label="Toggle navigation"
//           onClick={toggleMobileMenu}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         {/* Nav links */}
//         <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Main navigation">
//           <Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={closeMobileMenu}>Home</Link>
//           <Link to="/category" className={activeLink.startsWith('/category') ? 'active' : ''} onClick={closeMobileMenu}>Category</Link>
//           <Link to="/about" className={activeLink.startsWith('/about') ? 'active' : ''} onClick={closeMobileMenu}>About Us</Link>
//           <Link to="/contact" className={activeLink.startsWith('/contact') ? 'active' : ''} onClick={closeMobileMenu}>Contact</Link>
//           <Link to="/product" className={activeLink.startsWith('/product') ? 'active' : ''} onClick={closeMobileMenu}>Products</Link>

//           {/* Search bar with dropdown */}
          
//           <div className="search-form" >
//             <input
//               type="text"
//               placeholder="Search parts..."
//               autoComplete="off"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//             <button type="button" aria-label="Search">
//               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
//                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//               </svg>
//             </button>

//             {filteredProducts.length > 0 && (
//               <ul className="search-dropdown">
//                 {filteredProducts.map((database) => (
//                   <li key={database.id} onClick={() => handleSelectProduct(database)}>
//                     {database.name} <span className="category">({database.category})</span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </nav>
//       </div>

//       {/* Mobile menu overlay */}
//       <div 
//         className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
//         onClick={closeMobileMenu}
//       ></div>
//     </header>
//   );
// };

// export default NavBar;

import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import database from '../../Data/Database'; // product list
import "./NavBar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null); // 🔹 reference to search wrapper

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // filter as user types
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const results = database.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(results);
  };

  // when clicking a suggestion
  const handleSelectProduct = (database) => {
    setSearchQuery(""); // clear search
    setFilteredProducts([]); // hide dropdown
    closeMobileMenu();
    navigate(`/category/${database.category.toLowerCase()}`);
  };

  // 🔹 Hide dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setFilteredProducts([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="logo">
            <span className="company-name">Unique Truth Auto Limited</span>
          </Link>
        </div>

        {/* Hamburger */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          aria-label="Toggle navigation"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav links */}
        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} aria-label="Main navigation">
          <Link to="/" className={activeLink === '/' ? 'active' : ''} onClick={closeMobileMenu}>Home</Link>
          <Link to="/category" className={activeLink.startsWith('/category') ? 'active' : ''} onClick={closeMobileMenu}>Category</Link>
          <Link to="/about" className={activeLink.startsWith('/about') ? 'active' : ''} onClick={closeMobileMenu}>About Us</Link>
          <Link to="/contact" className={activeLink.startsWith('/contact') ? 'active' : ''} onClick={closeMobileMenu}>Contact</Link>
          {/* <Link to="/product" className={activeLink.startsWith('/product') ? 'active' : ''} onClick={closeMobileMenu}>Products</Link> */}

          {/* Search bar with dropdown */}
          <div className="search-form" ref={searchRef}>
            <input
              type="text"
              placeholder="Search parts..."
              autoComplete="off"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="button" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>

            {filteredProducts.length > 0 && (
              <ul className="search-dropdown">
                {filteredProducts.map((product) => (
                  <li key={product.id} onClick={() => handleSelectProduct(product)}>
                    {product.name} <span className="category">({product.category})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>
    </header>
  );
};

export default NavBar;
