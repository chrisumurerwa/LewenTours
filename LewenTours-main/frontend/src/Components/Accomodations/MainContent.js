import React, { useContext } from 'react'
import AccomodationCard from './AccomodationCard';
import Context from '../../Context/Context';

const MainContent = ()=>{
  const { accomodations, mainTitle } = useContext(Context);
  return (
    <>
      <h2 className="header" id="Hotels">
        { mainTitle? mainTitle : "Hotels" }
      </h2>
      {accomodations.map(
        (accomodation) =>(
            <AccomodationCard
              accomodation={accomodation}
              key={accomodation.title}
            />
          )
      )}
    </>
  );
}

export default MainContent