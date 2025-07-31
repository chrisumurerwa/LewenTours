import React from 'react';
import BookNowForm from "../Components/BookNowForm";
import Top10TravelListBanner from "../Components/Banners/Top10TravelList";
import SingleDetailsTravel from "../Components/Top10TravelList/SingleDetailsTravel";
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Top10DetailsTravel = () => {
  const { state } = useLocation();
  return (
    <React.Fragment>
        <Helmet>
            <title>{ state.travel_title }</title>
            <meta name="description" content={`Discover the beaty of ${ state.travel_title }`} />
            <link rel="canonical" href={`https://lewentours.com/traveldetails/${state.travel_title}`} />
        </Helmet>
        <section id="top10travels">
        <Top10TravelListBanner
            image={state.travel_image}
            title={state.travel_title}
        />
        <SingleDetailsTravel
            travel_title={state.travel_title}
            travel_details={state.travel_details}
        />
        <BookNowForm />
        </section>
    </React.Fragment>
  );
}

export default Top10DetailsTravel