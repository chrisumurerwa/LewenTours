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
          <h1>Embrace the Thrill of the Unknown</h1>
          <p className="paragraph1">
            Are you tired of the typical tourist destinations and looking to
            step out of your comfort zone? Adventure travel may be the perfect
            solution for you! Here are four reasons why you should book an
            adventure travel experience:
          </p>
          <ul className="days-week">
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Connect with nature</span>
            </li>
            <li>
              <i className="fa-solid fa-check"></i>
              <span>Experience other cultures</span>
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