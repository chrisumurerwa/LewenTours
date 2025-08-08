import React, { useContext, useState, useEffect } from 'react'
import AccomodationCard from './AccomodationCard';
import FilterSidebar from './FilterSidebar';
import Context from '../../Context/Context';
import { filterAccommodations } from '../../utils/filterUtils';
import './MainContent.css';

const MainContent = ({ category = "Hotels" }) => {
  const { accomodations, mainTitle } = useContext(Context);
  const [filteredAccommodations, setFilteredAccommodations] = useState(accomodations);
  const [filters, setFilters] = useState({
    priceRange: '',
    starRating: '',
    location: '',
    priceMin: '',
    priceMax: '',
    amenities: [],
    propertyType: []
  });
  const [sortBy, setSortBy] = useState('top_picks');
  const [viewMode, setViewMode] = useState('list');

  // Update filtered accommodations when accommodations or filters change
  useEffect(() => {
    const filtered = filterAccommodations(accomodations, filters);
    setFilteredAccommodations(filtered);
  }, [accomodations, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
    // Apply sorting logic here
    let sorted = [...filteredAccommodations];
    switch (sortValue) {
      case 'price_low':
        sorted.sort((a, b) => {
          const priceA = parseInt(a.price.match(/\$(\d+)/)?.[1] || 0);
          const priceB = parseInt(b.price.match(/\$(\d+)/)?.[1] || 0);
          return priceA - priceB;
        });
        break;
      case 'price_high':
        sorted.sort((a, b) => {
          const priceA = parseInt(a.price.match(/\$(\d+)/)?.[1] || 0);
          const priceB = parseInt(b.price.match(/\$(\d+)/)?.[1] || 0);
          return priceB - priceA;
        });
        break;
      case 'rating':
        sorted.sort((a, b) => b.starsNo - a.starsNo);
        break;
      case 'name':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Top picks - keep original order
        break;
    }
    setFilteredAccommodations(sorted);
  };

  return (
    <div className="main-content-container">
      <div className="content-layout">
        {/* Filter Sidebar */}
        <div className="sidebar-section">
          <FilterSidebar 
            accommodations={filteredAccommodations}
            onFilterChange={handleFilterChange}
            category={category}
          />
        </div>

        {/* Main Content */}
        <div className="content-section">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <span>Home</span>
            <i className="fas fa-chevron-right"></i>
            <span>Rwanda</span>
            <i className="fas fa-chevron-right"></i>
            <span>Kigali</span>
            <i className="fas fa-chevron-right"></i>
            <span>Search results</span>
          </div>

          {/* Search Results Header */}
          <div className="search-results-header">
            <h1>Kigali: {filteredAccommodations.length} properties found</h1>
          </div>

          {/* Sorting and View Options */}
          <div className="sorting-controls">
            <div className="sort-by">
              <label htmlFor="sort-select">Sort by:</label>
              <select 
                id="sort-select"
                value={sortBy} 
                onChange={(e) => handleSortChange(e.target.value)}
                className="sort-select"
              >
                <option value="top_picks">Our top picks</option>
                <option value="price_low">Price (lowest first)</option>
                <option value="price_high">Price (highest first)</option>
                <option value="rating">Guest rating</option>
                <option value="name">Name</option>
              </select>
            </div>
            
            <div className="view-options">
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                title="List view"
              >
                <i className="fas fa-list"></i>
              </button>
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Grid view"
              >
                <i className="fas fa-th"></i>
              </button>
            </div>
          </div>
          
          {/* Results */}
          {filteredAccommodations.length === 0 ? (
            <div className="no-results">
              <div className="no-results-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>No properties found</h3>
              <p>Try adjusting your filters or search criteria to find more options.</p>
              <button onClick={() => setFilters({
                priceRange: '',
                starRating: '',
                location: '',
                priceMin: '',
                priceMax: '',
                amenities: [],
                propertyType: []
              })} className="clear-filters-btn-large">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className={`accommodations-grid ${viewMode}`}>
              {filteredAccommodations.map((accomodation) => (
                <AccomodationCard
                  accomodation={accomodation}
                  key={accomodation.title}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainContent