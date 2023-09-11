import collaboration from "../assets/images/business-people-in-a-meeting-miq1 1.png";
import featureImg from "../assets/images/feature-img.png";
import "../assets/css/new_styles.css";
function TargetAudience() {
  return (
    <section id="target">
      <div className="container">
        <div
          className="row text-left features-container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img className="col-md-6" src={collaboration} alt="image" />

          <div
            className="col-md-6"
            style={{ display: "flex", gap: "20px", flexDirection: "column" }}
          >
            <h3>ENGAGE YOUR AUDIENCE WITH PERFECT TIMING</h3>
            <p>
              Your programmatic advertising should always leverage precision-built
              audiences and promote your business with outstanding, high-quality
              creative. The Market IQ platform combines industry-leading
              geofencing technology, limitless data sources, and tailored creative
              in any ad format to run hyper-targeted advertising campaigns. Convey
              a powerful story about campaign performance with robust dashboards
              and stunning reporting with user defined insights rooted directly in
              the report.
            </p>
            <ul style={{ listStyleType: "circle", paddingLeft: "18px" }}>
              <li>
                Establish goals, develop strategy, and build your campaign to
                deliver real results.
              </li>
              <li>
                Utilize problem solving technology to enhance strategies and
                efficiency.
              </li>
              <li>Never stop improving - evaluate, revise, and execute.</li>
            </ul>
            <span>
              <a
                href="#pricing"
                className="btn btn-lg btn-blue scrool"
                style={{ width: "200px" }}
              >
                GET STARTED NOW
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TargetAudience;
