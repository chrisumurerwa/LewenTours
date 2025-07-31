import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import destinations from '../JSON/destinations';

function TopDestinations() { 
 const [topDestination,setTopDestination]= useState([]);
 useEffect(()=>{
    const _destinations = destinations.filter(destin=>destin.rating > 4 );
    setTopDestination(_destinations);
 },[]);
  
  return (
    <section id="top_destinations">
        <div className="destinations_container">
            <h1 className="header">Top Destinations</h1>
            <div className="destination_grouping">
                <div className="column_destination">
                    {
                        topDestination.slice(0,2).map(topDest=>(
                            <div className="dest_card">
                                <Link 
                                    to={ `/traveldetails/${topDest.dest_details.link}`}
                                    state={{
                                        travel_title:topDest.title,
                                        travel_image:topDest.dest_image,
                                        travel_details:topDest.dest_details
                                        }}
                                    >
                                    <img
                                    src={ topDest.dest_image }
                                    alt=""
                                    />    
                                </Link> 
                                <h3>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Rwanda</span>
                                </h3>
                                <h2>{ topDest.title }</h2>
                                <div className="dest_stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="row_destination">
                {
                        topDestination.slice(2,4).map(topDest=>(
                            <div className="dest_card">
                                <Link 
                                    to={ `/traveldetails/${topDest.dest_details.link}`}
                                    state={{
                                        travel_title:topDest.title,
                                        travel_image:topDest.dest_image,
                                        travel_details:topDest.dest_details
                                        }}
                                    >
                                    <img
                                    src={ topDest.dest_image }
                                    alt=""
                                    />    
                                </Link>
                                <h2>{ topDest.title }</h2>
                                <div className="dest_stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <h3>
                                <i className="fa-solid fa-location-dot"></i>
                                <span>Rwanda</span>
                                </h3>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="more_destinations">
                <Link to="/destinations" className="submit_button">
                More Destinations
                </Link>
            </div>
        </div>
    </section>
  );
}

export default TopDestinations