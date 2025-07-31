import React,{ useContext } from "react";
import GarellyImages from "../Components/GarellyImages";
import FloatLeftPanelLayout from "../Components/BasicComponents/FloatLeftPanelLayout";
import Context from "../Context/Context";
import gallery_images from "../JSON/gallery";
import { Helmet } from "react-helmet";

function Garelly() {
  const { openModal,setGallery } = useContext(Context);
  const national_parks = gallery_images.filter(image=>image.category === "National Park");
  return (
    <>
        <Helmet>
            <title>Gallery</title>
            <meta name="description" content="Lewen tours provide Relaxing image of different destinations." />
            <link rel="canonical" href="https://lewentours.com/gallery" />
        </Helmet>
        <FloatLeftPanelLayout
            left_panel={{
            title: "Gallery",
            setData: setGallery,
            link1: {
                name: "Travels",
                data: gallery_images
            },
            link2: {
                name: "National Parks",
                data: national_parks,
            },
            link3: {
                name: "Other",
                data: [],
            },
            }}
            right_pannel={<GarellyImages openModal={ openModal }/>}
        />
    </>
  );
}

export default Garelly;
