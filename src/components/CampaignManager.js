/* eslint-disable no-undef */
import TabComponent from "../components/Tabs";
import { json as jsonData } from "../Data/data";
import React, { useState, useEffect } from "react";

function CampaignManager() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(jsonData);
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <section className="campaign-manager-section" id="campaign-manager">
      <div className="container">
        <div className="row text-left">
          <div className="col-sm-12 tc">
            <h3 className="tc">{data.title}</h3>
            <p className="tc">{data.description}</p>
          </div>

          <ul className="campaign-section">
            {data.campaignFeatures.map((feature, index) => (
              <li key={index}>
                <img src={feature.icon} alt="icon" />
                <h5>{feature.title}</h5>{" "}
              </li>
            ))}
          </ul>

          <TabComponent />
        </div>
      </div>
    </section>
  );
}

export default CampaignManager;
