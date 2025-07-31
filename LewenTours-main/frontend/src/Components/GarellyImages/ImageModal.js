import React from 'react'
import Modal from "react-modal";
Modal.setAppElement("#root");

Modal.defaultStyles.overlay.backgroundColor = "rgba(0,0,0,0.5)";

const ImageModal = ({ closeModal, modalIsOpen,image }) => {
  const customStyles = {
    content: {
      position: "fixed",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "99999",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height:"calc(100vh - 30px)"
    },
  };

  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      afterOpenModal={ afterOpenModal }
      contentLabel="Example Modal"
    >
      <img 
           src={ image }
           loading="lazy"
           style={{ width: "auto", maxWidth: "90%",maxHeight: "95%" }}
           alt=""
           />
      <i 
        className="fa-solid fa-xmark close_modal"
        onClick={ closeModal }
        ></i>
    </Modal>
  );
};

export default ImageModal