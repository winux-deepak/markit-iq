
import imac from '../assets/images/imac.png'

function OmniChannel() {
    return (
        <section className="section-blue blue-section">
        {/*begin container*/}
        <div className="container">
          {/*begin row*/}
          <div className="row">
            {/*begin col-md-6*/}
            <div className="col-md-6 margin-top-10 margin-bottom-30">
              <h3 className="medium-title white">OMNICHANNEL CAPABILITIES - FULLY INTEGRATED CAMPAIGNS</h3>
              {/* <p className="white">The primary goal of omnichannel marketing is to be present where it is most effectual. Data driven technology follows every customer and how they engage your brand.</p> */}
              <ul className="features-list-dark">
                <li className="white"><i className="icon icon-check-mark white" /> Markit IQ energizes your business with its unique implemented platform to reach consumers seamlessly across CTV, OTT, mobile, audio, desktop without changing platforms.</li>
                <li className="white"><i className="icon icon-check-mark white" /> Campaign Deployment - A real time-saver for companies who want their brand recognized, by using our state of the art Campaign Manager.</li>
                <li className="white"><i className="icon icon-check-mark white" /> API capabilities – Robust data reporting and customized scalability.</li>
                <li className="white"><i className="icon icon-check-mark white" /> Machine learning algorithms - Our data algorithms are set to maximize performance and scale your business.</li>
              </ul>

            </div>
            {/*end col-sm-6*/}
            {/*begin col-md-6*/}
            <div className="col-md-6">
              <img src={imac} className="width-100" alt="imac" />
            </div>
            {/*end col-sm-6*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
      
    );
  }
  
  export default OmniChannel;
  