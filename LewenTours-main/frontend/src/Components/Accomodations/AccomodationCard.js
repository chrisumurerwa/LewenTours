import { Link } from "react-router-dom";

const AccomodationCard = ({ accomodation }) => (
  <div className="accomodation-card">
    <div className="accomodation-image">
      <img
        src={accomodation.image}
        alt={accomodation.title}
        style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
      />
    </div>
    <div className="accomodation-content">
      <h3>{accomodation.title}</h3>
      <div>
        <i className="fas fa-map-marker-alt"></i> {accomodation.location}
      </div>
      <div>
        {"★".repeat(Math.floor(accomodation.starsNo))}
        {"☆".repeat(5 - Math.floor(accomodation.starsNo))}
        &nbsp; Reviews ({accomodation.reviewsNo})
      </div>
      <div style={{ margin: "10px 0" }}>
        {accomodation.description}
      </div>
      <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
        Price: {accomodation.price}
      </div>
      <Link
        to={`/accomodation/${accomodation.id}`}
        className="submit_button"
        style={{ marginRight: "10px" }}
      >
        More Info
      </Link>
      <a
        href="/booking"
        className="submit_button"
      >
        BOOK NOW
      </a>
    </div>
  </div>
);

export default AccomodationCard;