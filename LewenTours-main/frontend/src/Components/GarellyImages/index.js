import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Context from '../../Context/Context';
function GarellyImages({ openModal }) {
  const {gallery:gallery_images } = useContext(Context);
  
  return (
    <>
      <section id="about_us_text" className="gallery">
        <h1>Gallery</h1>
        <p className="paragraph4">
          Welcome again, on this page you will see pictures of our
          destinations,Hotels,travels and others, in case you are interested in
          any of them and wish to visit the place or take a picture there, we
          kindly offer that service, <Link to="/contact">contact us</Link>{" "}
          directly.
        </p>
        <div className="images-list">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="20px">
              {
                gallery_images.map(image=>(
                  <img
                    src={ image.image_url }
                    key={ image.image_id }
                    itemID={ image.image_id }
                    alt=""
                    onClick={openModal}
                  />
                ))
              }
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>
    </>
  );
}

export default GarellyImages