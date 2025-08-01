import React from "react";
import { useParams } from "react-router-dom";
import all_accomodations from "../JSON/accomodations";

const AccomodationDetails = () => {
  const { id } = useParams();
  const accomodation = all_accomodations.find(a => a.id === Number(id));

  if (!accomodation) return <div>Not found</div>;

  return (
    <div className="accomodation-details">
      <h2>{accomodation.title}</h2>
      <div>
        <img src={accomodation.image} alt={accomodation.title} style={{ width: "400px", borderRadius: "8px" }} />
      </div>
      <div>
        <strong>Location:</strong> {accomodation.location}
      </div>
      <div>
        <strong>Price:</strong> {accomodation.price}
      </div>
      <div>
        <strong>Description:</strong> {accomodation.description}
      </div>
      <div>
        <strong>Gallery:</strong>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {accomodation.gallery && accomodation.gallery.map((img, idx) => (
            <img key={idx} src={img} alt={`gallery-${idx}`} style={{ width: "120px", borderRadius: "6px" }} />
          ))}
        </div>
      </div>
      <a href="/booking" className="submit_button" style={{ marginTop: "20px", display: "inline-block" }}>
        BOOK NOW
      </a>
    </div>
  );
};

export default AccomodationDetails;