import React from "react";
import Top10TravelListBanner from "../Components/Banners/Top10TravelList";
import Top10TravelList from "../Components/Top10TravelList";
import BookNowForm from "../Components/BookNowForm";
import { Helmet } from "react-helmet";

function Top10() {
  return (
    <React.Fragment>
        <Helmet>
            <title>Top Destinations</title>
            <meta name="description" content="These are high rated destinations, on our site!" />
            <link rel="canonical" href="https://lewentours.com/top10s" />
        </Helmet>
        <section id="top10travels">
            <Top10TravelListBanner
                image="https://res.cloudinary.com/dnqhrr6jk/image/upload/f_auto,q_auto/v1/Lewen%20Tours/top10travelbanner_ivylwb"
                title="Top 10 Travel List"
            />
            <Top10TravelList />
            <BookNowForm />
        </section>
    </React.Fragment>
  );
}

export default Top10;
