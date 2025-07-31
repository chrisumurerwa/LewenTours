import React from 'react'
import { LINKS } from '../Constants/links';

function ContactUsText() {
  return (
    <section id="about_us_text" className="contact_us">
      <h1>Contact Us</h1>
      <p className="paragraph4">
        If you have a travel-related question or need travel advice,we are here
        for you. Please do not hesitate to <strong>contact me!</strong> I will
        do my best to answer your query As soon as possible. We can also have a video call if
        you wish! Or directly call us on whatsapp or send messages using any
        ways!
      </p>
      <ul>
        <li>
          Twitter:{" "}
          <a
            href={ LINKS.X_TWITTER }
            rel="noreferrer"
            target="_blank"
          >
            Lewen tours
          </a>
        </li>
        <li>
          Facebook:{" "}
          <a
            href={ LINKS.FACEBOOK }
            rel="noreferrer"
            target="_blank"
          >
            Lewen tours
          </a>
        </li>
        <li>
          Instagram:{" "}
          <a
            href={ LINKS.INSTAGRAM }
            rel="noreferrer"
            target="_blank"
          >
            Lewen tours
          </a>
        </li>
        <li>
          Email:{" "}
          <a href={ LINKS.EMAIL }>
            lewentours@gmail.com
          </a>
        </li>
        <li>
          WhatsApp:
          <a href={ LINKS.WHATSAPP_1 }>
            +250787712266
          </a>{" "}
          or{" "}
          <a href={ LINKS.WHATSAPP_2 }>
            +254742394021
          </a>
        </li>
        <li>
          Youtube channel:{" "}
          <a
            href={ LINKS.YOUTUBE }
            rel="noreferrer"
            target="_blank"
          >
            Lewen tours
          </a>
          .
        </li>
        {/* <li>Use the form below:</li> */}
      </ul>
    </section>
  );
}

export default ContactUsText