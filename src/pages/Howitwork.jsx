import React from "react";

function Howitwork(){
    return(
        <main className="main">
  <div className="site-breadcrumb">
    <div
      className="container wow animate__animated animate__fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".25s"
    >
      <h2 className="breadcrumb-title">How it Works</h2>
      <ul className="breadcrumb-menu">
        <li>
          <a href="index-2.html">
            <i className="far fa-home" /> Home
          </a>
        </li>
        <li className="active">How it Works</li>
      </ul>
    </div>
  </div>
  <div className="faq-area py-120">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div
            className="about-left wow animate__ animate__fadeInLeft animated"
            data-wow-duration="1s"
            data-wow-delay=".25s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.25s",
              animationName: "fadeInLeft"
            }}
          >
            <div className="about-img">
              <img src="assets/img/choose/get-fund.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="about-right wow animate__ animate__fadeInUp animated"
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
              <span className="site-title-tagline">Our Word Process</span>
              <h2 className="site-title">How to Get Started</h2>
            </div>
            <p className="about-text">
              It’s the best experience you’ve ever had with obtaining funds. All
              you have to do is:
            </p>
            <div className="about-list-wrapper how-work1">
              <ul className="about-list list-unstyled">
                <li>
                  <div className="icon">
                    <span className="fas fa-check-circle" />
                  </div>
                  <div className="text">
                    <h3>Top Up Collateral</h3>
                    <p>
                      Click on the "Top Up" button. Copy the top-up address and
                      transfer the assets you wish to use as collateral.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fas fa-check-circle" />
                  </div>
                  <div className="text">
                    <h3>Your Credit Line Is Instantly Available</h3>
                    <p>
                      Once you top up, you will be able to borrow immediately
                      with no credit checks. Your available limit will be
                      calculated depending on the value of your assets.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <span className="fas fa-check-circle" />
                  </div>
                  <div className="text">
                    <h3>Start Spending</h3>
                    <p>
                      Withdraw cash or stablecoins without any delays. You will
                      be charged interest only on the amount you actually
                      borrow.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="choose-area shape-2 pt-3 pb-5">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-9">
          <div
            className="choose-content wow animate__ animate__fadeInUp  animated"
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
              <span className="site-title-tagline">PROCESS</span>
              <h2 className="site-title my-3">
                How it <span>Works </span>
              </h2>
            </div>
            {/* <p class="text-black">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</p> */}
            <div className="choose-content-wrapper how-it">
              <div className="row">
                <div className="col-md-4">
                  <div className="choose-item blur-bg-1">
                    <div className="choose-item-content">
                      <h5>Offering Loans</h5>
                      <p>
                        We provide loans to the institutional borrowers having
                        high credit scores, while keeping their digital assets
                        as collateral, enabling them to create interest enough
                        to pay our investors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="choose-item blur-bg-1">
                    <div className="choose-item-content">
                      <h5>Trading on Various Crypto Exchanges</h5>
                      <p>
                        Our highly experienced executives do trading guided by
                        reports generated through AI-based advanced analytic
                        &amp; charting tools, to offer increased returns to you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="choose-item blur-bg-1">
                    <div className="choose-item-content">
                      <h5>Mining Crypto-Currencies</h5>
                      <p>
                        Investing big to generate an extensive cloud-mining
                        network for mining various cryptocurrencies while
                        following a non-stop mining procedure, as well as
                        precision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 text-center">
          <div
            className="choose-img wow animate__ animate__fadeInRight  animated"
            data-wow-duration="1s"
            data-wow-delay=".25s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.25s",
              animationName: "fadeInRight"
            }}
          >
            <img src="assets/img/profit/01.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    )
}
export default Howitwork;