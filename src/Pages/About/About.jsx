import React from 'react'
import "./About.css"
import delivery from "../../images/delivery.avif"
import support from "../../images/support.webp"
import tractorhero from "../../images/tractor-hero.avif"
import One from "../../images/1.webp"
import quality from "../../images/quality.webp"


const About = () => {
  return (
    <div>
        <div>
        <section className="page-hero">
            <div className="container">
            <h1>About Unique Truth Auto Limited</h1>
            <p>Your trusted partner in agricultural machinery parts since 1998</p>
            </div>
        </section>

        <main className="container">
            <section className="about-story">
            <div className="story-content">
                <h2>Our Story</h2>
                <p>Founded in Lagos in 1998, Unique Truth Auto Limited began as a small supplier of tractor parts to local farmers. Today, we serve customers across all 36 states of Nigeria with the largest inventory of genuine and aftermarket agricultural parts.</p>
                <p>Our mission is to keep Nigeria's farms running with reliable parts and expert technical support.</p>
            </div>
            <div className="story-image">
                <img src={tractorhero} alt="Our first store location" />
            </div>
            </section>

            <section className="about-values">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
                <div className="value-card">
                <img src={quality} alt="Quality icon" />
                <h3>Quality Assurance</h3>
                <p>All parts undergo rigorous testing to meet OEM standards</p>
                </div>
                <div className="value-card">
                <img src={support} alt="Service icon"/>
                <h3>Customer First</h3>
                <p>24/7 support from our team of tractor specialists</p>
                </div>
                <div className="value-card">
                <img src={delivery} alt="Community icon" />
                <h3>Community Focus</h3>
                <p>Supporting local farming communities through training</p>
                </div>
            </div>
            </section>

            <section className="about-team">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-grid">
                <div className="team-member">
                <img src={One} alt="CEO" />
                <h3>Oluwaseun Adebayo</h3>
                <p>Founder & CEO</p>
                </div>
                {/* <!-- More team members --> */}
            </div>
            </section>

            <section className="about-locations">
            <h2 className="section-title">Our Locations</h2>
            <div className="location-cards">
                <div className="location-card">
                    <h3>Lagos Headquarters</h3>
                    <address>
                        12 Industrial Avenue<br />
                        Ikeja, Lagos<br />
                        <strong>Phone:</strong> 0802 123 4567
                    </address>
                    </div>
                    <div className="location-card">
                    <h3>Kano Warehouse</h3>
                    <address>
                        8 Sharada Industrial Area<br/>
                        Kano<br/>
                        <strong>Phone:</strong> 0803 456 7890
                    </address>
                </div>
            </div>
            </section>
        </main>

        {/* <!-- Back to top button --> */}
        <button id="back-to-top" aria-label="Back to top">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 15l-6-6-6 6"/>
            </svg>
        </button>

        {/* <!-- Mobile menu overlay --> */}
        <div className="mobile-menu-overlay"></div>

        {/* <!-- JavaScript --> */}
        {/* <script src="js/main.js" defer></script> */}
        
        {/* <!-- Structured data --> */}
        {/* <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "AutoPartsStore",
            "name": "Unique Truth Auto Limited",
            "image": "https://www.uniquetruthautolimited.com/images/logo.png",
            "@id": "",
            "url": "https://www.uniquetruthautolimited.com",
            "telephone": "+2348021234567",
            "address": {
            "@type": "PostalAddress",
            "streetAddress": "12 Industrial Avenue",
            "addressLocality": "Ikeja",
            "addressRegion": "Lagos",
            "postalCode": "",
            "addressCountry": "NG"
            },
            "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.6018,
            "longitude": 3.3515
            },
            "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
            },
            "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "16:00"
            }
        }
        </script> */}

        </div>
    </div>
  )
}

export default About
