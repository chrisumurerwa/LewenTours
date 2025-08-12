import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Top10TravelListBanner from "../Components/Banners/Top10TravelList";
import BookNowForm from "../Components/BookNowForm";
import { Helmet } from 'react-helmet';

const Booking = () => {
  const location = useLocation();
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [showPrices, setShowPrices] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add CSS animation for loading spinner
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    console.log('Booking page loaded, location.state:', location.state);
    
    if (location.state) {
      console.log('Received accommodation data:', location.state.selectedAccommodation);
      console.log('Show prices flag:', location.state.showPrices);
      
      setIsLoading(true);
      
      // Simulate loading for better UX
      setTimeout(() => {
        setSelectedAccommodation(location.state.selectedAccommodation);
        setShowPrices(location.state.showPrices);
        setIsLoading(false);
      }, 500);
      
    } else {
      console.log('No location.state found - user came directly to booking page');
    }
  }, [location.state]);

  const handleRoomSelection = (roomType, price) => {
    setSelectedRoom({ type: roomType, price: price });
    setShowBookingForm(true);
  };

  const handleBackToPricing = () => {
    setSelectedRoom(null);
    setShowBookingForm(false);
  };

  const openGallery = (index = 0) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
  };

  const nextImage = () => {
    if (selectedAccommodation.gallery && selectedAccommodation.gallery.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedAccommodation.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAccommodation.gallery && selectedAccommodation.gallery.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAccommodation.gallery.length - 1 : prev - 1
      );
    }
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleConfirmBooking = () => {
    // Show success message
    alert(`Great! You've selected ${selectedRoom.type} at ${selectedAccommodation.title}. You'll be redirected to the booking form.`);
    
    // Scroll to the booking form
    const bookingForm = document.getElementById('order_now');
    if (bookingForm) {
      bookingForm.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Pre-fill the booking form with accommodation details
    setTimeout(() => {
      const serviceSelect = document.querySelector('select[name="user_destination"]');
      const guestNumberInput = document.querySelector('input[name="guest_number"]');
      const specialOfferTextarea = document.querySelector('textarea[name="special_offer"]');
      
      if (serviceSelect) {
        serviceSelect.value = 'Accommodation';
      }
      
      if (guestNumberInput) {
        guestNumberInput.value = '2'; // Default to 2 guests
      }
      
      if (specialOfferTextarea) {
        specialOfferTextarea.value = `Selected Accommodation: ${selectedAccommodation.title}\nRoom Type: ${selectedRoom.type}\nPrice: ${selectedRoom.price} per night\nLocation: ${selectedAccommodation.location}`;
      }
    }, 500);
  };

  return (
    <React.Fragment>
        <Helmet>
            <title>Booking</title>
            <meta name="description" content="Book an Service with Lewen tours Easy to fill up form." />
            <link rel="canonical" href="https://lewentours.com/booking" />
        </Helmet>
        <section id="top10travels">
            <Top10TravelListBanner
                image="/images/Banners/BookNow.jpg"
                title="Book Now"
            />
            
            {/* Show accommodation pricing if coming from "Show prices" button */}
            {isLoading && (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                color: '#666'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  border: '4px solid #f3f3f3',
                  borderTop: '4px solid #007bff',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                  margin: '0 auto 1rem auto'
                }}></div>
                <p>Loading accommodation details...</p>
              </div>
            )}
            
            {showPrices && selectedAccommodation && !isLoading && (
              <div className="accommodation-pricing" style={{
                maxWidth: '800px',
                margin: '2rem auto',
                padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid #e9ecef'
              }}>
                <div className="pricing-header" style={{textAlign: 'center', marginBottom: '2rem'}}>
                  <h2 style={{color: '#333', marginBottom: '0.5rem'}}>Available Room Prices</h2>
                  <h3 style={{color: '#007bff', margin: 0}}>{selectedAccommodation.title}</h3>
                  <p style={{color: '#666', marginTop: '0.5rem'}}>{selectedAccommodation.location}</p>
                </div>
                
                {/* Room Photo Gallery */}
                <div className="room-gallery" style={{marginBottom: '2rem'}}>
                  <h4 style={{color: '#333', marginBottom: '1rem', textAlign: 'center'}}>Room Photos</h4>
                  <div className="gallery-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    {selectedAccommodation.gallery && selectedAccommodation.gallery.slice(0, 4).map((image, index) => (
                      <div key={index} style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        border: '2px solid #e9ecef',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.02)';
                        e.target.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                      }}
                      onClick={() => openGallery(index)}
                      >
                        <img 
                          src={image} 
                          alt={`Room ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '150px',
                            objectFit: 'cover',
                            display: 'block'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  {selectedAccommodation.gallery && selectedAccommodation.gallery.length > 4 && (
                    <p style={{textAlign: 'center', color: '#666', fontSize: '0.9rem'}}>
                      +{selectedAccommodation.gallery.length - 4} more photos available
                    </p>
                  )}
                </div>
                
                <div className="room-types" style={{marginBottom: '2rem'}}>
                  <h4 style={{color: '#333', marginBottom: '1rem'}}>Room Types & Pricing</h4>
                  
                  {/* Standard Room */}
                  <div className="room-option" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    backgroundColor: selectedRoom?.type === 'Standard' ? '#e3f2fd' : '#f8f9fa',
                    borderColor: selectedRoom?.type === 'Standard' ? '#007bff' : '#e9ecef'
                  }}>
                    <div>
                      <h5 style={{margin: '0 0 0.5rem 0', color: '#333'}}>Standard Room</h5>
                      <p style={{margin: 0, color: '#666', fontSize: '0.9rem'}}>1 King Bed • 2 Guests • City View</p>
                    </div>
                    <div style={{textAlign: 'right', marginRight: '1rem'}}>
                      <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff'}}>
                        {selectedAccommodation.price}
                      </div>
                      <div style={{fontSize: '0.9rem', color: '#666'}}>per night</div>
                    </div>
                    <button 
                      onClick={() => handleRoomSelection('Standard', selectedAccommodation.price)}
                      style={{
                        backgroundColor: selectedRoom?.type === 'Standard' ? '#007bff' : '#fff',
                        color: selectedRoom?.type === 'Standard' ? '#fff' : '#007bff',
                        border: '2px solid #007bff',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '0.9rem'
                      }}
                    >
                      {selectedRoom?.type === 'Standard' ? '✓ Selected' : 'Select'}
                    </button>
                  </div>
                  
                  {/* Deluxe Room */}
                  <div className="room-option" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                    backgroundColor: selectedRoom?.type === 'Deluxe' ? '#e3f2fd' : '#f8f9fa',
                    borderColor: selectedRoom?.type === 'Deluxe' ? '#007bff' : '#e9ecef'
                  }}>
                    <div>
                      <h5 style={{margin: '0 0 0.5rem 0', color: '#333'}}>Deluxe Room</h5>
                      <p style={{margin: 0, color: '#666', fontSize: '0.9rem'}}>1 King Bed • 2 Guests • Pool View</p>
                    </div>
                    <div style={{textAlign: 'right', marginRight: '1rem'}}>
                      <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff'}}>
                        ${parseInt(selectedAccommodation.price.replace(/[^0-9]/g, '')) + 25}
                      </div>
                      <div style={{fontSize: '0.9rem', color: '#666'}}>per night</div>
                    </div>
                    <button 
                      onClick={() => handleRoomSelection('Deluxe', `$${parseInt(selectedAccommodation.price.replace(/[^0-9]/g, '')) + 25}`)}
                      style={{
                        backgroundColor: selectedRoom?.type === 'Deluxe' ? '#007bff' : '#fff',
                        color: selectedRoom?.type === 'Deluxe' ? '#fff' : '#007bff',
                        border: '2px solid #007bff',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '0.9rem'
                      }}
                    >
                      {selectedRoom?.type === 'Deluxe' ? '✓ Selected' : 'Select'}
                    </button>
                  </div>
                  
                  {/* Suite */}
                  <div className="room-option" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem',
                    border: '1px solid #e9ecef',
                    borderRadius: '8px',
                    backgroundColor: selectedRoom?.type === 'Suite' ? '#e3f2fd' : '#f8f9fa',
                    borderColor: selectedRoom?.type === 'Suite' ? '#007bff' : '#e9ecef'
                  }}>
                    <div>
                      <h5 style={{margin: '0 0 0.5rem 0', color: '#333'}}>Suite</h5>
                      <p style={{margin: 0, color: '#666', fontSize: '0.9rem'}}>1 King Bed + Living Area • 4 Guests • Premium View</p>
                    </div>
                    <div style={{textAlign: 'right', marginRight: '1rem'}}>
                      <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff'}}>
                        ${parseInt(selectedAccommodation.price.replace(/[^0-9]/g, '')) + 50}
                      </div>
                      <div style={{fontSize: '0.9rem', color: '#666'}}>per night</div>
                    </div>
                    <button 
                      onClick={() => handleRoomSelection('Suite', `$${parseInt(selectedAccommodation.price.replace(/[^0-9]/g, '')) + 50}`)}
                      style={{
                        backgroundColor: selectedRoom?.type === 'Suite' ? '#007bff' : '#fff',
                        color: selectedRoom?.type === 'Suite' ? '#fff' : '#007bff',
                        border: '2px solid #007bff',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '500',
                        fontSize: '0.9rem'
                      }}
                    >
                      {selectedRoom?.type === 'Suite' ? '✓ Selected' : 'Select'}
                    </button>
                  </div>
                </div>
                
                <div className="pricing-footer" style={{textAlign: 'center'}}>
                  <p style={{color: '#666', marginBottom: '1rem'}}>
                    All prices include taxes and fees. Free cancellation up to 24 hours before check-in.
                  </p>
                  
                  {selectedRoom ? (
                    <div className="selected-room-info" style={{
                      backgroundColor: '#e3f2fd',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      border: '2px solid #007bff'
                    }}>
                      <h4 style={{color: '#007bff', margin: '0 0 0.5rem 0'}}>Selected Room</h4>
                      <p style={{margin: '0 0 0.5rem 0', fontWeight: '500'}}>
                        {selectedRoom.type} - {selectedRoom.price} per night
                      </p>
                      <button 
                        onClick={handleBackToPricing}
                        style={{
                          backgroundColor: 'transparent',
                          color: '#007bff',
                          border: '1px solid #007bff',
                          padding: '6px 12px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontSize: '0.9rem'
                        }}
                      >
                        Change Selection
                      </button>
                    </div>
                  ) : (
                    <p style={{color: '#007bff', fontWeight: '500'}}>
                      Please select a room type above to proceed with booking
                    </p>
                  )}
                </div>
              </div>
            )}
            
            {/* Show booking form after room selection */}
            {showBookingForm && selectedRoom && (
              <div className="booking-form-section" style={{
                maxWidth: '800px',
                margin: '2rem auto',
                padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                border: '1px solid #e9ecef'
              }}>
                <div className="form-header" style={{textAlign: 'center', marginBottom: '2rem'}}>
                  <h2 style={{color: '#333', marginBottom: '0.5rem'}}>Complete Your Booking</h2>
                  <h3 style={{color: '#007bff', margin: 0}}>{selectedAccommodation.title}</h3>
                  <p style={{color: '#666', marginTop: '0.5rem'}}>
                    {selectedRoom.type} - {selectedRoom.price} per night
                  </p>
                </div>
                
                <div className="booking-form">
                  <div className="form-row" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500'}}>Check-in Date</label>
                      <input 
                        type="date" 
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '6px',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500'}}>Check-out Date</label>
                      <input 
                        type="date" 
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '6px',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="form-row" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}>
                    <div>
                      <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500'}}>Number of Guests</label>
                      <select style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}>
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>3 Guests</option>
                        <option>4 Guests</option>
                      </select>
                    </div>
                    <div>
                      <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500'}}>Number of Rooms</label>
                      <select style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}>
                        <option>1 Room</option>
                        <option>2 Rooms</option>
                        <option>3 Rooms</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-row" style={{marginBottom: '1.5rem'}}>
                    <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500'}}>Special Requests</label>
                    <textarea 
                      placeholder="Any special requests or requirements..."
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        minHeight: '80px',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                  
                  <div className="form-actions" style={{textAlign: 'center'}}>
                    <button 
                      onClick={handleConfirmBooking}
                      style={{
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        padding: '14px 28px',
                        borderRadius: '6px',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        fontWeight: '500',
                        marginRight: '1rem'
                      }}
                    >
                      Confirm Booking
                    </button>
                    <button 
                      onClick={handleBackToPricing}
                      style={{
                        backgroundColor: 'transparent',
                        color: '#666',
                        border: '1px solid #ddd',
                        padding: '14px 28px',
                        borderRadius: '6px',
                        fontSize: '1.1rem',
                        cursor: 'pointer'
                      }}
                    >
                      Back to Pricing
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Gallery Modal */}
            {showGallery && selectedAccommodation && (
              <div className="gallery-modal" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.95)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Close Button */}
                <button 
                  onClick={closeGallery}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '45px',
                    height: '45px',
                    fontSize: '22px',
                    cursor: 'pointer',
                    zIndex: 1001,
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                    transition: 'all 0.2s ease',
                    color: '#333',
                    fontWeight: 'bold'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 1)';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  ✕
                </button>
                
                {/* Main Image */}
                <div className="main-image-container" style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  width: '100%',
                  height: '90vh',
                  padding: '30px',
                  overflow: 'hidden'
                }}>
                  {/* Previous Button */}
                  {selectedAccommodation.gallery && selectedAccommodation.gallery.length > 1 && (
                    <button 
                      onClick={prevImage}
                      style={{
                        position: 'absolute',
                        left: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        fontSize: '24px',
                        cursor: 'pointer',
                        zIndex: 1001,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                      }}
                    >
                      ‹
                    </button>
                  )}
                  
                  {/* Current Image */}
                  <img 
                    src={selectedAccommodation.gallery ? selectedAccommodation.gallery[currentImageIndex] : selectedAccommodation.image}
                    alt={`${selectedAccommodation.title} - Image ${currentImageIndex + 1}`}
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '90%',
                      maxHeight: '80vh',
                      objectFit: 'contain',
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                      backgroundColor: '#f8f9fa',
                      display: 'block'
                    }}
                  />
                  
                  {/* Next Button */}
                  {selectedAccommodation.gallery && selectedAccommodation.gallery.length > 1 && (
                    <button 
                      onClick={nextImage}
                      style={{
                        position: 'absolute',
                        right: '20px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        fontSize: '24px',
                        cursor: 'pointer',
                        zIndex: 1001,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                      }}
                    >
                      ›
                    </button>
                  )}
                </div>
                
                {/* Thumbnails */}
                {selectedAccommodation.gallery && selectedAccommodation.gallery.length > 1 && (
                  <div className="thumbnails-container" style={{
                    padding: '20px',
                    display: 'flex',
                    gap: '15px',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    maxWidth: '100%',
                    overflowX: 'auto',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    margin: '0 20px 20px 20px'
                  }}>
                    {selectedAccommodation.gallery.map((image, index) => (
                      <div 
                        key={index}
                        onClick={() => selectImage(index)}
                        style={{
                          width: '100px',
                          height: '75px',
                          cursor: 'pointer',
                          border: index === currentImageIndex ? '4px solid #007bff' : '3px solid rgba(255, 255, 255, 0.3)',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          opacity: index === currentImageIndex ? 1 : 0.8,
                          transition: 'all 0.3s ease',
                          transform: index === currentImageIndex ? 'scale(1.05)' : 'scale(1)',
                          boxShadow: index === currentImageIndex ? '0 4px 16px rgba(0, 123, 255, 0.4)' : '0 2px 8px rgba(0,0,0,0.2)'
                        }}
                      >
                        <img 
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            <BookNowForm />
        </section>
    </React.Fragment>
  );
}

export default Booking