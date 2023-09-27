import footerLogo from "../assets/images/footer-logo.png"

function Footer() {
    return (
        <div className="footer">
        {/*begin container */}
        <div className="container">
            {/*begin row */}
            <div className="row">
            {/*begin col-md-12 */}
            <div className="col-md-12 text-center">
                {/*begin copyright */}
                <div className="copyright">
                <p className="footer-logo">
                    <img src={ footerLogo } alt="footer logo"/>
                </p>
                {/* <p>Copyright © 2016. Designed &amp; Developed by <a href="http://themeforest.net/user/bogdan_09/portfolio?ref=bogdan_09" target="_blank">Bogdan Preda</a></p> */}
                </div>
                {/*end copyright */}
                {/*begin footer_social */}
                <ul className="footer_social">
                <li>
                    <a href="#">
                    <i className="icon icon-twitter" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="icon icon-pinterest" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="icon icon-facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="icon icon-instagram" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="icon icon-skype" />
                    </a>
                </li>
                <li>
                    <a href="#">
                    <i className="icon icon-dribble" />
                    </a>
                </li>
                </ul>
                {/*end footer_social */}
            </div>
            {/*end col-md-6 */}
            </div>
            {/*end row */}
        </div>
        {/*end container */}
        </div>
    );
  }
  
  export default Footer;
  