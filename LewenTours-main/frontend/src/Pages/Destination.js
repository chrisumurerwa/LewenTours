import React, { Fragment, useContext } from "react";
import Destinations from "../Components/Destinations";
import FloatLeftPanelLayout from "../Components/BasicComponents/FloatLeftPanelLayout";
import all_destinations from "../JSON/destinations";
import Context from "../Context/Context";
import { Helmet } from "react-helmet";

function Destination() {
  const { setDestinations } = useContext(Context);
  const towns_content = all_destinations.filter(destination => destination.category === "Towns");
  const parks_content = all_destinations.filter(destination => destination.category === "National Parks");
  const bigogwe_content = all_destinations.filter(destination => destination.category === "Other");
  
  return (
    <Fragment>
        <Helmet>
            <title>Destinations</title>
            <meta name="description" content="You can choose an destination you want either towns, National parks and any where in Rwanda." />
            <link rel="canonical" href="https://lewentours.com/destinations" />
        </Helmet>
        <FloatLeftPanelLayout
            left_panel={{
            title: "Destinations",
            setData: setDestinations,
            link1: {
                name: "Towns",
                data: towns_content,
            },
            link2: {
                name: "National Parks",
                data: parks_content,
            },
            link3: {
                name: "Other",
                data: bigogwe_content,
            },
            }}
            right_pannel={<Destinations />}
        />
    </Fragment>
  );
}

export default Destination;
