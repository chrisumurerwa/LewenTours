import React, { useEffect, useState } from 'react';
import top_travelist from '../JSON/top_travellist';
import { Link } from 'react-router-dom';

const RecommendedDestinations = () => {
    const [recommended, setRecommended] = useState([]);

    useEffect(()=>{
       const DESTINATIONS_LENGTH = top_travelist.length-2;
       const START_INDEX = Math.random()*DESTINATIONS_LENGTH;
       const recommended_list = top_travelist.slice(START_INDEX, START_INDEX + 2);
       setRecommended(recommended_list);
    },[]);

  return (
    <React.Fragment>
        {
            recommended && recommended.map(destination=>(
                <Link 
                    to={ `/traveldetails/${destination.trave_details.link}`}
                    key={ destination.id } 
                    state={{
                        travel_title:destination.travel_title,
                        travel_image:destination.travel_image,
                        travel_details:destination.trave_details
                    }}>
                    <div className="recommend_card">
                        <img
                            src={ destination.travel_image }
                            alt=""
                        />
                        <h3>{ destination.travel_title }</h3>
                        <p>Destination</p>
                    </div>
            </Link>
            ))
        }
    </React.Fragment>
  )
}

export default RecommendedDestinations