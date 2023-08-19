
import img3 from '../assets/images/06.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Service3() {
    return (
        <section id="Service3">
           
            <div className="service-layout">
                {/* <h1>POWER ANALYITICS</h1> */}
                <div className="service-content">
                   <div className='service-content-left'>
                        <img src={img3} className='img-fluid'/>
                    </div>
                    <div className='service-content-right'>
                        <Carousel emulateTouch swipeable showArrows={true} axis='horizontal' showThumbs={false} className='carousel'>
                        <div className='carousel-item' >
                                {/* <img style={{width:'100px'}} src={img1}/> */}
                                <h3>RECURRING CAMPAIGNS</h3>
                               <p>
                                        Strategically market your products and services to your established customer base with
                                        subscription marketing while procuring and nurturing new customers. We partner with business
                                        owners like you to relentlessly work to create an incredible subscriber experience, empowering
                                        you to build long-term relationships with your subscribers.
                                </p>
                                <span><a href="#services" className="btn btn-theme btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span>
                            </div>
                            <div className='carousel-item' >
                                {/* <img style={{width:'100px'}} src={img1}/> */}
                                <h3 >OTT/CTV CAMPAIGN</h3>
                                <h6>CONNECTED TV (CTV): KEEP YOUR CLIENTS ENGAGED</h6>
                                <p>Precise audience targeting extends your reach with viewers across all their devices and keep
                                    your message top-of-mind through a variety of advertising formats.</p>
                                <ul>
                                    <li>Reasonable friendly engagement
                                    </li>
                                    <li>Variety with ad formats
                                    </li>
                                    <li>Precise audience targeting
                                    </li>
                                    <li>Improved viewability - track how long users play your ad
                                    </li>
                                </ul>
                                <span><a href="#services" className="btn btn-theme btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span>
                            </div>
                            <div className='carousel-item'>
                                {/* <img style={{width:'50px'}} src={img3}/> */}
                                <h3>OTT (OVER-THE-TOP) ADVERTISING:
                                    </h3>
                                    <h6>EXPAND YOUR REACH THROUGH STREAMING OR
VIDEO ON DEMAND (VOD)</h6>
<h6>Target your audience with pinpoint accuracy and ensure user experience variety.</h6>
                                <ul>
                                    <li>
                                    Nearly 100% viewable and non-skippable
                                    </li>
                                    <li>
                                    Audience targeted with pinpoint accuracy
                                    </li>
                                    <li>
                                    Increase reach and frequency of ads
                                    </li>
                                    <li>
                                    Frequency caps ensure user experience variety
                                    </li>
                                    <span><a href="#services" className="btn btn-theme btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span>
                                </ul>
                            </div>
                            <div className='carousel-item'>
                                {/* <img style={{width:'50px'}} src={img2}/> */}
                                <h3>DIGITAL DISPLAY CAMPAIGNS</h3>
                                <ul>
                                    <li>
                                    Our campaigns deliver full-service custom digital, direct mail and data solutions to help
your organization launch initiatives and invest capital resources dedicated to growth and
development. Automate communications through an ideal combination of multiple
channels. Digital solutions maximize a powerful marketing strategy that will help to
improve business infrastructure, identify and elevate new potential clients and expand
your business network.
                                    </li>
                                    <li>
                                    Everything customer-facing; including all copy, design, and audience segments.
Our best in class campaigns help you connect with the right people, the first time!
                                    </li>
                                </ul>
                                <span><a href="#services" className="btn btn-theme btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span>
                            </div>
                            <div className='carousel-item'>
                                {/* <img style={{width:'50px'}} src={img3}/> */}
                                <h3>SCHEDULED DIRECT MAIL CAMPAIGNS</h3>
                                <ul>
                                    <li>
                                    Confidently use a direct mail strategy to enhance your digital marketing strategy at any
point in your customer’s journey. Stay ahead of address changes to ensure accuracy
and deliverability with address verification software.
                                    </li>
                                    <li>
                                    Efficiently reach and impact your target audience and convert that audience into
customers through personalized messages and engaging content with a strong call to
action response.
                                    </li>
                                    <li>
                                    Increase the value of your business organization, procure long-term relationships and
vastly boost customer satisfaction.
                                    </li>
                                </ul>
                                
                                       
                           
                                <span><a href="#services" className="btn btn-theme btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span>
                            </div>
                            <div className='carousel-item'>
                                {/* <img style={{width:'50px'}} src={img2}/> */}
                                <h3 >DONOR PROFILE</h3>
                                <ul>
                                    <li>
                                        Acquire new donors, reactivate lapsed donors and raise more funds.
                                    </li>
                                    <li>
                                        Utilize the only donor co-op guided by fundraising marketing experts that include
                                        multiple data sets, the most predictive of which is the philanthropic behavioral data
                                        provided by members. 
                                    </li>
                                   
                                </ul>
                                <span><a href="#services" className="btn btn-theme btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span>
                                
                            </div>
                        </Carousel>
                        
                    </div>
                  
                </div>
             
            </div>
        </section>      
    );
  }
  
  export default Service3;
  