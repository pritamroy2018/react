

import { Link } from "react-router-dom";
const Footer = () =>{
    return(
        <>
  <footer className="footer-area shape-5">
    <div className="footer-widget">
      <div className="container">
        <div className="row footer-widget-wrapper pt-100 pb-70">
          <div className="col-md-6 col-lg-4">
            <div className="footer-widget-box about-us">
              <Link to="#" className="footer-logo">
                <img src="assets/img/logo/logo.png" alt="" />
              </Link>
              <p className="mb-20">
                {" "}
                Octane Exchange company is engaged in the implementation of
                blockchain technologies in the development
              </p>
              <div className="text-left mt-3">
                <Link
                  to="https://find-and-update.company-information.service.gov.uk/company/10481270"
                  target="_blank"
                >
                  <img src="assets/img/company-house.png" alt=""  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Company</h4>
              <ul className="footer-list">
                <li>
                  <Link to="about.php">
                    <i className="fas fa-caret-right" /> About Us
                  </Link>
                </li>
                <li>
                  <Link to="plan.php">
                    <i className="fas fa-caret-right" /> Plan
                  </Link>
                </li>
                <li>
                  <Link to="terms-and-condition.php">
                    <i className="fas fa-caret-right" /> Terms Of Service
                  </Link>
                </li>
                <li>
                  <Link to="privacy-policy.php">
                    <i className="fas fa-caret-right" /> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Quick Links</h4>
              <ul className="footer-list">
                <li>
                  <Link to="how-it-works.php">
                    <i className="fas fa-caret-right" /> How It Works
                  </Link>
                </li>
                <li>
                  <Link to="contact.php">
                    <i className="fas fa-caret-right" /> Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="faq.php">
                    <i className="fas fa-caret-right" /> FAQ's
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="footer-widget-box list">
              <h4 className="footer-widget-title">Contact</h4>
              <div className="footer-contact">
                <ul>
                  <li>
                    <i className="far fa-map-marker-alt" />
                    <img src="assets/img/a.png" width="auto" />
                  </li>
                  <li>
                    <a href="tel:+xxx xxx xxxx">
                      <i className="far fa-phone" />
                      xxx xxx xxxx
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@octaneexchange.com">
                      <i className="far fa-envelope" />
                      <span
                        className="__cf_email__"
                        data-cfemail="a9dadcd9d9c6dbdde9ccd1c8c4d9c5cc87cac6c4"
                      >
                        support@octaneexchange.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="footer-social">
                <li>
                  <Link to="#">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fab fa-youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <p className="copyright-text">
             
              © Copyright <span id="date" />
              <Link to="#"> Octane Exchange </Link> All Rights Reserved.
            </p>
          </div>
         
        </div>
      </div>
    </div>
  </footer>
  <Link to="#" id="scroll-top">
    <i className="far fa-long-arrow-up" />
  </Link>
</>

    )
} 

export default Footer;