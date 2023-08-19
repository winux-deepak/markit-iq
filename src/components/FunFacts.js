

function FunFacts() {
    return (
        <div className="fun-facts-wrapper">
            <div className="image-overlay"></div>
            <div className="container fun-facts-inside">
                <div className="row" style={{display:'flex', justifyContent:'center'}}>
                    <div className="fun-facts-box text-center wow fadeIn" data-wow-delay="0.15s">
                        <i className="icon icon-design-pencil-rule-streamline"></i>
                        <p className="fun-facts-title"><span className="facts-numbers">280</span><br/>MILLION INDIVIDUALS</p>
                    </div>
            
                    <div className="fun-facts-box text-center wow fadeIn" data-wow-delay="0.45s">
                        <i className="icon icon-crown-king-streamline"></i>
                        <p className="fun-facts-title"><span className="facts-numbers">630</span><br/>MILLION TRANSACTIONAL RECORDS</p>  
                    </div>
                    <div className="fun-facts-box text-center wow fadeIn" data-wow-delay="0.6s">
                        <i className="icon icon-cocktail-mojito-streamline"></i>
                        <p className="fun-facts-title"><span className="facts-numbers">264</span><br/>DATABASES</p>
                    </div>
                    <div className="fun-facts-box text-center wow fadeIn" data-wow-delay="0.75s">
                        <i className="icon icon-speech-streamline-talk-user"></i>            
                        <p className="fun-facts-title"><span className="facts-numbers">1100</span><br/>ATTRIBUTES BY INDIVIDUAL</p>        
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default FunFacts;
  