import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom"
// import "../../Pages/Index/Index.css"
import { FaCcVisa, FaCcMastercard, FaCreditCard, FaUniversity, FaMoneyBillWave } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

import logo from "../../images/logo.avif"

const Footer = () => {
  return (
    <div>
        {/* <!-- Footer --> */}
        <div>
            <footer className="footer">
                    <div className="container">
                        <div className="footer-grid">
                        <div className="footer-col footer-about">
                            <Link to="/" className="footer-logo">
                            <img
                                src={logo}
                                alt="Unique Truth Auto Limited"
                                width="60"
                                height="60"
                                className="logo-img"
                            />
                            </Link>
                            <p>
                            Nigeria's trusted supplier of quality tractor parts and
                            agricultural equipment since 1998.
                            </p>
                            {/* <div className="footer-social">
                            <Link to="#" aria-label="Facebook">FB</Link>
                            <Link to="#" aria-label="Twitter">TW</Link>
                            <Link to="#" aria-label="Instagram">IG</Link>
                            <Link to="#" aria-label="WhatsApp">WA</Link>
                            </div> */}
                            <div className="footer-social">
                                <Link to="#" aria-label="Facebook">
                                    <FaFacebook />
                                </Link>
                                <Link to="#" aria-label="Twitter">
                                    <FaTwitter />
                                </Link>
                                <Link to="#" aria-label="Instagram">
                                    <FaInstagram />
                                </Link>
                                <Link to="#" aria-label="WhatsApp">
                                    <FaWhatsapp />
                                </Link>
                            </div>

                        </div>

                        <div className="footer-col">
                            <h3>Shop</h3>
                            <ul>
                            <li><Link to="/category/engine">Engine Parts</Link></li>
                            <li><Link to="/category/tires">Tires & Wheels</Link></li>
                            <li><Link to="/category/hydraulics">Hydraulic Systems</Link></li>
                            <li><Link to="/category/electrical">Electrical Parts</Link></li>
                            <li><Link to="/category/implements">Implements</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Company</h3>
                            <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            {/* <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/terms">Terms & Conditions</Link></li> */}
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Contact Info</h3>
                            <address>
                            <p>📍 12 Industrial Avenue, Ikeja, Lagos</p>
                            <p>📞 <a href="tel:+2348021234567">0802 123 4567</a></p>
                            <p>✉️ <a href="mailto:info@uniquetruthautolimited.com">info@uniquetruthautolimited.com</a></p>
                            <p>🕒 Mon-Fri: 8am - 6pm, Sat: 9am - 4pm</p>
                            </address>
                        </div>
                        </div>

                        <div className="footer-bottom">
                        {/* <div className="payment-methods">
                            <FaCcVisa title="Visa" />
                            <FaCcMastercard title="Mastercard" />
                            <FaCreditCard title="Verve" />
                            <FaUniversity title="Bank Transfer" />
                            <FaMoneyBillWave title="Cash on Delivery" />
                        </div> */}
                        {/* <div className="payment-method">
                            <span title="Visa">Visa</span>
                            <span title="Mastercard">Mastercard</span>
                            <span title="Verve">Verve</span>
                            <span title="Bank Transfer">Bank</span>
                            <span title="Cash on Delivery">Cash</span>
                        </div> */}


                        <div className="copyright">
                            <p>&copy; 2025 Unique Truth Auto Limited. All rights reserved.</p>
                        </div>
                        </div>
                    </div>
            </footer>
        </div>
    </div>
  )
}

export default Footer
