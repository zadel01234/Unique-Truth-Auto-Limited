import React from 'react'
import './Footer.css'
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
                            <a href="/" className="footer-logo">
                            <img
                                src={logo}
                                alt="Unique Truth Auto Limited"
                                width="60"
                                height="60"
                                className="logo-img"
                            />
                            </a>
                            <p>
                            Nigeria's trusted supplier of quality tractor parts and
                            agricultural equipment since 1998.
                            </p>
                            {/* <div className="footer-social">
                            <a href="#" aria-label="Facebook">FB</a>
                            <a href="#" aria-label="Twitter">TW</a>
                            <a href="#" aria-label="Instagram">IG</a>
                            <a href="#" aria-label="WhatsApp">WA</a>
                            </div> */}
                            <div className="footer-social">
                                <a href="#" aria-label="Facebook">
                                    <FaFacebook />
                                </a>
                                <a href="#" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a href="#" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="#" aria-label="WhatsApp">
                                    <FaWhatsapp />
                                </a>
                            </div>

                        </div>

                        <div className="footer-col">
                            <h3>Shop</h3>
                            <ul>
                            <li><a href="/category/engine">Engine Parts</a></li>
                            <li><a href="/category/tires">Tires & Wheels</a></li>
                            <li><a href="/category/hydraulics">Hydraulic Systems</a></li>
                            <li><a href="/category/electrical">Electrical Parts</a></li>
                            <li><a href="/category/implements">Implements</a></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h3>Company</h3>
                            <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/terms">Terms & Conditions</a></li>
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
                        <div className="payment-methods">
                            <FaCcVisa title="Visa" />
                            <FaCcMastercard title="Mastercard" />
                            <FaCreditCard title="Verve" />
                            <FaUniversity title="Bank Transfer" />
                            <FaMoneyBillWave title="Cash on Delivery" />
                        </div>
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
