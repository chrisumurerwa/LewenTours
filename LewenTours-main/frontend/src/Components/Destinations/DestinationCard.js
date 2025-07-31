import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({ destin }) => {
  return (
    <div className="destination_card">
      <div className="dest_image">
        <img src={destin.dest_image} alt="" />
      </div>
      <div className="dest_content">
        <h3>{destin.category}</h3>
        <h2>{destin.title}</h2>
        <p>{ destin.body }</p>
        <Link 
            to={ `/traveldetails/${destin.dest_details.link}`} 
            className="submit_button"
            state={{
              travel_title:destin.title,
              travel_image:destin.dest_image,
              travel_details:destin.dest_details
              }}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
