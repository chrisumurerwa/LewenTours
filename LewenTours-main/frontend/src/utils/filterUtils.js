// Utility function to extract numeric price from price string
const extractPrice = (priceString) => {
  if (!priceString) return 0;
  const match = priceString.match(/\$(\d+)/);
  return match ? parseInt(match[1]) : 0;
};

// Filter accommodations based on applied filters
export const filterAccommodations = (accommodations, filters) => {
  return accommodations.filter(accommodation => {
    // Price range filter
    if (filters.priceMin || filters.priceMax) {
      const price = extractPrice(accommodation.price);
      const minPrice = filters.priceMin ? parseInt(filters.priceMin) : 0;
      const maxPrice = filters.priceMax ? parseInt(filters.priceMax) : Infinity;
      
      if (price < minPrice || price > maxPrice) {
        return false;
      }
    }

    // Preset price range filter
    if (filters.priceRange) {
      const price = extractPrice(accommodation.price);
      switch (filters.priceRange) {
        case '0-50':
          if (price > 50) return false;
          break;
        case '50-100':
          if (price < 50 || price > 100) return false;
          break;
        case '100-150':
          if (price < 100 || price > 150) return false;
          break;
        case '150+':
          if (price < 150) return false;
          break;
        default:
          break;
      }
    }

    // Star rating filter
    if (filters.starRating) {
      const requiredStars = parseInt(filters.starRating);
      if (accommodation.starsNo < requiredStars) {
        return false;
      }
    }

    // Location filter
    if (filters.location && filters.location !== '') {
      if (accommodation.location !== filters.location) {
        return false;
      }
    }

    // Property type filter
    if (filters.propertyType && filters.propertyType.length > 0) {
      const accommodationType = accommodation.category.toLowerCase();
      const hasMatchingType = filters.propertyType.some(type => {
        switch (type) {
          case 'hotels':
            return accommodationType === 'hotel';
          case 'apartments':
            return accommodationType === 'apartment';
          case 'guesthouses':
            return accommodationType === 'guesthouse';
          case 'resorts':
            return accommodationType === 'resort';
          default:
            return false;
        }
      });
      if (!hasMatchingType) {
        return false;
      }
    }

    // Amenities filter (simplified - you can expand this based on your data structure)
    if (filters.amenities && filters.amenities.length > 0) {
      // For now, we'll assume all accommodations have basic amenities
      // You can expand this by adding amenities data to your accommodation objects
      const hasRequiredAmenities = filters.amenities.every(amenity => {
        // This is a placeholder - you should implement based on your actual amenities data
        return true; // For now, return true to show all accommodations
      });
      if (!hasRequiredAmenities) {
        return false;
      }
    }

    return true;
  });
};
