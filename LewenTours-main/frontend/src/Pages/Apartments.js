import React, { useContext } from "react";
import MainContent from "../Components/Accomodations/MainContent";
import Context from "../Context/Context";
import all_accomodations from "../JSON/accomodations";
import { Helmet } from "react-helmet";

const Apartments = () => {
  const { setAccomodations } = useContext(Context);
  const apartments_content = all_accomodations.filter(accomodation => accomodation.category === "Apartment");

  React.useEffect(() => {
    setAccomodations(apartments_content);
  }, [setAccomodations, apartments_content]);

  return (
    <React.Fragment>
      <Helmet>
        <title>Apartments - Lewen Tours</title>
        <meta name="description" content="Find and book the best apartments in Rwanda with Lewen Tours. Affordable and luxury accommodations available." />
        <link rel="canonical" href="https://lewentours.com/apartments" />
      </Helmet>
      <section id="apartments">
        <div className="accomodation_container">
          <div className="sticky_card">
            {/* <h1 className="title" style={{ textAlign: 'center', margin: 0 }}>Apartments</h1> */}
          </div>
          <div className="page-header" style={{marginBottom: '16px', textAlign: 'center'}}>
            <div className="header-content">
              <h1 className="page-title" style={{marginTop: '15px'}}>Available Apartments</h1>
            </div>
          </div>
          <div className="main_content">
            <MainContent category="Apartments" />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Apartments;