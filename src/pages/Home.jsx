import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <>
  <main className="main">
    <div className="hero-section">
      <div className="hero-wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-6">
              <div className="hero-content">
                <h6
                  className="hero-sub-title wow animate__animated animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".25s"
                >
                  {" "}
                  Our Money Your Profit{" "}
                </h6>
                <h1
                  className="hero-title wow animate__animated animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".50s"
                >
                  {" "}
                  Funding Promising <span>Forex Traders</span> Worldwide{" "}
                </h1>
                <p
                  className="wow animate__animated animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".75s"
                >
                  {" "}
                  Octane Exchange offers up to $200,000 funds to financially
                  empower global traders and help them earn full-time.{" "}
                </p>
                <div
                  className="hero-btn wow animate__animated animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <a href="#" className="theme-btn">
                    Get Fund
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div
                className="hero-img wow animate__animated animate__fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                <img src="assets/img/hero/banner1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape">
          <div className="hero-shap-1" />
          <img
            className="hero-shape-2"
            src="assets/img/shape/2.svg"
            alt=""
            style={{ opacity: "0.3" }}
          />
        </div>
      </div>
    </div>
   
    <div className="about-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-left wow animate__animated animate__fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >
              <div className="about-img">
                <img src="assets/img/about/fund1.png" alt="" />
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
                <h2 className="site-title">
                  Generate Income <span>Automatically</span>
                </h2>
              </div>
              <p className="about-text">
                You can earn a regular passive revenue of 3% without paying any
                hidden charges or investing extra time with us.
              </p>
              <div className="about-list-wrapper">
                <ul className="about-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="fas fa-check-circle" />
                    </div>
                    <div className="text">
                      <p>IEO LAUNCHPAD</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fas fa-check-circle" />
                    </div>
                    <div className="text">
                      <p>LISTING</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="fas fa-check-circle" />
                    </div>
                    <div className="text">
                      <p>Trading</p>
                    </div>
                  </li>
                </ul>
              </div>
              <a href="about.html" className="theme-btn">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="choose-area bg py-120 shape-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="choose-content wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >
              <div className="site-heading mb-3">
                <span className="site-title-tagline">Know Us</span>
                <h2 className="site-title text-white my-3">
                  Why This <span>Launchpad</span>
                </h2>
              </div>
             
              <div className="choose-content-wrapper">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center choose-item extra-bg">
                      <div className="flex-shrink-0">
                        <div className="choose-item-img">
                          <span>
                            <i className="pe-7s-stopwatch" />
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="choose-item-content">
                          <h5>Efficiency</h5>
                          <p>
                            {" "}
                            Our global community is always in search of the next
                            great investment. This widespread demand and
                            anticipation creates an efficient means for projects
                            to access capital.{" "}
                          </p>
                          <span className="long-down">
                            <i className="far fa-long-arrow-down" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex align-items-center choose-item extra-bg">
                      <div className="flex-shrink-0">
                        <div className="choose-item-img">
                          <span>
                            <i className="pe-7s-diamond" />
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="choose-item-content">
                          <h5>Affordability</h5>
                          <p>
                            One of the least expensive sources of financing in
                            the capital markets.
                          </p>
                          <span className="long-down">
                            <i className="far fa-long-arrow-down" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex align-items-center choose-item extra-bg">
                      <div className="flex-shrink-0">
                        <div className="choose-item-img">
                          <span>
                            <i className="pe-7s-shield" />
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="choose-item-content">
                          <h5>Reliability</h5>
                          <p>
                            State-of-the-art trading infrastructure,
                            highly-secured platform, and an in-house team of
                            some of the industry’s brightest minds.
                          </p>
                          <span className="long-down">
                            <i className="far fa-long-arrow-down" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="d-flex align-items-center choose-item extra-bg">
                      <div className="flex-shrink-0">
                        <div className="choose-item-img">
                          <span>
                            <i className="pe-7s-global" />
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <div className="choose-item-content">
                          <h5>Global Reach</h5>
                          <p>
                            Access to a global network of investors and traders
                          </p>
                          <span className="long-down">
                            <i className="far fa-long-arrow-down" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="theme-btn">
                Get Started
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="choose-img wow animate__animated animate__fadeInRight"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >
              <img src="assets/img/choose/get-fund.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="feature-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div
              className="site-heading text-center wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >
              <span className="site-title-tagline">Features</span>
              <h2 className="site-title">
                The Right <span>Place to </span>
              </h2>
              <div className="heading-divider" />
              
            </div>
          </div>
        </div>
        <div className="feature-area-wrapper">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div
                className="feature-item blur-bg-1 wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                <div className="feature-icon">
                  <img src="assets/img/icon/social-assistant.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h5>Buy Digital Assets in Seconds</h5>
                  <p>
                    Buy 60+ assets with card in seconds. Benefit from instant
                    transactions and up to 0.5% in crypto rewards. Wire
                    transfers are also available for your convenience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="feature-item blur-bg-1 wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".50s"
              >
                <div className="feature-icon">
                  <img src="assets/img/icon/phone-analytics.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h5>Great Place to Become a Pro Trader</h5>
                  <p>
                    Trade with aggregated liquidity on Octane Exchange Pro.
                    Place market and limit orders, execute automated strategies,
                    trade with margin, and open futures contracts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="feature-item blur-bg-1 wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".75s"
              >
                <div className="feature-icon">
                  <img src="assets/img/icon/block-chain.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h5>Bring Your Friends and Win Rewards</h5>
                  <p>
                    Introduce your friends to the world of digital assets and
                    get unlimited rewards. Receive $20 in crypto rewards with
                    each successful referral.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="feature-item blur-bg-1 wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".25s"
              >
                <div className="feature-icon">
                  <img src="assets/img/icon/laptop-rocket.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h5>Grow with Your Community</h5>
                  <p>
                    Earn a revenue share by joining Octane Exchange's Affiliate
                    Program. Make money every time an invited user earns
                    interest, swaps, or borrows funds.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="feature-item blur-bg-1 wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".50s"
              >
                <div className="feature-icon">
                  <img src="assets/img/icon/security-storage.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h5>Grow Your Portfolio on the Go</h5>
                  <p>
                    Buy, earn interest on your assets, borrow against them, or
                    swap between 500+ market pairs on the highly-rated Octane
                    Exchange app
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div
                className="feature-item blur-bg-1 wow animate__animated animate__fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".75s"
              >
                <div className="feature-icon">
                  <img src="assets/img/icon/exchange-balance.svg" alt="" />
                </div>
                <div className="feature-content">
                  <h5>Trading on Various Crypto Exchanges</h5>
                  <p>
                    Our highly experienced executives do trading guided by
                    reports generated through AI-based advanced analytic &amp;
                    charting tools, to offer increased returns to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="profit-area bg py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div
              className="profit-img wow animate__animated animate__fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >
              <img src="assets/img/profit/account-manager1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="profit-content wow animate__animated animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".25s"
            >
              <div className="site-heading mb-3">
                <span className="site-title-tagline">Most Facilities</span>
                <h2 className="site-title text-white">
                  Highlights for <span>Octane Exchange Traders</span>
                </h2>
              </div>
              <ul className="about-list list-unstyled">
                <li>
                  <div className="icon">
                    <span className="fas fa-check-circle" />
                  </div>
                  <div className="text">
                    <p>Dedicated Account Manager</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fas fa-check-circle" />
                  </div>
                  <div className="text">
                    <p>Get Upto 90% Profit Share</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fas fa-check-circle" />
                  </div>
                  <div className="text">
                    <p>Instant Account Access</p>
                  </div>
                </li>
              </ul>
              <a href="#" className="theme-btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="feature-area py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div
              className="site-heading text-center wow animate__ animate__fadeInUp animated"
              data-wow-duration="1s"
              data-wow-delay=".25s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.25s",
                animationName: "fadeInUp"
              }}
            >
              <span className="site-title-tagline">Business</span>
              <h2 className="site-title">
                What we <span> Different</span>
              </h2>
              <div className="heading-divider" />
              <p>
                {" "}
                Octane Exchange aims to be the best partner for you. That is why
                we have carefully thought of each and every aspect of a trader’s
                journey with Octane Exchange. Here are a few points which set us
                apart.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="feature-area-wrapper">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div
                className="service-item blur-bg-2 wow animate__ animate__fadeInUp animated"
                data-wow-duration="1s"
                data-wow-delay=".15s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.15s",
                  animationName: "fadeInUp"
                }}
              >
                <div className="service-img">
                  <img src="assets/img/icon/exchange-order.svg" alt="" />
                </div>
                <div className="service-content">
                  <a href="#">
                    <h4>Profit from The Beginning</h4>
                  </a>
                  <p>
                    The only prop firm to offer a 15% profit share from the
                    start to reward promising traders for their skills and hard
                    work.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="service-item blur-bg-2 wow animate__ animate__fadeInUp animated"
                data-wow-duration="1s"
                data-wow-delay=".25s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.25s",
                  animationName: "fadeInUp"
                }}
              >
                <div className="service-img">
                  <img src="assets/img/icon/laptop-rocket.svg" alt="" />
                </div>
                <div className="service-content">
                  <a href="#">
                    <h4>Keep up to 90% of your profit</h4>
                  </a>
                  <p>
                    In order to recognize your skills &amp; efforts, Octane
                    Exchange is offering up to 90% profit sharing with the
                    traders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="service-item blur-bg-2 wow animate__ animate__fadeInUp animated"
                data-wow-duration="1s"
                data-wow-delay=".35s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.35s",
                  animationName: "fadeInUp"
                }}
              >
                <div className="service-img">
                  <img src="assets/img/icon/currency-wallet.svg" alt="" />
                </div>
                <div className="service-content">
                  <a href="#">
                    <h4>Reach $4M Account Balance</h4>
                  </a>
                  <p>
                    If you remain consistent &amp; profitable, you will be
                    eligible for a 40% increase in account balance every 4
                    months, all the way up to $4 million.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="service-item blur-bg-2 wow animate__ animate__fadeInUp animated"
                data-wow-duration="1s"
                data-wow-delay=".45s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.45s",
                  animationName: "fadeInUp"
                }}
              >
                <div className="service-img">
                  <img src="assets/img/icon/experts-support.svg" alt="" />
                </div>
                <div className="service-content">
                  <a href="#">
                    <h4>Get a Dedicated Account Manager</h4>
                  </a>
                  <p>
                    Octane Exchange designates an account manager for every
                    trader so that you can get any of your queries answered in
                    an instance, all day every day.
                  </p>
                </div>
              </div>
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
                <img
                  src="assets/img/partner/business-insider.png"
                  alt="thumb"
                />
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

export default Home;