import React, { useState, useRef } from "react";
import "./Contact.css";
import iconaddress from "../../images/logo.avif";
import iconphone from "../../images/logo.avif";
import iconemail from "../../images/logo.avif";
import support from "../../images/support.webp";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Parts Inquiry",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Unique Truth Auto Limited",
          from_email: form.email,
          to_email: "uniquetruthautolimited@gmail.com",
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("✅ Thank you. We will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            phone: "",
            subject: "Parts Inquiry",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help with all your tractor parts needs</p>
        </div>
      </section>

      {/* Main Section */}
      <main className="container">
        <div className="contact-layout">
          {/* Contact Form */}
          <section className="contact-form-section">
            <h2>Send Us a Message</h2>
            <form
              className="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What is your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What is your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Phone</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Telephone No"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option>Parts Inquiry</option>
                  <option>Technical Support</option>
                  <option>Order Status</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to get a Quote for?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <aside className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <address>
                <div className="info-item">
                  <img src={iconaddress} alt="Address" />
                  <span>12 Industrial Avenue, Ikeja, Lagos</span>
                </div>
                <div className="info-item">
                  <img src={iconphone} alt="Phone" />
                  <span>
                    <a href="tel:+2348021234567">0802 123 4567</a>
                  </span>
                </div>
                <div className="info-item">
                  <img src={iconemail} alt="Email" />
                  <span>
                    <a href="mailto:info@uniquetruthautolimited.com">
                      info@uniquetruthautolimited.com
                    </a>
                  </span>
                </div>
              </address>
            </div>

            <div className="hours-card">
              <h3>Business Hours</h3>
              <ul className="hours-list">
                <li>
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </li>
                <li>
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>

            <div className="emergency-card">
              <h3>Emergency Support</h3>
              <p>For urgent parts needs outside business hours:</p>
              <a href="tel:+2348034567890" className="emergency-phone">
                <img src={support} alt="Support" />
                0803 456 7890
              </a>
            </div>
          </aside>
        </div>

        {/* Map Section */}
        <section className="contact-map">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.341622029645!2d3.349345315393755!3d6.601840495224047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9237ef9e8e3d%3A0x9e7e5b2a4e4e4e4e!2sIndustrial%20Avenue%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </section>
      </main>

      {/* Back to top button */}
      <button id="back-to-top" aria-label="Back to top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default Contact;
