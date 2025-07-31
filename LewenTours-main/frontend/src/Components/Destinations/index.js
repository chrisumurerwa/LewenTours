// import { useEffect, useMemo, useState } from "react";
import DestinationCard from "./DestinationCard";
import Context from "../../Context/Context";
import { useContext } from "react";

const Destinations = () => {
  const { destinations,mainTitle } = useContext(Context);
  return (
    <>
      <h2 className="header">{mainTitle? mainTitle : "Towns"}</h2>
        {
                destinations.length > 0 &&
                destinations.map((destin) => (
                    <DestinationCard 
                    destin={destin}
                    key={destin.id} 
                    />
                ))
          }
    </>
  );
};

export default Destinations;
