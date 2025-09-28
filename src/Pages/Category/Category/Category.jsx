import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import { useParams } from "react-router-dom";
import "./Categor.css";
import "./Style.css";

import hydraulics from "../../../images/hydraulics.webp";
import tires from "../../../images/tires.webp";
import engine from "../../../images/engine.webp";
import electrical from "../../../images/electrical.jpeg";


const Category = () => {
  useEffect(() => {
      document.title = "Categories | Unique Truth Auto "; // 👈 change tab title here
    }, []);

  // const { categoryName } = useParams();

  const categories = [
    {
      id: 1,
      name: "Engine Parts",
      image: engine,
      description: "Complete range of engine components including filters, pistons, gaskets and more for optimal tractor performance.",
      features: ["Oil & Air Filters", "Gaskets & Seals", "Fuel System Parts"],
      link: "/category/engine"
    },
    {
      id: 2,
      name: "Tires & Wheels",
      image: tires,
      description: "Durable tires and wheels designed for agricultural use in all terrain conditions.",
      features: ["Rear & Front Tires", "Wheel Rims", "Tire Tubes"],
      link: "/category/tires"
    },
    {
      id: 3,
      name: "Hydraulic Systems",
      image: hydraulics,
      description: "High-performance hydraulic components for smooth tractor operations.",
      features: ["Pumps & Valves", "Cylinders", "Hoses & Fittings"],
      link: "/category/hydraulics"
    },
    {
      id: 4,
      name: "Electrical Parts",
      image: electrical,
      description: "Reliable electrical components to keep your tractor's systems running smoothly.",
      features: ["Batteries & Alternators", "Switches & Sensors", "Wiring Harnesses"],
      link: "/category/electrical"
    }
  ];

  return (
    <div className="category-pag">
      <main className="container">
        <section className="category-her">
          <h1>Our Product Categories</h1>
          <p>Premium quality tractor parts for all major brands</p>
        </section>

        <nav className="breadcrumb">
          <Link to="/" style={{textDecoration: "none", color: "#000"}}>Home</Link>
          <span>/</span>
          <span>Product Categories</span>
        </nav>

        

        <div className="all-categorie"
          style={{display: "grid, grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) , gap: 2rem, margin: 3rem 0"}}
        >
          {categories.map(category => (
            <div key={category.id} className="category-card">
              <div className="category-imag">
                <Link to={category.link} >                
                  <img src={category.image} alt={category.name} loading="lazy" />
                  <div className="category-overla"></div>
                </Link>
              </div>
              <div className="category-conten">
                <h2 style={{paddingBottom: "1rem"}}><Link to={category.link}>{category.name}</Link></h2>
                <p style={{paddingBottom: "1rem"}}>{category.description}</p>
                <ul className="category-feature" style={{paddingBottom: "1rem"}}>
                  {category.features.map((feature, index) => (
                    <li key={index}>
                      <span>✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <Link to={category.link} className="btn btn-primary">
                  Browse {category.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <section className="category-suppor">
          <div className="support-car">
            <span>📞</span>
            <h3>Need Help Choosing Parts?</h3>
            <p>Our tractor specialists can help you find the right components for your equipment.</p>
            <Link to="/contact" className="btn btn-outline">Contact Our Experts</Link>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Category;