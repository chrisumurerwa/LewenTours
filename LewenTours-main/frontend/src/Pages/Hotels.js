import React, { useContext } from "react";
import MainContent from "../Components/Accomodations/MainContent";
import Context from "../Context/Context";
import all_accomodations from "../JSON/accomodations";
import { Helmet } from "react-helmet";

const Hotels = () => {
  const { setAccomodations } = useContext(Context);
  const hotels_content = all_accomodations.filter(accomodation => accomodation.category === "Hotel");
  
  // Set the hotels data when component mounts
  React.useEffect(() => {
    setAccomodations(hotels_content);
  }, [setAccomodations, hotels_content]);
  
  return (
    <React.Fragment>
        <Helmet>
            <title>Hotels - Lewen Tours</title>
            <meta name="description" content="Find and book the best hotels in Rwanda with Lewen Tours. Affordable and luxury accommodations available." />
            <link rel="canonical" href="https://lewentours.com/hotels" />
        </Helmet>
        <section id="hotels">
            <div className="accomodation_container">
                <div className="sticky_card">
                    <h2 className="title">hotels</h2>
                </div>
                <div className="main_content">
                    <MainContent category="Hotels" />
                </div>
            </div>
        </section>
    </React.Fragment>
  );
};

export default Hotels; 