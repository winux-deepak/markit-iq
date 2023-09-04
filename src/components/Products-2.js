import computer from "../assets/images/Computer.svg";
import fpp3 from "../assets/images/Target.svg";
import fpp4 from "../assets/images/Personnel.svg";
import fpp45 from "../assets/images/Search.svg";
import fpp6 from "../assets/images/Teamwork.svg";
import fpp7 from "../assets/images/navigator.svg";
function Products2() {
  return (
    <div id="">
      <div className="container products">
        <div className="image-overlay" />

        <div className="container image-section-inside">
          <div
            className="row margin-bottom-30"
            style={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div
              className="col-md-12 text-center"
              style={{
                display: "flex",
                gap: "20px",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3 className="section-title">
              Dive deep into the world where our cutting-edge platform connects you to the right audience effortlessly.
              </h3>
              <div className="separator_wrapper">
                <i className="icon icon-star-two red"></i>
              </div>
              <p className="section-subtitle">
                Market IQ provides a suite of digital products and services to
                grow your business. Utilize our data driven platform and
                interactive dashboard to realize the most effective Digital and
                Social solutions to improve business organization, brand
                identify, and target new potential clients to expand your
                business network. With over 15 years of experience with top
                brands and advertisers, Market IQ leverages only source data to
                identify individuals and is comprised of:
              </p>
              <span className="products-button-mobile">
                <a href="#pricing" className="btn btn-lg btn-blue">
                  GET STARTED NOW
                </a>
              </span>
            </div>

            <div className="product-cards" style={{ textAlign: "left" }}>
              <div className="product-card">
                <h5>
                  <img src={computer} /> PERSONALIZED STORE FRONT
                </h5>
                <p>
                  Launch e-commerce integrations in all the places customers
                  currently purchase from.
                </p>
              </div>
              <div className="product-card">
                <h5>
                  <img src={fpp3} /> PARTNERS
                </h5>
                <p>
                  Grow your business through partnerships like Amazon Ads with
                  an extended reach of 300 Million Customers.
                </p>
              </div>
              <div className="product-card">
                <h5>
                  <img src={fpp7} /> IMPACT NAVIGATOR
                </h5>
                <p>
                  Plan and budget better with SaaS based real market trials to
                  gauge reach and impact.
                </p>
              </div>

              <div className="product-card">
                <h5>
                  <img src={fpp6} /> SOCIAL
                </h5>
                <p>
                  Intuitive and user-friendly apps across multiple platforms to
                  keep clients connected.
                </p>
              </div>
              <div className="product-card">
                <h5>
                  <img src={fpp4} /> LOCAL
                </h5>
                <p>
                  Our platform transforms data into personalized and engaging
                  shopping experiences.
                </p>
              </div>
              <div className="product-card">
                <h5>
                  <img src={fpp45} /> SEARCH
                </h5>
                <p>
                  Plan and budget better with SaaS based real market trials to
                  gauge reach and impact.
                </p>
              </div>
              {/*          
      
            <span className='product-btn'><a href="#pricing" className="btn btn-lg btn-blue" >GET STARTED NOW</a></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products2;
