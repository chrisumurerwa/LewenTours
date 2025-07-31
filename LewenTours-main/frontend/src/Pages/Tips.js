import React from "react";
import Banner from "../Components/Banners/Top10TravelList";
import TipsSection from "../Components/TipsSection"
import { Helmet } from "react-helmet";
import RecommendedDestinations from "../Components/RecommendedDestinations";
function TravelTips() { 
  return (
    <section id="traveltips">
        <Helmet>
            <title>Travel tips</title>
            <meta name="description" content="Are you looking forward to traveling in Rwanda, We provide helpful tips." />
            <link rel="canonical" href="https://lewentours.com/traveltips" />
        </Helmet>
        <Banner
        image="https://res.cloudinary.com/dnqhrr6jk/image/upload/f_auto,q_auto/v1/Lewen%20Tours/traveltips_nv0qig"
        title="Travel Tips"
        key="traveltips"
        />
        <div className="tips_2sections">
        <div className="left_details">
            <TipsSection />
        </div>
        <div className="right_details">
            <h2>Recommended</h2>
            <RecommendedDestinations />
        </div>
        </div>
    </section>
  );
}

export default TravelTips;
