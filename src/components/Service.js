
import img3 from '../assets/images/iso.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Service() {
    return (
        <section id="Service">
           
            <div className="service-layout">
                {/* <h1>POWER ANALYITICS</h1> */}
                <div className="service-content">
                 
                    <div className='service-content-right'>
                        <Carousel emulateTouch swipeable showArrows={true} axis='horizontal' showThumbs={false} className='carousel'>
                        <div className='carousel-item' >
                                {/* <img style={{width:'100px'}} src={img1}/> */}
                                <h1>POWER ANALYTICS</h1>
                                <ul>
                                    <li>
                                        Leverage the Markit IQ hub to impeccably store and integrate key metrics into your
                                        preferred data visualization and analytics tools.
                                    </li>
                                    <li>
                                        Guarantee the information utilized for both offline and online initiatives is current and
                                        accurate.
                                    </li>
                                    <li>
                                        Benefit from automatic updates in data visualization, web analytics, and storage.
                                    </li>
                                    <li>
                                        Ensure your campaigns can launch faster, scale easier, and are more personalized to
                                        your customers and their needs.
                                    </li>
                                </ul>
                                <span><a href="#pricing" className="btn btn-orange btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span>
                            </div>
                            <div className='carousel-item' >
                                {/* <img style={{width:'100px'}} src={img1}/> */}
                                <h1 >DATA HYGEINE</h1>
                                <ul>
                                    <li>Markit IQ’s robust databases are cleaned and refined so that the mailing lists, email
                                        databases,<br/> and data enrichment services performed for your business make a marked
                                        impact<br></br> immediately.
                                    </li>
                                </ul>
                                <span><a href="#pricing" className="btn btn-purple btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span>
                            </div>
                            <div className='carousel-item'>
                                {/* <img style={{width:'50px'}} src={img3}/> */}
                                <h1>DATA APPEND RESULTS</h1>
                                <ul>
                                    <li>
                                        Match and append consumer demographics to your customer file.
                                    </li>
                                    <li>
                                        A comprehensive analysis of refined segmentation provides a more in-depth view of
                                        your customers.
                                    </li>
                                    <li>
                                        Consumer data is one of the most comprehensive and invaluable demographic files
                                        available covering over 300 million individuals representing over 180 million households.
                                    </li>
                                    <span><a href="#pricing" className="btn btn-blue btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span>
                                </ul>
                            </div>
                            
                            <div className='carousel-item'>
                                {/* <img style={{width:'50px'}} src={img2}/> */}
                                <h1>CONSUMER PROFILE</h1>
                                <ul>
                                    <li>
                                        Markit IQ’s proprietary consumer data powers solutions and services to improve the
                                        reach and impact of your business.
                                    </li>
                                    <li>
                                        Leverage millions of data points on consumers from our database to formidably improve
                                        your data-driven marketing.
                                    </li>
                                </ul>
                                <span><a href="#pricing" className="btn btn-orange btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span>
                            </div>
                            
                            <div className='carousel-item'>
                                {/* <img style={{width:'50px'}} src={img3}/> */}
                                <h1>TRANSACTIONAL PROFILE</h1>
                                <ul>
                                    <li>
                                        Access real consumer transaction data to gain real insights into product selection and
                                        purchase details from recency, frequency, amount spent, as well as your customer’s
                                        lifestyle, affluence level, interests, channel proclivity and more.
                                    </li>
                                </ul>
                                
                                       
                           
                                <span><a href="#pricing" className="btn btn-purple btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span>
                            </div>
                            
                            
                            <div className='carousel-item'>
                                {/* <img style={{width:'50px'}} src={img2}/> */}
                                <h1 >DONOR PROFILE</h1>
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
                                {/* <span><a href="#pricing" className="btn btn-blue btn-lg scrool" style={{fontSize:'13px'}}>GET STARTED NOW</a></span> */}
                                
                            </div>
                        </Carousel>
                        
                    </div>
                    <div className='service-content-left'>
                        <img src={img3}/>
                    </div>
                </div>
             
            </div>
        </section>      
    );
  }
  
  export default Service;
  