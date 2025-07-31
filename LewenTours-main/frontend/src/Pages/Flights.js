import React from "react";
import Top10TravelListBanner from "../Components/Banners/Top10TravelList";
import SingleDetailsTravel from "../Components/Top10TravelList/SingleDetailsTravel";
import { Helmet } from "react-helmet";

const Flights = () => {
    const flights_details = {
      link: "gorilla-trekking",
      background_image:
        "/images/GolliraTrekking/view-wild-gibbon-apes-nature.jpg",
      description: `I can help you book flights in Rwanda. I have access to all the major airlines and can find you the best deals. I can also help you with your visa application, arrange transportation to and from the airport, and book hotels and other accommodations. I will even help you pack! So if you're planning a trip to Rwanda, let me help you make it a success.`,
      gallery: [
        {
          image:
            "https://res.cloudinary.com/delpedjbc/image/upload/f_auto,q_auto/v1/lewen%20tours/vjnjgo963jjdzb9swmot",
          public_id: "cute-small-chimpan",
        },
        {
          image:
            "https://res.cloudinary.com/delpedjbc/image/upload/f_auto,q_auto/v1/lewen%20tours/qnuo7ekb4vbzhnvxuds0",
          public_id: "mountain-gorillas-gorilla-beringei",
        },
        {
          image:
            "https://res.cloudinary.com/delpedjbc/image/upload/f_auto,q_auto/v1/lewen%20tours/lzc4irdcrpmpailqhnu4",
          public_id: "view-gibbon-apes",
        },
        {
          image: "https://res.cloudinary.com/delpedjbc/image/upload/f_auto,q_auto/v1/lewen%20tours/omdt97lm86pehvtrhlnd",
          public_id: "view-gorilla-sitting",
        },
        {
          image: "https://res.cloudinary.com/delpedjbc/image/upload/f_auto,q_auto/v1/lewen%20tours/pvzgypgtylxhzaf22mkh",
          public_id: "view-wild-gibbon",
        },
        {
          image: "https://res.cloudinary.com/delpedjbc/image/upload/f_auto,q_auto/v1/lewen%20tours/pzqkrnugt6zyuid6twuf",
          public_id: "view-gibbon-apes-rain",
        },
      ],
    };
  return (
    <React.Fragment>
        <Helmet>
            <title>Flights</title>
            <meta name="description" content="Lewen tours has access to most flights in Rwanda, This allow to book your flight in single site." />
            <link rel="canonical" href="https://lewentours.com/flights" />
        </Helmet>
        <section id="top10travels">
            <Top10TravelListBanner
                image="https://res.cloudinary.com/dnqhrr6jk/image/upload/f_auto,q_auto/v1/Lewen%20Tours/airplane-sunset_qspuxt"
                title="Flights"
            />
            <SingleDetailsTravel
                travel_title="Flights"
                travel_details={flights_details}
            />
        </section>
    </React.Fragment>
  );
};

export default Flights;
