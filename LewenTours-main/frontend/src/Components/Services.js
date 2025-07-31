import React from 'react'

const ServicesComponent = () => {
    const default_services = [
    {
        id: 1,
        image:
        "/images/Services/aircraft.svg",
        title: "Airline Tickets",
        description: `Our travel agency specializes in providing our customers with the
            best deals on airline tickets`,
    },
    {
        id: 2,
        image:
        "/images/Services/accomodations.svg",
        title: "Accomodations",
        description: `Immerse yourself in local culture with our unique vacation rentals. Choose from charming apartments, cozy cottages, or beachfront villas for your perfect home away from home.`,
    },
    {
        id: 3,
        image: "/images/Services/car_rental.svg",
        title: "Car rental",
        description: `Get behind the wheel without breaking the bank! Rent reliable, fuel-efficient cars at unbeatable prices and explore freely.`,
    },
    {
        id: 4,
        image:
        "https://res.cloudinary.com/dnqhrr6jk/image/upload/f_auto,q_auto/v1/Lewen%20Tours/route_osyyvb",
        title: "Travel itineraries ",
        description: `Our team of experts will take care of all the planning and logistics, providing you with a detailed itinerary.`,
    },
    {
        id: 5,
        image:
        "/images/Services/hikking.svg",
        title: "Gorilla Trekking",
        description: `Experience the magic of encountering majestic mountain gorillas in their natural habitat. Trek through lush rainforests and witness unforgettable moments with these gentle giants.`,
    },
    {
        id: 6,
        image:
        "https://res.cloudinary.com/dnqhrr6jk/image/upload/f_auto,q_auto/v1/Lewen%20Tours/guidance_drwo7g",
        title: "Local Tours",
        description: `We can connect you with guides who will take you off the best path and show you their city.`,
    },
    {
        id: 7,
        image:"/images/Services/city_tour.svg",
        title: "City Tour",
        description: `Explore iconic landmarks, bustling markets, and charming neighborhoods. Discover the true essence of Kigali with our knowledgeable and passionate guide.`,
    },
    {
        id: 8,
        image:"/images/Services/national_park.svg",
        title: "National Park",
        description: `Immerse yourself in the grandeur of Rwanda National Parks. Explore majestic scenery, diverse wildlife, and breathtaking landscapes - a nature lover's paradise awaits.`,
    },
    {
        id: 9,
        image:"/images/Services/riding.svg",
        title: "Biking and Hiking",
        description: `Adventure awaits! Challenge yourself with diverse terrains, from adrenaline-pumping mountain biking to peaceful nature walks. Create lasting memories in the great outdoors.`,
    },
    ];
  return (
    <section id="services">
      <div className="services_container">
        <h1 className="header">Services</h1>
        <div className="services_grouping">
          {default_services.map((service) => (
            <div className="service" key={ service.id }>
              <div className="serv_logo">
                <img src={ service.image } alt="" />
              </div>
              <h3>{ service.title }</h3>
              <p>{ service.description }</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesComponent