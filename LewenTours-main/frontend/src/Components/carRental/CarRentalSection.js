import React from 'react';
import { Link } from 'react-router-dom';

const CarRentalSection = () => {
  return (
    <section id="car_rental" class="destinations_container">
        <h1 className="header">Rwanda Car Rental</h1>
        <div className="destination_grouping">
                <div className="column_destination car_rentals_column">
                    <div className="list">
                        <img src="https://res.cloudinary.com/delpedjbc/image/upload/f_auto,q_auto/v1/lewen%20tours/goakwa99kjupskdks46u" alt="" />
                        <div className="list_text">
                            <h2> Rwanda Tour Car </h2>
                            <p>This rugged Toyota Land Cruiser is built for exploring Rwanda's off-the-beaten-path destinations, from the volcanic peaks of the Virunga Mountains to the savannas of Akagera National Park.</p>
                        </div>
                    </div>
                    <div className="list">
                        <img src="https://res.cloudinary.com/delpedjbc/image/upload/f_auto,q_auto/v1/lewen%20tours/xhp8jboloqsuhdvpe1t1" alt="" />
                        <div className="list_text">
                            <h2> Lexus RX </h2>
                            <p> This sleek Lexus RX is perfect for cruising Rwanda's paved roads in comfort, with enough space for your luggage and gear for a stylish adventure.</p>
                        </div>
                    </div>
                    <div className="list">
                        <img src="https://res.cloudinary.com/delpedjbc/image/upload/f_auto,q_auto/v1/lewen%20tours/cvnmmtehxhhs6vxct2t4" alt="" />
                        <div className="list_text">
                            <h2>Toyota RAV4</h2>
                            <p>This Toyota RAV4 is a versatile SUV that's ready for both urban commutes and weekend getaways in Rwanda. Its spacious interior and capable all-wheel drive system make it a great choice for exploring the country's diverse landscapes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more_destinations">
                <Link to="/booking" className="submit_button">
                    Book Now
                </Link>
            </div>
    </section>
  )
}

export default CarRentalSection