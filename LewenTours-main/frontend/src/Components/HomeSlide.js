import React from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

function HomeSlide() {

  const navigate = useNavigate()
  return (
    <section id="home">
      <div className="swipper_container">
        <swiper-container
          slides-per-view="1"
          speed="10000"
          loop="true"
          css-mode="true"
          navigation="false"
          pagination="true"
          autoplay="true"
        >
          <swiper-slide>
            <div className="swipper_element">
              <div className="image_swipper">
                <img
                  src="https://res.cloudinary.com/dnqhrr6jk/image/upload/f_auto,q_auto/v1/Lewen%20Tours/20211216_190443_bph7xa"
                  alt=""
                />
              </div>
              <div className="text_swipper">
                <h1>Lake Kivu Hotel</h1>
                <p>
                  Cleo Lake Kivu sits majestically atop the hillsides of
                  Bwishyura, Karongi District and welcomes you with breathtaking
                  views from the entrance.
                </p>
                <input
                  type="button"
                  className="submit_button"
                  value="Book Now"
                  onClick={()=>navigate("/booking")}
                />
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="swipper_element">
              <div className="image_swipper">
                <img
                  src="https://res.cloudinary.com/dnqhrr6jk/image/upload/f_auto,q_auto/v1/Lewen%20Tours/hotel-exterior_vgnmmn"
                  alt=""
                />
              </div>
              <div className="text_swipper">
                <h1>Top 10 Hotels in Rwanda</h1>
                <p>
                  Find discounts on the best Top 10 Hotels In Rwanda. we help
                  you spend less. Compare prices & save money in your travel.
                </p>
                <input
                  type="button"
                  className="submit_button"
                  value="Read More"
                  onClick={()=>navigate("/accomodations")}
                />
              </div>
            </div>
          </swiper-slide>
          {/* <swiper-slide>
            <div className="swipper_element">
              <div className="image_swipper">
                <img
                  src="https://res.cloudinary.com/dnqhrr6jk/image/upload/f_auto,q_auto/v1/Lewen%20Tours/35174428511_73e9f81c21_k-1920x1280_kd9k9o"
                  alt=""
                />
              </div>
              <div className="text_swipper">
                <h1>Gorilla Trekking</h1>
                <p>
                Venture into the heart of lush rainforests, 
                where you'll have the chance to observe mountain gorillas in their natural habitat.
                </p>
                <input
                  type="button"
                  className="submit_button"
                  value="Book Now"
                  onClick={()=>navigate("/booking")}
                  
                />
              </div>
            </div>
          </swiper-slide> */}
          <swiper-slide>
            <div className="swipper_element">
              <div className="image_swipper">
                <img
                  src="https://res.cloudinary.com/dnqhrr6jk/image/upload/f_auto,q_auto/v1/Lewen%20Tours/RwandAir-is-now-operating-three-flights-a-week-connecting-Kigali-and-Paris_zluqdp"
                  alt=""
                />
              </div>
              <div className="text_swipper">
                <h1>Flights</h1>
                <p>    
                    Unfurl your wings and explore the world! Find the perfect 
                    flight for your dream trip with our easy-to-use website and unbeatable prices. 
                    Let's take you places - wherever your wanderlust leads.
                </p>
                <input
                  type="button"
                  className="submit_button"
                  value="View Details"
                  onClick={()=>navigate("/flights")}
                />
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
}

export default HomeSlide