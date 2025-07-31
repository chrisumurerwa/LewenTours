import React from 'react';
import { Link } from'react-router-dom';

const Navigation = () => {
  
  const hide_shadow = function(){
    // hide and show navigation menu on mobile devices
    const links_container = document.querySelector(".navigation .links_container");
    if(!links_container.classList.contains("hidden"))
        links_container.classList.add("hidden");
    else
        links_container.classList.remove("hidden");
  }
  return (
    <nav className="navigation">
        {/* Website Logo */}
        <div className="web_logo">
            <Link to="/">
                <img src="/web_logo.svg" alt="" />
            </Link>
        </div>
        
        {/* Navigation Menu of All Devices */}
        <div className="links_container">
            <div className="shadow_section" onClick={hide_shadow}></div>
            <ul className="links">
                <div className="close">
                    <i className="fa-solid fa-xmark" onClick={ hide_shadow }></i>
                </div>
                <li key={ 1 }>
                    <Link to="/">Home</Link>
                </li>
                <li key={ 2 }>
                    <Link to="/hotels">
                    Hotels
                    </Link>
                </li>
                <li key={ 3 }>
                    <Link to="/apartments">
                    Apartments
                    </Link>
                </li>
                <li key={ 4 }>
                    <Link to="/flights">Flights</Link>
                </li>
                {/* <li key={ 5 }>
                    <Link to="/destinations">
                    DESTINATIONS
                    </Link>
                </li> */}
                {/* <li key={ 6 }>
                    <Link to="/traveltips">Tips</Link>
                </li> */}
                {/* <li key={ 7 }>
                    <Link to="/gallery">GALLERY</Link>
                </li> */}
                <li key={ 8 }>
                    <Link to="/about">
                    About<i className="fa-solid fa-angle-down"></i>
                    </Link>
                    <div className="hover_link hover_about">
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    </div>
                </li>
            </ul>
        </div>
        <div className="book_now">
            <div id="bars_icon" onClick={ hide_shadow }>
                <i className="fa-solid fa-bars"></i>
            </div>
            <Link to="/booking" className="submit_button gold_bg">
                Book Now
            </Link>
        </div>
    </nav>
  );
}

export default Navigation