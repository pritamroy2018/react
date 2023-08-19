const About = () =>{
    return (
        <>
            <main className="main">
  <div className="site-breadcrumb">
    <div
      className="container wow animate__animated animate__fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".25s"
    >
      <h2 className="breadcrumb-title">About Us</h2>
      <ul className="breadcrumb-menu">
        <li>
          <a href="index-2.html">
            <i className="far fa-home" /> Home{" "}
          </a>
        </li>
        <li className="active">About Us</li>
      </ul>
    </div>
  </div>
  <div className="about-area py-120">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div
            className="about-left wow animate__animated animate__fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".25s"
          >
            <div className="about-img">
              <img src="assets/img/about/01.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="about-right wow animate__animated animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".25s"
          >
            <div className="site-heading mb-3">
              <span className="site-title-tagline">About Us</span>
              <h2 className="site-title">Who are we</h2>
            </div>
            <p className="about-text">
              Octane Exchange company is engaged in the implementation of
              blockchain technologies in the development, consumption, control
              and management of renewable energy sources. For the formation of a
              global energy self-regulating ecosystem that allows at any time to
              ensure the rational distribution of clean energy resources.
              <br />
              <br />
              An important aspect of our business is the use of currently
              unclaimed energy for mining. Octane Exchange also invests in
              private equity and other investment programs related to the use of
              blockchain technologies in the energy sector that help preserve
              the environment.
              <br />
              <br />
              We see our values. Our mission is letting our clients enter a
              better life and financial freedom. We are building some global
              energy system this. We cooperate with private companies.
              Investment programs used blockchain technology. It helps preserve
              the environment.
            </p>
            {/* <div class="about-list-wrapper">
            <ul class="about-list list-unstyled">
              <li>
                <div class="icon">
                  <span class="fas fa-check-circle"></span>
                </div>
                <div class="text">
                  <p>Take a look at our round up of the best shows</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="fas fa-check-circle"></span>
                </div>
                <div class="text">
                  <p>It has survived not only five centuries</p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="fas fa-check-circle"></span>
                </div>
                <div class="text">
                  <p>Lorem Ipsum has been the ndustry standard dummy text</p>
                </div>
              </li>
            </ul>
          </div> */}
            {/* <a href="about.html" class="theme-btn">Discover More</a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="counter-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <i className="flaticon-reward" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={40}
                data-speed={3000}
              >
                40
              </span>
              <span className="counter-sign">K</span>
            </div>
            <h6 className="title">Active Members</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <i className="flaticon-graph" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={57}
                data-speed={3000}
              >
                57
              </span>
              <span className="counter-sign">M</span>
            </div>
            <h6 className="title">Total Exchange</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <i className="flaticon-wallet" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={48}
                data-speed={3000}
              >
                48
              </span>
              <span className="counter-sign">M</span>
            </div>
            <h6 className="title">Total Withdraw</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="counter-box">
            <div className="icon">
              <i className="flaticon-world" />
            </div>
            <div>
              <span
                className="counter"
                data-count="+"
                data-to={12}
                data-speed={3000}
              >
                12
              </span>
              <span className="counter-sign">+</span>
            </div>
            <h6 className="title">Our Cover Area</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="choose-area py-120 shape-2">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div
            className="choose-content wow animate__ animate__fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay=".25s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.25s",
              animationName: "fadeInUp"
            }}
          >
            <div className="site-heading mb-3">
              <span className="site-title-tagline">Why Choose Us</span>
              <h2 className="site-title my-3">
                Reason to <span>Choose Us</span>
              </h2>
            </div>
            {/* <p class="text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p> */}
            <div className="choose-content-wrapper">
              <div className="row">
                <div className="col-md-6">
                  <div className="choose-item blur-bg-1 about-inner">
                    <div className="choose-item-img">
                      <img
                        src="assets/img/icon/internal-integration.svg"
                        alt=""
                      />
                    </div>
                    <div className="choose-item-content">
                      <h5>No strings attached</h5>
                      <p>Deposit and withdraw your tokens whenever you want</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="choose-item blur-bg-1 about-inner">
                    <div className="choose-item-img">
                      <img src="assets/img/icon/experts-support.svg" alt="" />
                    </div>
                    <div className="choose-item-content">
                      <h5>Transparent Yields</h5>
                      <p>
                        See exactly how much you’ll earn, without hidden fees
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="choose-item blur-bg-1 about-inner">
                    <div className="choose-item-img">
                      <img src="assets/img/icon/low-cost.svg" alt="" />
                    </div>
                    <div className="choose-item-content">
                      <h5>Generous rewards</h5>
                      <p>Receive everyday payouts</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="choose-item blur-bg-1 about-inner">
                    <div className="choose-item-img">
                      <img src="assets/img/icon/security-storage.svg" alt="" />
                    </div>
                    <div className="choose-item-content">
                      <h5>Dedicated Manager</h5>
                      <p>
                        Octane Exchange designates an account manager for every
                        trader
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <div
            className="choose-img wow animate__ animate__fadeInRight animated"
            data-wow-duration="1s"
            data-wow-delay=".25s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.25s",
              animationName: "fadeInRight"
            }}
          >
            <img src="assets/img/choose/01.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="partner-area bg py-120 shape-6">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div
            className="site-heading text-center wow animate__animated animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".25s"
          >
            <span className="site-title-tagline">Featured</span>
            <h2 className="site-title text-white">
              We are <span>featured in</span>
            </h2>
            <div className="heading-divider" />
            {/* <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p> */}
          </div>
        </div>
      </div>
      <div className="partner-wrapper">
        <div className="row justify-content-center">
          <div className="col">
            <div
              className="partner-item wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >
              <img src="assets/img/partner/yahoo-finance.png" alt="thumb" />
            </div>
          </div>
          <div className="col">
            <div
              className="partner-item wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".35s"
            >
              <img src="assets/img/partner/benzinga.png" alt="thumb" />
            </div>
          </div>
          <div className="col">
            <div
              className="partner-item wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".45s"
            >
              <img src="assets/img/partner/digital-journal.png" alt="thumb" />
            </div>
          </div>
          <div className="col">
            <div
              className="partner-item wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".55s"
            >
              <img src="assets/img/partner/business-insider.png" alt="thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="quote-area py-120">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div
            className="quote-img wow animate__animated animate__fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay=".25s"
          >
            <img src="assets/img/quote/01.png" alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="quote-form wow animate__animated animate__fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".25s"
          >
            <h2>Get In Touch</h2>
            {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Subject"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      cols={30}
                      rows={5}
                      className="form-control"
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="theme-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

        </>
    )
}
export default About;