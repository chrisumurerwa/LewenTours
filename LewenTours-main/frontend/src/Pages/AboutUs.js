import React from 'react';
import FollowOnYoutube from '../Components/FollowOnYoutube';
// import ContactForm from '../Components/ContactForm';
import AboutUsText from '../Components/AboutUsText';
import RecentPost from '../Components/RecentPosts';
import { Helmet } from "react-helmet"

function AboutUs() {
  return (
    <React.Fragment>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="Lewen tours is a limited company, in the tourism and service sector, that facilitates tours and trips for individuals, groups and or organizations in different countries" />
            <link rel="canonical" href="https://lewentours.com/about" />
        </Helmet>
        <section id="aboutus">
            <div className="about">
                <AboutUsText />
            </div>
            <div className="side_pannel">
                <FollowOnYoutube className="follow_youtube" />
                <RecentPost />
            </div>
        </section>
    </React.Fragment>
  );
}

export default AboutUs