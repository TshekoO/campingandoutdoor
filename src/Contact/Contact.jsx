import React, { useState } from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
      
    <div className="contact-border">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>We're open for any suggestion or just to have a chat:</p>
          <div className="info-item">
            <span>📍</span>
            <span>Address: 1905 Xaba Street, Tokoza, Gauteng, 1426</span>
          </div>
          <div className="info-item">
            <span>📞</span>
            <span>Phone: </span>
          </div>
          <div className="info-item">
            <span>✉️</span>
            <span>Email: tacitgroupza@gmail.com</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              aria-label="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              aria-label="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              aria-label="Enter your message"
            />
          </div>
          
          <center>
            <button type="submit" className="submit-button">Send Message</button>
          </center>
          <br />
        </form>
        </div>
        
        <Footer />
    </div>
    
  );
};

export default Contact;