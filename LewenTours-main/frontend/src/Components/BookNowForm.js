import React, { useRef, useState } from 'react';
import { register } from "swiper/element/bundle";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
register();


function OrderNowForm() {
  const form = useRef();
  const [sentLoading,setSentLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSentLoading(true);

    emailjs.sendForm('service_zqyzonw', 'template_6ylyqo7', form.current, '2cuO9rhN5cw4D773N')
      .then((result) => {
        toast.success("Order Sent Successfully! Thank you for Ordering");
        form.current.reset();
        setSentLoading(false);
      }, (error) => {
          toast.error("Oh Oh, Something went wrong!");
          setSentLoading(false);
      });
  };

  return (
    <section id="order_now">
      <div className="destinations_container">
        <h1 className="header">Book Now</h1>
        <div className="inner_container">
          <div className="order_image_text">
            <div className="order_image">
              <img
                src="https://res.cloudinary.com/dnqhrr6jk/image/upload/f_auto,q_auto/v1/Lewen%20Tours/order2_kcsl6w"
                alt=""
              />
            </div>
            <div className="order_inputs">
              <form className="order_form" ref={ form } onSubmit={ sendEmail }>
                <div className="order_group">
                  <div className="left_group">
                    <div className="input_group">
                      <label htmlFor="user_name">Full Name</label>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name" 
                        placeholder="Example: Joe Doe"
                        required
                      />
                    </div>
                    <div className="input_group">
                      <label htmlFor="user_email">Email</label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        placeholder="xyz@gmail.com"
                        required
                      />
                    </div>
                    <div className="input_group">
                      <label htmlFor="user_phone">Phone Number</label>
                      <input type="text" placeholder="+250 XXXXXXX90" name="user_phone" required/>
                    </div>
                  </div>
                  <div className="right_group">
                    <div className="input_group">
                      <label htmlFor="user_destination">Which Service?</label>
                      <select 
                        name="user_destination" 
                        id="user_destination"
                        required
                        >
                        <option value="">---Select Service---</option>
                        <option value="Gorilla Trekking">Gorilla Trekking</option>
                        <option value="Biking and hiking">Biking and hiking</option>
                        <option value="City tour">City tour</option>
                        <option value="National Park">National Park</option>
                        <option value="Accommodation">Accommodation</option>
                        <option value="Car Rental">Car Rental</option>
                        <option value="Airline Tickets">Airline Tickets</option>
                        <option value="Local Tours">Local Tours</option>
                        <option value="Itinerary">Itinerary</option>
                        <option value="Contribute to tree planting">Contribute to tree planting</option>      
                      </select>
                    </div>
                    <div className="input_group">
                      <label htmlFor="user_number">How many?</label>
                      <input
                        type="text"
                        className=""
                        id="user_number"
                        placeholder="Number of guests"
                        name="guest_number"
                      />
                    </div>
                    <div className="input_group">
                      <label htmlFor="use_arrival">Arrival Date</label>
                      <input type="date" className="" name="arrival_date"/>
                    </div>
                  </div>
                </div>
                <div className="area_group">
                  <label htmlFor="user_special">Details</label>
                  <textarea id="user_special" name="special_offer"></textarea>
                </div>
                <input
                  type="submit"
                  className="submit_button"
                  value={ sentLoading?"Loading...":"Book Now"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderNowForm;