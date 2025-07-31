import React from 'react'
import { LINKS } from '../Constants/links';
import { Link } from 'react-router-dom';

function AboutUsText() {
  return (
    <section id="about_us_text">
      <h1 className="header">About</h1>
      <p className="title">Hello there and welcome to Lewen tours!</p>
      <p className="paragraph1">
        <strong>"Lewen tours"</strong> is a limited company, in the tourism and
        service sector, that facilitates tours and trips for individuals, groups
        and or organizations in different countries; and we have headquarters in
        Rwanda and hope to scale to others in coming days of operation. These
        will be combined with ecological trips, including sport activities and
        relaxation, cultural linking all to the environment and promote
        conservation. The core mission of “Lewen tours' ' is to strengthen the
        tourism sector in Rwanda.
      </p>
      <p className="paragraph2">
        Our mission is to offer extraordinary tour services and promote
        transboundary tourism.
      </p>
      <p className="paragraph3">
        We also give you an opportunity to take part in conservation of
        environment through clean up activities,tree planting and Environmental
        awareness. Please contact us and ask any of these services or book{" "}
        <Link to="/booking">here</Link>
      </p>
      <p className="paragraph4">
        You can also follow me on <strong>Social Media</strong> for a
        daily moment of travel inspiration:
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
      </ul>
      <p className="paragraph7">
        If you have a travel-related question or need travel advice,we are here
        for you. Please do not hesitate to <strong>contact me!</strong> I will
        do my best to answer your query as soon as possible. We can also have a video call if
        you wish! Or directly call us on whatsapp or send messages using any
        ways!
      </p>

      <ul>
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
        {/* <li>Use the form below:</li> */}
      </ul>
    </section>
  );
}

export default AboutUsText