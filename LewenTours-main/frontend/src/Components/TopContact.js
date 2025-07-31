import React from 'react';
import { LINKS } from '../Constants/links';

const TopContact = () => {
  return (
    <section className="contact-header">
      <h2>Contact</h2>
      <div className="top-contacts">
            <a href={ LINKS.INSTAGRAM } target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a href= { LINKS.YOUTUBE } target="_blank" rel="noreferrer">
                <i class="fa-brands fa-youtube"></i>
            </a>
            <a href={ LINKS.FACEBOOK } target="_blank" rel="noreferrer">
                <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href={ LINKS.X_TWITTER }>
                <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href={ LINKS.WHATSAPP_2 }>
                <i class="fa-brands fa-whatsapp"></i>
            </a>
      </div>
    </section>
  );
}

export default TopContact