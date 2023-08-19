import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
        
        <header className="header">
          <div className="main-navigation">
            <nav className="navbar navbar-expand-lg">
              <div className="container">
                <Link className="navbar-brand" to="/">
                  <img src="assets/img/logo/logo.png" alt="logo" />
                </Link>
                <div className="mobile-menu-right">
                  <a href="#" className="mobile-search-btn search-box-outer">
                    <i className="far fa-search" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon">
                      <i className="far fa-stream" />
                    </span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="main_nav">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/plan">
                        Plan
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/how-it-works">
                        How it Works
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <div className="header-nav-right">
                    <div className="header-btn">
                      <Link to="#" className="theme-btn">
                        GET Fund
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <div className="search-popup">
          <button className="close-search">
            <span className="far fa-times" />
          </button>
          <form action="#">
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                placeholder="Search Here..."
                required=""
              />
              <button type="submit">
                <i className="far fa-search" />
              </button>
            </div>
          </form>
        </div>
      </>
      
    )
}
export default Header;