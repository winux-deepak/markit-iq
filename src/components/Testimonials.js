
function Testimonials() {
    return (
        <div className="section-testimonials">
  <div className="container testimonials-wrapper">
    <div className="row">
      {/*begin col-sm-5 */}
      <div className="col-sm-5">
        {/*begin testimonials-info*/}
        <div className="testimonials-info">
          <img src={"http://placehold.it/200x200"} className="author-pic" alt="John Doe" />
          <p className="author-name">Johnatan Smiths<br /><span>Founder</span></p>
        </div>
        {/*end testimonials-info*/}
      </div>
      {/*end col-sm-5 */}
      {/*begin col-sm-7 */}
      <div className="col-sm-7">
        <p className="testimonials-text">"
With over 15 years of experience with top brands and advertisers, Market IQ is a leading industry expert in the development of customized marketing technology and digital design solutions.
"</p>
      </div>
      {/*end col-sm-7 */}
    </div>
    {/*end row*/}
  </div>
  {/*end container*/}
</div>


    );
  }
  
  export default Testimonials;