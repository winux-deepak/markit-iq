
function Home() {
  return (
    <section id="home" className="home-wrapper">
  {/*begin gradient_overlay */}
  <div className="gradient_overlay" />
  {/*end gradient_overlay */}
  {/*begin container*/}
  <div className="container home-wrappe-inside"> 
    {/*begin row*/}
    <div className="row">
      {/*begin col-md-12*/}
      <div className="col-md-12 text-center" style={{padding:"90px"}}>
        <h1 className="home-title wow fadeIn" data-wow-delay="0.5s">ELEVATE YOUR BRAND WITH DATA DRIVEN INSIGHTS & STRATEGIES
</h1>
        <p className="home-subtitle wow fadeIn" data-wow-delay="1s">
        Market IQ tailored solutions keep you competitive and on the path to success. Our unique online tools provide what you need to create highly effective marketing strategies.
        </p>
        <a href="#products" className="btn btn-lg btn-blue scrool wow fadeIn" data-wow-delay="1.5s">Products</a>
        <a href="#campaign-manager" className="btn btn-lg btn-margin btn-white scrool wow fadeIn" data-wow-delay="1.75s">Services</a>
      </div>
      {/*end col-md-12*/}
    </div>
    {/*end row*/}
  </div>
  {/*end container*/}
</section>

  );
}

export default Home;
