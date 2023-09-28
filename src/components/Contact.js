function Contact() {
  return (
    <section className="section-dark" id="contact">
      <div className="container">
        <div className="row margin-bottom-50">
          <div className="col-md-10 col-md-offset-1 text-center">
            <h2 className="section-title grey">Get In Touch</h2>
            <div className="separator_wrapper_white">
              <i className="icon icon-star-two grey" />
            </div>
            <p className="section-subtitle grey">
              Thank you for your interest in Markit IQ! We are dedicated to
              empowering your business by providing access to top-tier supply
              from premium publishers.
            </p>
          </div>
        </div>
        <div className="row">
          <p className="contact_success_box" style={{ display: "none" }}>
            We received your message and you'll hear from us soon. Thank You!
          </p>
          <form
            id="contact-form"
            className="contact"
            action="php/contact.php"
            method="post"
          >
            <div className="col-md-6">
              <input
                className="contact-input white-input"
                required
                name="contact_names"
                placeholder="Full Name*"
                type="text"
              />
            </div>

            <div className="col-md-6">
              <input
                className="contact-input white-input"
                required
                name="contact_subject"
                placeholder="Subject*"
                type="text"
              />
            </div>

            <div className="col-md-6">
              <input
                className="contact-input white-input"
                required
                name="contact_email"
                placeholder="Email*"
                type="email"
              />
            </div>

            <div className="col-md-6">
              <input
                className="contact-input white-input"
                required
                name="contact_email2"
                placeholder="Confirm Email*"
                type="email"
              />
            </div>

            <div className="col-md-6">
              <input
                className="contact-input white-input"
                required
                name="company_field"
                placeholder="Company*"
                type="text"
              />
            </div>

           
            <div className="col-md-6">
              <input
                className="contact-input white-input"
                required
                name="contact_phone"
                placeholder="Phone Number*"
                type="text"
              />
            </div>

            <div className="col-md-12">
              <textarea
                className="contact-commnent white-input"
                rows={2}
                cols={20}
                name="contact_message"
                placeholder="Your Message..."
                defaultValue={""}
              />
            </div>

            <div className="col-md-12">
              <input
                defaultValue="Send Message"
                id="submit-button"
                className="contact-submit"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
