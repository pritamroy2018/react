const Contact = () =>{
    return (
        <>
            <main className="main">
  <div className="site-breadcrumb">
    <div
      className="container wow animate__animated animate__fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".25s"
    >
      <h2 className="breadcrumb-title">Contact Us</h2>
      <ul className="breadcrumb-menu">
        <li>
          <a href="index-2.html">
            <i className="far fa-home" /> Home
          </a>
        </li>
        <li className="active">Contact Us</li>
      </ul>
    </div>
  </div>
  <div className="contact-area py-120">
    <div className="container">
      <div className="contact-wrapper">
        <div className="row">
          <div className="col-md-4">
            <div
              className="contact-content wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <div className="contact-info-content">
                  <h5>Office Address</h5>
                  <p>
                    <img src="assets/img/a-black.png" width="auto" />
                  </p>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i className="fal fa-phone" />
                </div>
                <div className="contact-info-content">
                  <h5>Call Us</h5>
                  <p>xxx xxx xxxx</p>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i className="fal fa-envelope" />
                </div>
                <div className="contact-info-content">
                  <h5>Email Us</h5>
                  <p>
                    <a
                      href="mailto:support@octaneexchange.com"
                      className="__cf_email__"
                      data-cfemail="b4dddad2dbf4d1ccd5d9c4d8d19ad7dbd9"
                    >
                      support@octaneexchange.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i className="fal fa-envelope" />
                </div>
                <div className="contact-info-content">
                  <h5>Company Registration In</h5>
                  <p>
                    <a
                      href="https://find-and-update.company-information.service.gov.uk/company/10481270"
                      target="_blank"
                    >
                      <img src="assets/img/company.png" alt="" width={60} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div
              className="contact-form wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".50s"
            >
              <div className="contact-form-header">
                <h2>Get In Touch</h2>
                
              </div>
              <form
                method="post"
                action="https://live.themewild.com/cryptox/assets/php/contact.php"
                id="contact-form"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Your Subject"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    cols={30}
                    rows={5}
                    className="form-control"
                    placeholder="Write Your Message"
                    defaultValue={""}
                  />
                </div>
                <button type="submit" className="theme-btn">
                  Send Message <i className="far fa-paper-plane" />
                </button>
                <div className="col-md-12 mt-3">
                  <div className="form-messege text-success" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contact-map wow animate__animated animate__fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".25s"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3232031627963!2d-0.1456162242350879!3d51.50728621071277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760529b3a8a2c1%3A0x95958a457128ba12!2sDevonshire%20House%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1691837958878!5m2!1sen!2sin"
          width="100%"
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </div>
</main>

        </>
    )
}

export default Contact;