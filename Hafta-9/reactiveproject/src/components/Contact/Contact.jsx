import "./contact.css";

export default function Contact() {
  return (
    <section className="container-contact-us" id="contact">
      <div className="contact-us">
        <h2>CONTACT US</h2>
        <p>
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classical at Hampden-Sydney College.
        </p>
      </div>

      <div className="container-wrap">
        {/* LEFT SIDE */}
        <div className="container-left">
          <div className="contact-info">
            <div className="info-item">
              <h4>Mobile Number</h4>
              <p>
                <a href="tel:1357733214442">+135 773 321 4442</a>
              </p>
            </div>

            <div className="info-item">
              <h4>Email Address</h4>
              <p>
                <a href="mailto:demo@demo.com">demo@demo.com</a>
              </p>
            </div>
          </div>

          <div className="contact-form">
            <h3>Make An Appointment</h3>
            <form>
              <input type="text" id="name" name="name" placeholder="Your Name" />
              <input type="email" id="email" name="email" placeholder="Your Email" />
              <textarea id="message" name="message" placeholder="Your Message"></textarea>
              <button className="btn-contact">Send</button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE — GOOGLE MAP */}
        <div className="container-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.3175199607886!2d-70.56049340577496!3d41.45402815760854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52930f8021c47%3A0x2be609d086bfb389!2sNarragansett%20House!5e0!3m2!1sgl!2str!4v1764828916883!5m2!1sgl!2str"
            width="500"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="google-map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
