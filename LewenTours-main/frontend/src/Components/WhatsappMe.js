import React from 'react';
import images from '../Constants/images';

const WhatsappMe = () => {
  return (
    <a
        href="https://wa.me/+254742394021?text=Hello How can I get your services ?"
        target="_blank"
        rel="noreferrer"
        >
        <div className="fixed-bottom">
            <img src={ images.whatsapp } width="60" alt="Hello" />
            <p style={{ color: "white", fontWeight: "900", marginTop: ".5rem" }}>MessageUs</p>
        </div>
    </a>
  )
}

export default WhatsappMe;