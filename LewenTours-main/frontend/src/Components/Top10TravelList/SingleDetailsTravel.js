import React, { useContext } from 'react';
import HTMLRender from '../BasicComponents/HTMLRender';
import Context from '../../Context/Context';
import RecommendedDestinations from '../RecommendedDestinations';
import all_destinations from "../../JSON/destinations";
import DestinationCard from '../Destinations/DestinationCard';

const SingleDetailsTravel = ({ travel_title,travel_details }) => {
  const { openModal } = useContext(Context);
  const parks_content = all_destinations.filter(destination => destination.category === "National Parks");
  
  return (
    <section id="single_details">
        <div className="single_container">
            <div className="left_details">
                <h2>{travel_title}</h2>
                <p>
                    <HTMLRender text={ travel_details.description } Element={"p"}/>
                </p>
                <div className="single_gallery">
                    {
                        travel_details.gallery.map((gallery) => (
                            <img 
                                src={gallery.image} 
                                key={gallery.public_key} 
                                alt="" 
                                loading="lazy"
                                onClick={ openModal }
                            />
                        ))
                    }
                </div>
                {
                    travel_title==="National Parks" && parks_content.length > 0 && (
                        parks_content.map(national_park=>(
                            <DestinationCard
                                key={ national_park.id }
                                destin={ national_park }
                            />
                        ))
                    )
                }

            </div>
            <div className="right_details">
                <h2>Recommended</h2>
                <RecommendedDestinations />
            </div>
        </div>
    </section>
  );
}

export default SingleDetailsTravel;