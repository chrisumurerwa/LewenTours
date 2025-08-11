import React from 'react';
import NewsLetter from './Newsletter';
import { Link } from 'react-router-dom';
import { LINKS } from '../Constants/links';


function Footer() {
  return (
    <section id="footer">
      <div className="footer-links">
        <div className="categories">
          <h1 className="header">CATEGORIES</h1>
          <p>
            <Link to="/top10s">Top 10 Lists</Link>
          </p>
          <p>
            <Link to="/hotels"> Hotels</Link>
          </p>
         
          <p>
            <Link to="/apartments">Apartments</Link>
          </p>
          <p>
            <Link to="/flights">Flights</Link> 
          </p>
          <p>
            <Link to="/about">About Us</Link>
          </p>
        </div>
        <div className="newsletter_footer">
          <NewsLetter />
        </div>
        <div className="social_media">
          <h1 className="header">SOCIAL MEDIA</h1>
          <div className="social-icons">
            <a href={ LINKS.INSTAGRAM } target="_blank" rel="noreferrer">
                <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a href={ LINKS.YOUTUBE } target="_blank" rel="noreferrer">
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a href={ LINKS.FACEBOOK } target="_blank" rel="noreferrer">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href={ LINKS.X_TWITTER } target="_blank" rel="noreferrer">
                <i class="fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
        </div>
        <div className="contact_info">
          <h1 className="header">Contact Info</h1>
          <p>
            <i className="fa-solid fa-envelope"></i>
            <span>lewentours@gmail.com</span>
          </p>
          <p>
            <i class="fa-brands fa-whatsapp"></i>
            <Link to={ LINKS.WHATSAPP_1 }>+250787712266</Link>
          </p>
          <p>
            <i class="fa-brands fa-whatsapp"></i>
            <Link to={ LINKS.WHATSAPP_2 }>+254742394021</Link>
          </p>
          <p>
            <i class="fa-solid fa-location-dot"></i>
            <span>Kicukiro, Kigali KK 350 St</span>
          </p>
        </div>
      </div>
      <div className="bottom-footer">
        <span>
          <i>&copy;</i>
          <span>Lewen Tours { new Date().getFullYear() }</span>
        </span>
      </div>
    </section>
  );
}

export default Footer