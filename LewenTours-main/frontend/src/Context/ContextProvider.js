import React, { useEffect, useState } from 'react';
import Context from './Context';
import all_accomodations from '../JSON/accomodations';
import all_destinations from '../JSON/destinations';
import ImageModal from '../Components/GarellyImages/ImageModal';
import gallery_images from "../JSON/gallery";

const ContextProvider = ({ children }) => {
  const [accomodations, setAccomodations] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState("");
  const [gallery, setGallery ] = useState([]);
  const [mainTitle, setMainTitle] = useState("");

  function openModal(state) {
    setModalImage(state.target.getAttribute("src"));
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const towns_content = all_destinations.filter(destination => destination.category === "Towns");
    setDestinations(towns_content);

    const hotels_content = all_accomodations.filter(accomodation => accomodation.category === "Hotel");
    setAccomodations(hotels_content);

    setGallery(gallery_images);
  },[]);

  return (
    <Context.Provider value={{ 
        accomodations, 
        setAccomodations, 
        destinations, 
        setDestinations,
        openModal,
        gallery,
        setGallery,
        mainTitle,
        setMainTitle,
      }}
        >
        <ImageModal closeModal={ closeModal } modalIsOpen={isOpen} image={ modalImage }/>
        { children }
    </Context.Provider>
  )
}

export default ContextProvider