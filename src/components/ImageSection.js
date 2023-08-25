
function ImageSection() {
    return (
        <section className="image-section">
        {/*begin image-overlay */}
        <div className="image-overlay" />
        {/*end image-overlay */}
        {/*begin container*/}
        <div className="container image-section-inside">
          {/*begin row*/}
          <div className="row">
            {/*begin col-md-6*/}
            <div className="col-md-10 col-md-offset-1 text-center margin-top-110 margin-bottom-140">
              <h2 className="large-title white">Seen enough? Let's get started.</h2>
              <p className="section-subtitle white">No Fixed Contract. No Installation Required. Trusted &amp; Secure.</p>
              <a href="#pricing" className="btn btn-lg btn-blue margin-top-20 scrool">Get Started</a>
            </div>
            {/*end col-md-6*/}
          </div>
          {/*end row*/}
        </div>
        {/*end container*/}    
      </section>
    );
  }
  
  export default ImageSection;
  