import React from 'react'
import RecentPost from '../Components/RecentPosts';
import ContactUsText from '../Components/ContactUsText';
// import ContactForm from '../Components/ContactForm';
import FollowOnYoutube from '../Components/FollowOnYoutube';
import { Helmet } from 'react-helmet';

function ContactUs() {
  return (
    <React.Fragment>
        <Helmet>
            <title>Contact Us</title>
            <meta name="description" content="Feel Free to contact us any time, our team works 24/7" />
            <link rel="canonical" href="https://lewentours.com/contact" />
        </Helmet>
        <section id="aboutus">
            <div className="about">
                <ContactUsText />
            </div>
            <div className="side_pannel">
                <FollowOnYoutube className="follow_youtube" />
                <RecentPost />
            </div>
        </section>
    </React.Fragment>
  );
}

export default ContactUs