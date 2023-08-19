
function Blog() {
    return (
<section className="section-white" id="blog">
  {/*begin container*/}
  <div className="container">
    {/*begin row*/}
    <div className="row margin-bottom-50">
      {/*begin col-md-12*/}
      <div className="col-md-10 col-md-offset-1 text-center">
        <h2 className="section-title">Our Latest News</h2>
        <div className="separator_wrapper">
          <i className="icon icon-star-two blue" />
        </div>
        <p className="section-subtitle">There are many variations of passages of Lorem Ipsum available, but the majority<br />have suffered alteration, by injected humour, or new randomised words.</p>
      </div>
      {/*end col-md-12*/}
    </div>
    {/*end row*/}
    {/*begin row*/}
    <div className="row">
      {/*begin col-sm-4 */}
      <div className="col-sm-4">
        {/*begin blog-item */}
        <div className="blog-item">
          {/*begin popup image */}
          <div className="popup-wrapper">
            <div className="popup-gallery">
              <a href="#"><img src="http://placehold.it/800x550" className="width-100" alt="pic" /><span className="eye-wrapper2"><i className="icon icon-link eye-icon" /></span></a>
            </div>
          </div>
          {/*begin popup image */}
          {/*begin blog-item_inner */}
          <div className="blog-item-inner">
            <h3 className="blog-title"><a href="#">Affinity Designer Quick Start</a></h3>
            <a href="#" className="blog-icons"><i className="icon icon-user" /> Paul Smith</a>
            <a href="#" className="blog-icons last"><i className="icon icon-tags" /> WordPress</a>
            <p>Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.</p>
            <a href="#" className="btn btn-lg btn-small-blue scrool">Read More!</a>
          </div>
          {/*end blog-item-inner */}
        </div>
        {/*end blog-item */}
      </div>
      {/*end col-sm-4*/}
      {/*begin col-sm-4 */}
      <div className="col-sm-4">
        {/*begin blog-item */}
        <div className="blog-item">
          {/*begin popup image */}
          <div className="popup-wrapper">
            <div className="popup-gallery">
              <a href="#"><img src="http://placehold.it/800x550" className="width-100" alt="pic" /><span className="eye-wrapper2"><i className="icon icon-link eye-icon" /></span></a>
            </div>
          </div>
          {/*begin popup image */}
          {/*begin blog-item_inner */}
          <div className="blog-item-inner">
            <h3 className="blog-title"><a href="#">Solid HTML Form Structure</a></h3>
            <a href="#" className="blog-icons"><i className="icon icon-user" /> By John Doe</a>
            <a href="#" className="blog-icons last"><i className="icon icon-tags" /> Marketing</a>
            <p>Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.</p>
            <a href="#" className="btn btn-lg btn-small-blue scrool">Read More!</a>
          </div>
          {/*end blog-item-inner */}
        </div>
        {/*end blog-item */}
      </div>
      {/*end col-sm-4*/}
      {/*begin col-sm-4 */}
      <div className="col-sm-4">
        {/*begin blog-item */}
        <div className="blog-item">
          {/*begin popup image */}
          <div className="popup-wrapper">
            <div className="popup-gallery">
              <a href="#"><img src="http://placehold.it/800x550" className="width-100" alt="pic" /><span className="eye-wrapper2"><i className="icon icon-link eye-icon" /></span></a>
            </div>
          </div>
          {/*begin popup image */}
          {/*begin blog-item_inner */}
          <div className="blog-item-inner">
            <h3 className="blog-title"><a href="#">New WordPress Theme</a></h3>
            <a href="#" className="blog-icons"><i className="icon icon-user" /> By John Doe</a>
            <a href="#" className="blog-icons last"><i className="icon icon-tags" /> Design</a>
            <p>Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.</p>
            <a href="#" className="btn btn-lg btn-small-blue scrool">Read More!</a>
          </div>
          {/*end blog-item-inner */}
        </div>
        {/*end blog-item */}
      </div>
      {/*end col-sm-4*/}
    </div>
    {/*end row*/}
  </div>
  {/*end container*/}
</section>
    );
  }
  
  export default Blog;