import dataImg from "../assets/images/business-people-gather-to-analyze-marketing-and-in-MiQ2.jpg";
import marketingImg from "../assets/images/marketing-img.png";
import cloneModeling from "../assets/images/clone-modelling.png";
import dataHygine from "../assets/images/data-hygine.svg";
import consumerIcon from "../assets/images/consumer-icon.svg";
import donorIcon from "../assets/images/donor-icon.svg";




import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ManagedServices() {
  return (
    <section className="managed-services-section" id="managed-services">
      <div className="container">
        <div className="row text-left">
          <div className="col-sm-12 tc">
            <h3 className="tc">MANAGED SERVICES</h3>
            <h5 className="tc">
            Unveil the magic behind achieving unparalleled marketing success. With Markit IQ, you're always ahead of the curve. We constantly adapt and grow, ensuring you're aligned with the freshest marketing trends.
            </h5>
          </div>

          <div className="manage-service">
            <div className="col-sm-6">
              <img src={dataImg} alt="image" className="img-fluid" />
            </div>
            <div className="col-sm-6">
              <h3 className="blue">DATA</h3>
              <ul>
                <li>
                  Data is the new black and must be utilized. It can be an
                  extremely effective tool for customer acquisition, if used
                  properly.
                </li>
                <li>
                  High Performance Campaigns - Devise the best plan before
                  launching your campaign - Go beyond Google Ads, SEO, Digital
                  Ads, and websites to build lasting relationships. Envision a
                  campaign that feels like the real customer experience. Plan
                  for performance and get a competitive edge to keep up with
                  your ever-changing business objectives. Markit IQ services are
                  continuously tested and improved to support new and emerging
                  marketing channels to store and analyze collected client data
                  that converge with the evolving needs of your growing
                  business.
                </li>
              </ul>
            </div>
          </div>

          <div className="manage-service">
            <div className="col-sm-6">
              <h3 className="blue">MARKETING CAMPAIGNS</h3>
              <ul>
                <li>
                  <strong>Strategic options -</strong> Multichannel marketing
                </li>
                <li>
                  <strong>Split testing</strong>
                  <br />
                  Testing out various subject lines and audience segments will
                  isolate the areas that are delivering the highest ROI and
                  allow for a roll-out to the proven winner.
                </li>
                <li>
                  <strong>Frequency Mailing</strong>
                  <br />
                  For a proven lift to overall campaign performance, Markit IQ
                  works to develop an impactful re-mail strategy.
                </li>
                <li>
                  <strong>Analytics</strong>
                  <br />
                  Provided the responder universe is large enough, our expert
                  analyst team will create poignant campaign profiles to help
                  drive future marketing decisions relative to creative design
                  and target markets.
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <img src={marketingImg} alt="image" className="img-fluid" />
            </div>
          </div>

          <div className="manage-service">
            <div className="col-sm-6">
              <img src={cloneModeling} alt="image" className="img-fluid" />
            </div>
            <div className="col-sm-6">
              <h3 className="blue">CLONE MODELLING</h3>
              <ul>
                <li>
                  When you are facing increased competition and your acquisition
                  efforts and more challenging, membership is stagnant and
                  conversion opportunities are reduced, Markit IQ clone
                  modelling can help.
                </li>
                <li>
                  Reduce marketing acquisition costs and convert prospects into
                  highly engaged customers.
                </li>
                <li>
                  A remarkable solution that predicts how closely prospects
                  resemble your “best” customers. The best approach is centered
                  around:
                  <ul>
                    <li>Identifying your existing best customers.</li>
                    <li>
                      Employing advanced statistical analysis and custom
                      modeling to identify prospect households who "look like"
                      your best customers.
                    </li>
                    <li>
                      Reaching these "best" prospects through a cross-channel
                      media strategy designed to engage and convert these
                      prospects to customers.
                    </li>
                  </ul>
                </li>
                <li>
                  Steps to Clone Modelling
                  <ul>
                    <li>
                      Define the customer segment you want to clone - define
                      your prospect audience.
                    </li>
                    <li>
                      Identify the customer segment to be cloned based upon a
                      key financial metric.
                    </li>
                    <li>
                      Append 3rd party demographic, lifestyle and behavioral
                      data.
                    </li>
                    <li>
                      Build the clone model - identify attributes that will
                      represent the attributes of your best customer - examine
                      gross sales, gross margin operating profit or other
                      financial metrics.
                    </li>
                    <li>
                      Score the prospect universe - determine which prospects
                      are most likely to look like your best customers.
                    </li>
                    <li>
                      Eliminate your existing customers - including existing
                      customers is a waste of advertising capital.
                    </li>
                    <li>
                      Reach out to the clone model target audience - utilize a
                      variety of messaging strategies to engage these prospects
                      through any addressable marketing channel: direct mail,
                      email, display, social and/or mobile digital media.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="manage-service">
            <div className="col-sm-6">
              <h3 className="blue">POWER ANALYITICS</h3>
              <ul>
                <li>
                  Leverage the Markit IQ hub to impeccably store and integrate
                  key metrics into your preferred data visualization, analytics
                  tools.
                </li>
                <li>
                  Benefit from automatic updates in data visualization, web
                  analytics, and storage.
                </li>
                <li>
                  Guarantee the information utilized for both offline and online
                  initiatives is current and accurate.
                </li>
                <li>
                  Ensure your campaigns can launch faster, scale easier, and are
                  more personalized to your customers and their needs.
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <div className="carousel-section">
                <Carousel
                  emulateTouch
                  swipeable
                  showArrows={true}
                  axis="horizontal"
                  showThumbs={false}
                  className="carousel"
                >
                  <div className="carousel-item">
                    <img src={dataHygine} alt="image" className="img-fluid" />
                    <h3 className="tc">DATA HYGEINE</h3>
                    <p>
                      Markit IQ's robust databases are cleaned and refined so
                      that the mailing lists, email databases, and data
                      enrichment services performed for your business make a
                      marked impact immediately.
                    </p>
                  </div>

                  <div className="carousel-item">
                    <img src={dataHygine} alt="image" className="img-fluid" />
                    <h3>DATA APPEND RESULTS</h3>
                    <ul>
                      <li>
                        Match and append consumer demographics to
                        your&nbsp;customer&nbsp;file.
                      </li>
                      <li>
                        A comprehensive analysis of refined segmentation
                        provides a more in-depth view of your customers.
                      </li>
                      <li>
                        Consumer data is one of the most comprehensive and
                        invaluable demographic files available covering over 300
                        million individuals representing over 180 million
                        households.
                      </li>
                      {/* <span>
                        <a
                          href="#pricing"
                          className="btn btn-blue btn-lg scrool"
                          style={{ fontSize: "13px" }}
                        >
                          GET STARTED NOW
                        </a>
                      </span> */}
                    </ul>
                  </div>

                  <div className="carousel-item">
                    <img src={consumerIcon} alt="image" className="img-fluid" />
                    <h3>CONSUMER PROFILE</h3>
                    <ul>
                      <li>
                        Markit IQ's proprietary consumer data powers solutions
                        and services to improve the reach and impact of your
                        business.
                      </li>
                      <li>
                        Leverage millions of data points on consumers from our
                        database to formidably improve your data-driven
                        marketing.
                      </li>
                    </ul>
                    {/* <span>
                      <a
                        href="#pricing"
                        className="btn btn-orange btn-lg scrool"
                        style={{ fontSize: "13px" }}
                      >
                        GET STARTED NOW
                      </a>
                    </span> */}
                  </div>

                  <div className="carousel-item">
                    <img src={consumerIcon} alt="image" className="img-fluid" />
                    <h3>TRANSACTIONAL PROFILE</h3>
                    <ul>
                      <li>
                        Access real consumer transaction data to gain real
                        insights into product selection and purchase details
                        from recency, frequency, amount spent, as well as your
                        customer's lifestyle, affluence level, interests,
                        channel proclivity&nbsp;and&nbsp;more.
                      </li>
                    </ul>

                    {/* <span>
                      <a
                        href="#pricing"
                        className="btn btn-purple btn-lg scrool"
                        style={{ fontSize: "13px" }}
                      >
                        GET STARTED NOW
                      </a>
                    </span> */}
                  </div>

                  <div className="carousel-item">
                    <img src={donorIcon} alt="image" className="img-fluid" />
                    <h3>DONOR PROFILE</h3>
                    <ul>
                      <li>
                        Acquire new donors, reactivate lapsed donors and
                        raise&nbsp;more&nbsp;funds.
                      </li>
                      <li>
                        Utilize the only donor co-op guided by fundraising
                        marketing experts that include multiple data sets, the
                        most predictive of which is the philanthropic behavioral
                        data provided&nbsp;by&nbsp;members.
                      </li>
                    </ul>
                    {/* <span>
                      <a
                        href="#pricing"
                        className="btn btn-blue btn-lg scrool"
                        style={{ fontSize: "13px" }}
                      >
                        GET STARTED NOW
                      </a>
                    </span> */}
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManagedServices;
