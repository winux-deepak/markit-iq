

function Register() {
    return(
        <section className="section-blue no-padding" id="register">
        <div className="container-fluid">


            <div className="row">
          
                <div className="col-md-6 no-padding">
                
                    <img src="http://placehold.it/1250x1184" className="width-100" alt="register" />
                                           
                </div>
    
                <div className="col-md-6 register-inner">
                
                    <h3 className="medium-text white">Register Your Attendance Today.</h3>
                    
                    <p className="white">Curabitur quam etsum lacus etsumis nulat iaculis etsum vitae etsum nisle varius loremis sed feugiat ligula aliquam ets vitae dictis netsum et ipsum netsum et quia nihilse etsa illum sedit consequatur quias sit coloris.</p>
 
                    <p className="register_success_box" style={{display: "none"}}>We received your message and you'll hear from us soon. Thank You!</p>
       
                    
          
                    <form id="register-form" className="register" action="php/register.php" method="post">
            
                        <div className="col-md-6 no-padding-left">
                
                            <input className="register-input white-input" required="" name="register_names" placeholder="Full Name*" type="text" />
                            <input className="register-input white-input" required="" name="register_phone" placeholder="Phone Number*" type="text" />
                                                       
                        </div>
              
                        <div className="col-md-6 no-padding-left">
                        
                            <input className="register-input white-input" required="" name="register_email" placeholder="Email Adress*" type="email" />
                            <select className="register-input white-input" required="" name="register_ticket">
                                <option value="">Ticket Type*</option>
                                <option value="One Day Access">One Day Access</option>
                                <option value="Two Days Access">Two Days Access</option>
                                <option value="Three Days Access">Three Days Access</option>
                            </select>
                                                         
                        </div>
                  
                        <input value="Register Now" className="register-submit" type="submit" />
                            
                    </form>
                    
                    <p className="white italic">*We process the payment via a secure gateway.</p>
                     
                </div>

            
            </div>

    
        </div>

    
    </section>
    );
    
}

export default Register;