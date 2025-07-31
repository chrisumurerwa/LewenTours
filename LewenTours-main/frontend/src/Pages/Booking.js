import React from 'react'
import Top10TravelListBanner from "../Components/Banners/Top10TravelList";
import BookNowForm from "../Components/BookNowForm";
import { Helmet } from 'react-helmet';

const Booking = () => {
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
        <BookNowForm />
        </section>
    </React.Fragment>
  );
}

export default Booking