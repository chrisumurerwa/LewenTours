import { Link, useNavigate } from "react-router-dom";

const AccomodationCard = ({ accomodation, viewMode = 'list' }) => {
  const isGrid = viewMode === 'grid';
  const navigate = useNavigate();
  
  const handleShowPrices = () => {
    try {
      console.log('Show prices clicked for:', accomodation.title);
      console.log('Accommodation data:', accomodation);
      
      // Navigate to booking page with accommodation details
      navigate('/booking', { 
        state: { 
          selectedAccommodation: accomodation,
          showPrices: true 
        } 
      });
      
      console.log('Navigation successful to /booking');
    } catch (error) {
      console.error('Error navigating to booking page:', error);
    }
  };
  
  return (
    <div className={`accomodation-card ${isGrid ? 'grid-view' : 'list-view'}`}>
      <div className="accomodation-image">
        <img
          src={accomodation.image}
          alt={accomodation.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="image-overlay">
          <button className="favorite-btn" title="Add to favorites">
            <i className="far fa-heart"></i>
          </button>
          {accomodation.gallery && accomodation.gallery.length > 1 && (
            <div className="gallery-indicator">
              <i className="fas fa-images"></i>
              <span>{accomodation.gallery.length} photos</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="accomodation-content">
        <div className="card-header">
          <div className="title-section">
            <h3>{accomodation.title}</h3>
            <div className="rating-badge">
              <span className="rating-score">Superb {accomodation.starsNo}</span>
              <div className="stars">
                {'★'.repeat(Math.floor(accomodation.starsNo))}
                {'☆'.repeat(5 - Math.floor(accomodation.starsNo))}
              </div>
              <span className="reviews-count">({accomodation.reviewsNo} reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="location-info">
          <div className="location-details">
            <i className="fas fa-map-marker-alt"></i>
            <span className="location-name">{accomodation.location.split(',')[0]}</span>
            <button className="show-on-map-link">Show on map</button>
            <span className="distance">• 2.3 km from centre</span>
          </div>
        </div>
        
        <div className="description">
          <p>{accomodation.description}</p>
        </div>
        
        <div className="amenities-preview">
          <div className="amenity-tags">
            <span className="amenity-tag">Free WiFi</span>
            <span className="amenity-tag">Free Parking</span>
            <span className="amenity-tag">Restaurant</span>
          </div>
        </div>
        
        <div className="card-footer">
          <div className="price-section">
            <div className="price-info">
              <span className="price-label">From</span>
              <span className="price-amount">{accomodation.price}</span>
              <span className="price-period">per night</span>
            </div>
            <div className="tax-info">
              <span>+ $15 taxes & charges</span>
            </div>
          </div>
          
          <div className="action-buttons">
            <Link
              to={`/accomodation/${accomodation.id}`}
              className="view-details-btn"
            >
              <i className="fas fa-info-circle"></i>
              View details
            </Link>
            <button className="show-prices-btn" onClick={handleShowPrices}>
              <i className="fas fa-dollar-sign"></i>
              Show prices
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccomodationCard;