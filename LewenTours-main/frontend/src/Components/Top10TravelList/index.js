import React from 'react'
import { Link } from 'react-router-dom';
import top_travelist from '../../JSON/top_travellist';

function TravelList() {
    
  return (
    <section id="top10_travel_list" className="top10s">
      <div className="travel_container">
        <div className="travel_group">
          {top_travelist.map((travelist) => (
            <div className="travel_card" key={travelist.id}>
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
                        }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TravelList