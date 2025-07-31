import React from "react";
import BookNowForm from "../Components/BookNowForm";
import Top10TravelListBanner from "../Components/Banners/Top10TravelList";
import ServicesComponent from "../Components/Services";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <React.Fragment>
        <Helmet>
            <title>Services</title>
            <meta name="description" content="We provide different Services including Gorilla trekking, Biking and hiking, City tour, National Park, Accommodation, Car rental, Airline tickets, Itinerary, Local tours and you can Contribute to tree planting." />
            <link rel="canonical" href="https://lewentours.com/services" />
        </Helmet>
        <section id="top10travels">
            <Top10TravelListBanner
                image="/images/Banners/services.jpg"
                title="Services"
            />
            <ServicesComponent />
            <BookNowForm />
        </section>
    </React.Fragment>
  );
};

export default Services;
