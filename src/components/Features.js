import featureImg from "../assets/images/feature-img.png";
import "../assets/css/new_styles.css";
function Features() {
    return (
        <section className="feature-section" id="features">
        <div className="container">
          <div className="row text-left">
            <div className="col-sm-6">
              <h3>Features</h3>
              <h5>
                Empower yourself with the ultimate resource for achieving
                excellence in IT services.
              </h5>
  
              <ul>
                <li>
                  A highly intelligent self-serve platform for programmatic
                  advertising.
                </li>
                <li>
                  Strategize efficiently and improve offline-to-online matching to
                  enable you to accurately target the perfect consumer or business
                  audience for any digital campaign.
                </li>
                <li>
                  Navigate and capitalize on consumer behavior, demographics,
                  purchases, interests, domicile changes, political activity, and
                  business categories including company, decision makers,
                  demographics, functional areas, industry, and every employment
                  type.
                </li>
                <li>
                  Expand your campaign's reach and significantly exemplify user
                  adoption.
                </li>
              </ul>
              <a href="#pricing" className="btn btn-theme margin-45">
                VIEW DETAILS
              </a>
            </div>
  
            <div className="col-sm-6">
              <img src={featureImg} alt="image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
        
    );
  }
  
  export default Features;
  