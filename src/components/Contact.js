
function Contact() {
    return (
        <section className="section-dark" id="contact">
  {/*begin container*/}
  <div className="container">
    {/*begin row*/}
    <div className="row margin-bottom-50">
      {/*begin col-md-10*/}
      <div className="col-md-10 col-md-offset-1 text-center">
        <h2 className="section-title grey">Get In Touch</h2>
        <div className="separator_wrapper_white">
          <i className="icon icon-star-two grey" />
        </div>
        <p className="section-subtitle grey">Thank you for your interest in Markit IQ! We are dedicated to empowering your business by providing access to top-tier supply from premium publishers.</p>
      </div>
      {/*end col-md-10*/}
    </div>
    {/*end row*/}
    {/*begin row*/}
    <div className="row">
      {/*begin success message */}
      <p className="contact_success_box" style={{display: 'none'}}>We received your message and you'll hear from us soon. Thank You!</p>
      {/*end success message */}
      {/*begin contact form */}
      <form id="contact-form" className="contact" action="php/contact.php" method="post">
        {/*begin col-md-6*/}
        <div className="col-md-6">
          <input className="contact-input white-input" required name="contact_names" placeholder="Full Name*" type="text" />
          <input className="contact-input white-input" required name="contact_subject" placeholder="Subject*" type="text" />
        </div>
        {/*end col-md-6*/}
        {/*begin col-md-6*/}
        <div className="col-md-6">
          <input className="contact-input white-input" required name="contact_email" placeholder="Email Adress*" type="email" />
          <input className="contact-input white-input" required name="contact_phone" placeholder="Phone Number*" type="text" />
        </div>
        {/*end col-md-6*/}
        {/*begin col-md-6*/}
        <div className="col-md-12">
          <textarea className="contact-commnent white-input" rows={2} cols={20} name="contact_message" placeholder="Your Message..." defaultValue={""} />
        </div>
        {/*end col-md-6*/}
        {/*begin col-md-12*/}
        <div className="col-md-12">
          <input defaultValue="Send Message" id="submit-button" className="contact-submit" type="submit" />
        </div>
        {/*end col-md-12*/}
      </form>
      {/*end contact form */}
    </div>
    {/*end row*/}
  </div>
  {/*end container*/}
</section>
    );
  }
  
  export default Contact;
  