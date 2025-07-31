import React from 'react'
import { Link } from 'react-router-dom';

function RecentPost() {
  return (
    <section id="recent_posts">
      <h1 className="header">Quick Navigation</h1>
      <div className="recent_links">
        <p className="link">
          <i class="fa-regular fa-images"></i>
          <Link to="/gallery">Gallery</Link>
        </p>
        <p className="link">
          <i class="fa-solid fa-earth-africa"></i>
          <Link to="/top10s">Top Travel Lists in Rwanda</Link>
        </p>
        <p className="link">
          <i class="fa-solid fa-plane"></i>
          <Link to="/flights">Flights</Link>
        </p>
        <p className="link">
          <i class="fa-solid fa-map-location"></i>
          <Link to="/destinations">Destinations</Link>
        </p>
        <p className="link">
          <i class="fa-solid fa-hotel"></i>
          <Link to="/accomodations">Accomodations</Link>
        </p>
      </div>
    </section>
  );
}

export default RecentPost