import React from 'react'

function ContactForm() {
  return (
    <section id="contact_form">
      <form className="form">
        <div className="row_input">
          <div className="input_group">
            <label htmlFor="full_name">Full Name</label>
            <input type="text" name="full_name" id="full_name" required />
          </div>
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
        </div>
        <div className="website_group">
          <label htmlFor="website">Website</label>
          <input type="url" name="website" id="website" required />
        </div>
        <div className="text_area">
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="comment" required></textarea>
        </div>
        <input type="submit" name="submit" value="submit" className="submit_button" />
      </form>
    </section>
  );
}

export default ContactForm