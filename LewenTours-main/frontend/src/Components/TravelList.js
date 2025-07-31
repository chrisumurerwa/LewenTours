import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import top_travelist from '../JSON/top_travellist';
import { register } from "swiper/element/bundle";
register();

function TravelList() {
  const [slides, setSlides] = useState(3);

  useEffect(()=>{
      console.log(window.innerWidth);
      if(window.innerWidth > 900)
        setSlides(3);
      else if(window.innerWidth > 640)
        setSlides(2);
      else
        setSlides(1);
  },[ slides ]);
  

  return (
    <section className="travel_list">
      <h1 className="header">TOP 10 TRAVEL LISTS</h1>
      <div className="list_group">
        <swiper-container
          slides-per-view={ slides}
          speed="1000"
          loop="true"
          css-mode="true"
          autoplay="true"
        >
          {top_travelist.map((travelist) => (
            <swiper-slide key={ travelist.id }>
              <div className="list">
                <img src={travelist.travel_image} alt="" />
                <div className="list_text">
                  <h2> {travelist.travel_title} </h2>
                  <p> {travelist.travel_text} </p>
                  <div className="list_footer">
                    <Link 
                      to={ `/traveldetails/${travelist.trave_details.link}`} 
                      className="submit_button"
                      state={{
                        travel_title:travelist.travel_title,
                        travel_image:travelist.travel_image,
                        travel_details:travelist.trave_details
                        }}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}

export default TravelList