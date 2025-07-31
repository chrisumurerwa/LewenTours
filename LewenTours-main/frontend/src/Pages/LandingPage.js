import React from 'react'
import HomeSlide from "../Components/HomeSlide";
import TopBlog from "../Components/TopBlog";
import YoutubeFrame from "../Components/YoutubeFrame";
import TravelList from "../Components/TravelList";
import TopDestinations from "../Components/TopDestinations";
import CarRentalSection from '../Components/carRental/CarRentalSection';
import { Helmet } from 'react-helmet';
function LandingPage() {
  return (
    <React.Fragment>
        <Helmet>
            <title>Lewen Tours</title>
            <meta name="description" content="Lewen tours is a limited company, in the tourism and service sector, that facilitates tours and trips for individuals, groups and or organizations in Rwanda." />
            <link rel="canonical" href="https://lewentours.com" />
        </Helmet>
        <HomeSlide />
        <TopBlog />
        <TravelList />
        <TopDestinations />
        <YoutubeFrame />
        <CarRentalSection />
    </React.Fragment>
  );
}

export default LandingPage