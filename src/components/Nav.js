import { Link } from "react-router-dom";
import headerLogo from "../assets/images/logo.png"
function Nav() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="row">
          <div className="navbar-header">
            <button
              data-target="#navbar-collapse-02"
              data-toggle="collapse"
              className="navbar-toggle"
              type="button"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="index.html" className="navbar-brand brand scrool">
            <img src={ headerLogo } alt="footer logo"/>
            </a>
          </div>

          <div id="navbar-collapse-02" className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              {/* <li><a href="#portfolio">Portfolio</a></li> */}
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#managed-services">Managed Services</a>
              </li>
              <li>
                <a href="#campaign-manager">Campaign Manager</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li><a href="#Signin " className="purchase scrool nav-contact btn-signin">Sign In </a></li>
              {/* <li><a href="#blog">Blog</a></li> */}

              <li>
                <a href="#contact" className="purchase scrool nav-contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-mobile-contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
