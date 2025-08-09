import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import all_accomodations from "../JSON/accomodations";

const AccomodationDetails = () => {
  const { id } = useParams();
  const accomodation = all_accomodations.find(a => a.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Define allImages early, with fallback for when accomodation is null
  const allImages = accomodation ? [accomodation.image, ...(accomodation.gallery || [])].filter(img => img) : [];

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const nextImage = () => {
    setSelectedImage(prev => prev < allImages.length - 1 ? prev + 1 : 0);
  };

  const prevImage = () => {
    setSelectedImage(prev => prev > 0 ? prev - 1 : allImages.length - 1);
  };

  // Add keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (showModal && allImages.length > 0) {
        if (e.key === 'Escape') {
          setShowModal(false);
        }
        if (e.key === 'ArrowRight') {
          setSelectedImage(prev => prev < allImages.length - 1 ? prev + 1 : 0);
        }
        if (e.key === 'ArrowLeft') {
          setSelectedImage(prev => prev > 0 ? prev - 1 : allImages.length - 1);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showModal, allImages.length]);

  // Early return AFTER all hooks are defined
  if (!accomodation) return <div className="not-found">Accommodation not found</div>;

  return (
    <React.Fragment>
      <Helmet>
        <title>{accomodation.title} - Lewen Tours</title>
        <meta name="description" content={accomodation.description} />
        <link rel="canonical" href={`https://lewentours.com/accomodation/${accomodation.id}`} />
      </Helmet>
      
      <div className="accommodation-details-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-left">
              <div className="main-image-container">
                <img 
                  src={allImages[selectedImage]} 
                  alt={accomodation.title}
                  className="main-image"
                  onClick={openModal}
                  style={{ cursor: 'pointer' }}
                />
                <div className="image-overlay">
                  <div className="overlay-info">
                    <h1 className="accommodation-title">{accomodation.title}</h1>
                    <div className="location-badge">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{accomodation.location}</span>
                    </div>
                    <div className="rating-info">
                      <div className="stars">
                        {'★'.repeat(Math.floor(accomodation.starsNo))}
                        {'☆'.repeat(5 - Math.floor(accomodation.starsNo))}
                      </div>
                      <span className="rating-score">{accomodation.starsNo}</span>
                      <span className="reviews">({accomodation.reviewsNo} reviews)</span>
                    </div>
                  </div>
                  <button className="show-all-photos-btn" onClick={openModal}>
                    <i className="fas fa-images"></i>
                    Show all photos
                  </button>
                </div>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="image-grid">
                {allImages.slice(1, 5).map((image, index) => (
                  <div 
                    key={index} 
                    className={`grid-image ${index === 3 ? 'last-image' : ''}`}
                    onClick={() => handleImageClick(index + 1)}
                  >
                    <img src={image} alt={`View ${index + 2}`} />
                    {index === 3 && allImages.length > 5 && (
                      <div className="more-photos-overlay">
                        <span>+{allImages.length - 5} more</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="content-container">
            {/* Left Column - Details */}
            <div className="details-section">
              <div className="property-info">
                <div className="price-section">
                  <span className="price">{accomodation.price}</span>
                  <span className="price-period">per night</span>
                  <div className="tax-info">+ taxes & fees</div>
                </div>
                
                <div className="property-features">
                  <div className="feature-badges">
                    <span className="feature-badge">Free WiFi</span>
                    <span className="feature-badge">Free Parking</span>
                    <span className="feature-badge">Restaurant</span>
                    <span className="feature-badge">24/7 Front Desk</span>
                  </div>
                </div>
              </div>

              <div className="description-section">
                <h2>About this property</h2>
                <p className="description-text">{accomodation.description}</p>
              </div>

              {/* Image Gallery */}
              <div className="gallery-section">
                <h2>Photo Gallery</h2>
                <div className="gallery-grid">
                  {allImages.map((image, index) => (
                    <div 
                      key={index} 
                      className={`gallery-item ${selectedImage === index ? 'active' : ''}`}
                      onClick={() => handleImageClick(index)}
                    >
                      <img src={image} alt={`Gallery ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="amenities-section">
                <h2>Popular amenities</h2>
                <div className="amenities-grid">
                  <div className="amenity-item">
                    <i className="fas fa-wifi"></i>
                    <span>Free WiFi</span>
                  </div>
                  <div className="amenity-item">
                    <i className="fas fa-parking"></i>
                    <span>Free parking</span>
                  </div>
                  <div className="amenity-item">
                    <i className="fas fa-utensils"></i>
                    <span>Restaurant</span>
                  </div>
                  <div className="amenity-item">
                    <i className="fas fa-dumbbell"></i>
                    <span>Fitness center</span>
                  </div>
                  <div className="amenity-item">
                    <i className="fas fa-swimming-pool"></i>
                    <span>Pool</span>
                  </div>
                  <div className="amenity-item">
                    <i className="fas fa-concierge-bell"></i>
                    <span>Room service</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Sidebar */}
            <div className="booking-sidebar">
              <div className="booking-card">
                <div className="booking-header">
                  <div className="booking-price">
                    <span className="price-amount">{accomodation.price}</span>
                    <span className="price-unit">per night</span>
                  </div>
                  <div className="booking-rating">
                    <span className="rating-score">{accomodation.starsNo}</span>
                    <div className="rating-stars">
                      {'★'.repeat(Math.floor(accomodation.starsNo))}
                    </div>
                  </div>
                </div>

                <div className="booking-form">
                  <div className="date-inputs">
                    <div className="input-group">
                      <label>Check-in</label>
                      <input type="date" className="date-input" />
                    </div>
                    <div className="input-group">
                      <label>Check-out</label>
                      <input type="date" className="date-input" />
                    </div>
                  </div>
                  
                  <div className="guests-input">
                    <label>Guests</label>
                    <select className="guests-select">
                      <option value="1">1 guest</option>
                      <option value="2">2 guests</option>
                      <option value="3">3 guests</option>
                      <option value="4">4 guests</option>
                    </select>
                  </div>

                  <button className="book-now-btn">
                    Reserve
                  </button>
                  
                  <p className="booking-note">You won't be charged yet</p>
                </div>

                <div className="price-breakdown">
                  <div className="price-row">
                    <span>{accomodation.price} x 1 night</span>
                    <span>{accomodation.price}</span>
                  </div>
                  <div className="price-row">
                    <span>Taxes & fees</span>
                    <span>$15</span>
                  </div>
                  <div className="price-row total">
                    <span>Total</span>
                    <span>${parseInt(accomodation.price.replace(/\D/g, '')) + 15}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {showModal && (
          <div className="image-modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              <div className="modal-image-container">
                <img 
                  src={allImages[selectedImage]} 
                  alt={accomodation.title}
                  className="modal-image"
                />
              </div>
              <div className="modal-thumbnails">
                {allImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`modal-thumb ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
              <div className="modal-navigation">
                <button 
                  className="nav-btn prev"
                  onClick={prevImage}
                  title="Previous image (←)"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button 
                  className="nav-btn next"
                  onClick={nextImage}
                  title="Next image (→)"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default AccomodationDetails;