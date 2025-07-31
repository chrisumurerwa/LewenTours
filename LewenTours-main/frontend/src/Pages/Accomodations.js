import React, { useContext } from "react";
import FloatLeftPanelLayout from "../Components/BasicComponents/FloatLeftPanelLayout";
import MainContent from "../Components/Accomodations/MainContent";
import Context from "../Context/Context";
import all_accomodations from "../JSON/accomodations";
import { Helmet } from "react-helmet";
const Accomodations = () => {
  const { setAccomodations } = useContext(Context);
  const hotels_content = all_accomodations.filter(accomodation => accomodation.category === "Hotel");
  const apartments_content = all_accomodations.filter(accomodation => accomodation.category === "Apartment");
  const camping_content = all_accomodations.filter(accomodation => accomodation.category === "Camping");
  return (
    <React.Fragment>
        <Helmet>
            <title>Accomodations</title>
            <meta name="description" content="Lewen tours helps you book Best and affordable accomodation in Rwanda." />
            <link rel="canonical" href="https://lewentours.com/accomodations" />
        </Helmet>
        <section id="top10travels">
            <FloatLeftPanelLayout
                left_panel={{
                title: "Accomodations",
                setData: setAccomodations,
                link1: {
                    name: "Hotels",
                    data: hotels_content,
                },
                link2: {
                    name: "Apartments",
                    data: apartments_content,
                },
                link3: {
                    name: "Camping",
                    data: camping_content,
                },
                }}
                right_pannel={<MainContent />}
            />
        </section>
    </React.Fragment>
  );
};

export default Accomodations;
