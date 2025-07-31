import React from 'react';

const AccomodationCard = ({ accomodation }) => (
  <div className="accomodation-card">
    <div className="accomodation-image">
      <img src={accomodation.image} alt={accomodation.title} style={{ width: "250px", height: "180px", objectFit: "cover", borderRadius: "8px" }} />
    </div>
    <div className="accomodation-content">
      <h3>{accomodation.title}</h3>
      <p><strong>Location:</strong> {accomodation.location}</p>
      <p><strong>Stars:</strong> {accomodation.starsNo} | <strong>Reviews:</strong> {accomodation.reviewsNo}</p>
      <p>{accomodation.description}</p>

       <a
        href="/booking"
        className="submit_button"
        style={{ marginTop: "10px", display: "inline-block" }}
      >
        BOOK NOW
      </a>

    </div>
  </div>
);

export default AccomodationCard;