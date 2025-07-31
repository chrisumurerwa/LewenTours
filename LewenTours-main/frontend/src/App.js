import { Fragment } from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";

// Importing pages
import AboutUs from "./Pages/AboutUs";
import LandingPage from "./Pages/LandingPage";
import ContactUs from "./Pages/ContactUs";
import Garelly from "./Pages/Garelly";
import Top10 from "./Pages/Top10";
import TravelTips from "./Pages/Tips";
import Destination from "./Pages/Destination";
import Top10DetailsTravel from "./Pages/Top10TravelDetails";
import Accomodations from "./Pages/Accomodations";
import Hotels from "./Pages/Hotels";
import Apartments from "./Pages/Apartments";
import HeaderAndFooter from "./Pages/HeaderAndFooter";
import Services from "./Pages/Services";
import Booking from "./Pages/Booking";
import Flights from "./Pages/Flights";


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderAndFooter />}>
            <Route index element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/gallery" element={<Garelly />} />
            <Route path="/top10s" element={<Top10 />} />
            <Route path="/traveltips" element={<TravelTips />} />
            <Route path="/destinations" element={<Destination />} />
            <Route path="/traveldetails/:id" element={<Top10DetailsTravel />} />
            <Route path="/accomodations" element={<Accomodations />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/flights" element={<Flights />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
