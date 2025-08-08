import React, { useState, useEffect } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ accommodations, onFilterChange, category }) => {
  const [filters, setFilters] = useState({
    priceRange: '',
    starRating: '',
    location: '',
    priceMin: '',
    priceMax: '',
    amenities: [],
    propertyType: []
  });

  // Get unique locations from accommodations
  const locations = [...new Set(accommodations.map(acc => acc.location))];

  // Amenities options
  const amenitiesOptions = [
    { id: 'swimming_pool', label: 'Swimming Pool', count: 2 },
    { id: 'wifi', label: 'Free WiFi', count: 8 },
    { id: 'parking', label: 'Free Parking', count: 6 },
    { id: 'restaurant', label: 'Restaurant', count: 5 },
    { id: 'fitness', label: 'Fitness Center', count: 3 },
    { id: 'spa', label: 'Spa', count: 2 }
  ];

  // Property type options
  const propertyTypes = [
    { id: 'hotels', label: 'Hotels', count: 6 },
    { id: 'apartments', label: 'Apartments', count: 4 },
    { id: 'guesthouses', label: 'Guest Houses', count: 1 },
    { id: 'resorts', label: 'Resorts', count: 1 }
  ];

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Handle checkbox filters
  const handleCheckboxFilter = (filterType, value, checked) => {
    const currentValues = filters[filterType] || [];
    const newValues = checked 
      ? [...currentValues, value]
      : currentValues.filter(item => item !== value);
    
    const newFilters = { ...filters, [filterType]: newValues };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Clear all filters
  const clearFilters = () => {
    const clearedFilters = {
      priceRange: '',
      starRating: '',
      location: '',
      priceMin: '',
      priceMax: '',
      amenities: [],
      propertyType: []
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  // Remove specific filter
  const removeFilter = (filterType) => {
    const newFilters = { ...filters, [filterType]: '' };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  // Get active filters for display
  const getActiveFilters = () => {
    const active = [];
    if (filters.priceRange) {
      active.push({ type: 'priceRange', label: filters.priceRange, value: filters.priceRange });
    }
    if (filters.starRating) {
      active.push({ type: 'starRating', label: `${filters.starRating}★ & up`, value: filters.starRating });
    }
    if (filters.location) {
      active.push({ type: 'location', label: filters.location, value: filters.location });
    }
    if (filters.priceMin || filters.priceMax) {
      const min = filters.priceMin || '0';
      const max = filters.priceMax || '∞';
      active.push({ type: 'priceCustom', label: `$${min} - $${max}`, value: `${min}-${max}` });
    }
    filters.amenities.forEach(amenity => {
      const amenityOption = amenitiesOptions.find(a => a.id === amenity);
      if (amenityOption) {
        active.push({ type: 'amenities', label: amenityOption.label, value: amenity });
      }
    });
    filters.propertyType.forEach(type => {
      const typeOption = propertyTypes.find(t => t.id === type);
      if (typeOption) {
        active.push({ type: 'propertyType', label: typeOption.label, value: type });
      }
    });
    return active;
  };

  const activeFilters = getActiveFilters();

  return (
    <div className="filter-sidebar">
      {/* Map Section */}
      <div className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5!2d30.0!3d-1.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTQnMDAuMCJTIDMw8JAwMCcwMC4wIkU!5e0!3m2!1sen!2srw!4v1234567890"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <button className="show-on-map-btn">
            <i className="fas fa-map-marker-alt"></i>
            Show on map
          </button>
        </div>
      </div>

      {/* Filter Header */}
      <div className="filter-header">
        <h3>
          <i className="fas fa-filter"></i>
          Filter by
        </h3>
        {activeFilters.length > 0 && (
          <button onClick={clearFilters} className="clear-filters-btn">
            <i className="fas fa-times"></i>
            Clear all
          </button>
        )}
      </div>

      {/* Active Filter Tags */}
      {activeFilters.length > 0 && (
        <div className="filter-tags">
          {activeFilters.map((filter, index) => (
            <div key={index} className="filter-tag">
              <span>{filter.label}</span>
              <button 
                className="remove-tag"
                onClick={() => removeFilter(filter.type)}
                title="Remove filter"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Your Previous Filters */}
      <div className="filter-section">
        <h4>
          <i className="fas fa-history"></i>
          Your previous filters
        </h4>
        <div className="checkbox-group">
          <label className="checkbox-item">
            <input
              type="checkbox"
              checked={filters.propertyType.includes('hotels')}
              onChange={(e) => handleCheckboxFilter('propertyType', 'hotels', e.target.checked)}
            />
            <span className="checkmark"></span>
            <span className="label">Hotels</span>
            <span className="count">6</span>
          </label>
        </div>
      </div>

      {/* Popular Filters */}
      <div className="filter-section">
        <h4>
          <i className="fas fa-fire"></i>
          Popular filters
        </h4>
        
        {/* Amenities */}
        <div className="filter-subsection">
          <h5>Amenities</h5>
          <div className="checkbox-group">
            {amenitiesOptions.map(amenity => (
              <label key={amenity.id} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity.id)}
                  onChange={(e) => handleCheckboxFilter('amenities', amenity.id, e.target.checked)}
                />
                <span className="checkmark"></span>
                <span className="label">{amenity.label}</span>
                <span className="count">({amenity.count})</span>
              </label>
            ))}
          </div>
        </div>

        {/* Property Types */}
        <div className="filter-subsection">
          <h5>Property Type</h5>
          <div className="checkbox-group">
            {propertyTypes.map(type => (
              <label key={type.id} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={filters.propertyType.includes(type.id)}
                  onChange={(e) => handleCheckboxFilter('propertyType', type.id, e.target.checked)}
                />
                <span className="checkmark"></span>
                <span className="label">{type.label}</span>
                <span className="count">({type.count})</span>
              </label>
            ))}
          </div>
        </div>

        {/* Star Rating */}
        <div className="filter-subsection">
          <h5>Guest Rating</h5>
          <div className="checkbox-group">
            <label className="checkbox-item">
              <input
                type="checkbox"
                checked={filters.starRating === '9'}
                onChange={(e) => handleFilterChange('starRating', e.target.checked ? '9' : '')}
              />
              <span className="checkmark"></span>
              <span className="label">Superb: 9+</span>
              <span className="count">(7)</span>
            </label>
            <div className="rating-note">Based on guest reviews</div>
          </div>
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="filter-section">
        <h4>
          <i className="fas fa-dollar-sign"></i>
          Price Range
        </h4>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Min Price"
            value={filters.priceMin}
            onChange={(e) => handleFilterChange('priceMin', e.target.value)}
            className="price-input"
            min="0"
          />
          <span className="price-separator">-</span>
          <input
            type="number"
            placeholder="Max Price"
            value={filters.priceMax}
            onChange={(e) => handleFilterChange('priceMax', e.target.value)}
            className="price-input"
            min="0"
          />
        </div>
        <div className="price-presets">
          <button
            className={`preset-btn ${filters.priceRange === '0-50' ? 'active' : ''}`}
            onClick={() => handleFilterChange('priceRange', '0-50')}
          >
            Under $50
          </button>
          <button
            className={`preset-btn ${filters.priceRange === '50-100' ? 'active' : ''}`}
            onClick={() => handleFilterChange('priceRange', '50-100')}
          >
            $50 - $100
          </button>
          <button
            className={`preset-btn ${filters.priceRange === '100-150' ? 'active' : ''}`}
            onClick={() => handleFilterChange('priceRange', '100-150')}
          >
            $100 - $150
          </button>
          <button
            className={`preset-btn ${filters.priceRange === '150+' ? 'active' : ''}`}
            onClick={() => handleFilterChange('priceRange', '150+')}
          >
            $150+
          </button>
        </div>
      </div>

      {/* Location Filter */}
      <div className="filter-section">
        <h4>
          <i className="fas fa-map-marker-alt"></i>
          Location
        </h4>
        <select
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          className="location-select"
        >
          <option value="">All Locations</option>
          {locations.map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Results Count */}
      <div className="results-count">
        <p>
          <i className="fas fa-search"></i>
          {accommodations.length} properties found
        </p>
        {activeFilters.length > 0 && (
          <span className="active-filters-count">
            with {activeFilters.length} active filter{activeFilters.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
