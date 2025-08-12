import React from 'react'
import { useNavigate } from 'react-router-dom';

function TopBlog() {
  const navigate = useNavigate();
  return (
    <div className="lewen_blog_container">
      <section className="lewen_blog">
        <div className="image-left">
          <img
            src="https://res.cloudinary.com/dnqhrr6jk/image/upload/f_auto,q_auto/v1/Lewen%20Tours/service_lewen_xcrpc8"
            alt=""
          />
        </div>
        <div className="text-right">
          <h1>Enjoy comfort that goes beyond expectations</h1>
          <p className="paragraph1">
             Are you tired of the same old travel routines and looking for something
    more exciting? Whether it's a luxury hotel, a cozy apartment, or the
    perfect flight, we make your journey unforgettable. Here’s why you should
    book your next stay and flight with us:
          </p>
          <ul className="days-week">
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Relax in our top-rated hotels and apartments</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span> Fly the easy way – seamless and worry-free</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Create unforgettable memories</span>
            </li>
          </ul>
          <button
            type="button"
            className="submit_button"
            onClick={() => navigate("/services")}
          >
            All Services
          </button>
        </div>
      </section>
      <div className="background_image"></div>
    </div>
  );
}

export default TopBlog