
import fpp7 from '../assets/images/rocket.svg'

import fpp1 from '../assets/images/Peak success.svg'
import fpp72 from '../assets/images/Growth chart.svg'
import fpp2 from '../assets/images/Profitable.svg'

function SectionWhite() {
    return (
      <section className="section-white" id="pricing">
        {/*begin container*/}
        <div className="container">
          {/*begin row*/}
          <div className="row margin-bottom-50">
            {/*begin col-md-12*/}
            <div className="col-md-12 text-center">
              <h2 className="section-title">Scale your business with Markit IQ</h2>
              <div className="separator_wrapper">
                <i className="icon icon-star-two red" />
              </div>
              <p className="section-subtitle">Loyalty and acquision is our business and it should be yours too.
Please contact us for more information about our Managed Services!
</p>

            </div>
            {/*end col-md-12*/}
          </div>
          {/*end row*/}
          {/*begin row*/}
          <div className="row">
                     {/*begin col-sm-3 */}
                     <div className="col-sm-3">
              {/*begin pricing-box */}
              <div className="pricing-box">
                {/*begin pricing-top */}
                <div className="pricing-top">
                  <h3>Launch<img style={{width:'42px', marginLeft:'10px'}}  src={fpp7}/></h3>
                  <p className="price"><span className="currency white">$</span> <span className="number white">49</span> <span className="month white">/month</span></p>
                </div>
                {/*end pricing-top */}
                {/*begin pricing-bottom */}
                <div className="pricing-bottom">
                  <ul>
                    <li>1 GB of space</li>
                    <li>200 messages</li>
                    <li>unlimited updates</li>
                    <li>1 user acounts</li>
                    <li>2 databases</li>
                  </ul>
                  <a href className="btn btn-md btn-block btn-pricing-blue">REGISTER TODAY</a>
                </div>
                {/*end pricing-bottom */}
              </div>
              {/*end pricing-box */}
            </div>
            {/*end col-sm-3 */}
            {/*begin col-sm-3 */}
            <div className="col-sm-3">
              {/*begin pricing-box */}
              <div className="pricing-box">
                {/*begin pricing-top */}
                <div className="pricing-top">
                  <h3>Starter<img style={{width:'42px', marginLeft:'10px'}}  src={fpp2}/></h3>
                  <p className="price"><span className="currency white">$</span> <span className="number white">99</span> <span className="month white">/month</span></p>
                </div>
                {/*end pricing-top */}
                {/*begin pricing-bottom */}
                <div className="pricing-bottom">
                  <ul>
                    <li>1 GB of space</li>
                    <li>200 messages</li>
                    <li>unlimited updates</li>
                    <li>1 user acounts</li>
                    <li>2 databases</li>
                  </ul>
                  <a href className="btn btn-md btn-block btn-pricing-blue">REGISTER TODAY</a>
                </div>
                {/*end pricing-bottom */}
              </div>
              {/*end pricing-box */}
            </div>
            {/*end col-sm-3 */}
            {/*begin col-sm-3 */}
            <div className="col-sm-3">
              {/*begin pricing-box */}
              <div className="pricing-box">
                {/*begin pricing-top */}
                <div className="pricing-top">
                  <h3>Growth <img style={{width:'42px', marginLeft:'10px'}}  src={fpp72}/></h3>
                  <p className="price"><span className="currency white">$</span> <span className="number white">199</span> <span className="month white">/month</span></p>
                </div>
                {/*end pricing-top */}
                {/*begin pricing-bottom */}
                <div className="pricing-bottom">
                  <ul>
                    <li>1 GB of space</li>
                    <li>200 messages</li>
                    <li>unlimited updates</li>
                    <li>1 user acounts</li>
                    <li>2 databases</li>
                  </ul>
                  <a href className="btn btn-md btn-block btn-pricing-featured">REGISTER TODAY</a>
                </div>
                {/*end pricing-bottom */}
              </div>
              {/*end pricing-box */}
            </div>
            {/*end col-sm-3 */}
            {/*begin col-sm-3 */}
            <div className="col-sm-3">
              {/*begin pricing-box */}
              <div className="pricing-box">
                {/*begin pricing-top */}
                <div className="pricing-top">
                  <h3>Scale<img style={{width:'42px', marginLeft:'10px'}}  src={fpp1}/></h3>
                  <p className="price"><span className="currency white">$</span> <span className="number white">299</span> <span className="month white">/month</span></p>
                </div>
                {/*end pricing-top */}
                {/*begin pricing-bottom */}
                <div className="pricing-bottom">
                  <ul>
                    <li>1 GB of space</li>
                    <li>200 messages</li>
                    <li>unlimited updates</li>
                    <li>1 user acounts</li>
                    <li>2 databases</li>
                  </ul>
                  <a href className="btn btn-md btn-block btn-pricing-blue">REGISTER TODAY</a>
                </div>
                {/*end pricing-bottom */}
              </div>
              {/*end pricing-box */}
            </div>
            {/*end col-sm-3 */}
          </div>
          {/*end row*/}
          {/*begin row*/}
          <div className="row">
            {/*begin col-md-12*/}
            <div className="col-md-12 text-center" style={{display:"flex", justifyContent:'center', flexDirection:'column'}}>
              <p>Haven't found a plan that suits your needs?<span className="bold"> Contact us</span> for <span className="bold"> Managed Services</span> pricing!</p>
              <a href className="btn btn-md btn-block btn-pricing-blue" >Contact Us Now</a>
            </div>
            {/*end col-md-12*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}
      </section>
    );
  }
  
  export default SectionWhite;
  