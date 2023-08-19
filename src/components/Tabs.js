import React, { useState } from "react";
import ottImg from "../assets/images/ott-campaign-img.png";

function Tab({ data, isActive, handleClick }) {
  const handleClickTab = (e) => {
    e.preventDefault();
    handleClick(data);
  };

  return (
    <li onClick={handleClickTab} className={isActive ? "active" : null}>
      <a href="#">{data.name}</a>
    </li>
  );
}

function Tabs({ tabData, activeTab, changeTab }) {
  return (
    <ul className="nav nav-tabs">
      {tabData.map((tab) => (
        <Tab
          key={tab.name}
          data={tab}
          isActive={activeTab.name === tab.name} // Update isActive condition
          handleClick={changeTab}
        />
      ))}
    </ul>
  );
}

function Content({ activeTab }) {
  return (
    <div>
      {activeTab.name === "RECURRING CAMPAIGNS" ? (
        <section className="panel panel-success">
          <div className="tab-content-section">
            <img src={ottImg} alt="img" className="img-fluid" />
            <div className="tab-text">
              <h5>RECURRING CAMPAIGNS</h5>
              <p>
                Precise audience targeting extends your reach with viewers
                across all their devices and keep your message top-of-mind
                through a variety of advertising formats.
              </p>
              <ul>
                <li>Reasonable friendly engagement</li>
                <li>Variety with ad formats</li>
                <li>Precise audience targeting</li>
                <li>
                  Improved viewability - track how long users play your ad
                </li>
              </ul>
              <p>
                OTT (OVER-THE-TOP) ADVERTISING: EXPAND YOUR REACH THROUGH
                STREAMING OR VIDEO ON
              </p>
              <h5>DEMAND (VOD)</h5>
              <p>
                Target your audience with pinpoint accuracy and ensure user
                experience variety.
              </p>
              <ul>
                <li>Nearly 100% viewable and non-skippable</li>
                <li>Audience targeted with pinpoint accuracy</li>
                <li>Increase reach and frequency of ads</li>
                <li>Frequency caps ensure user experience variety</li>
              </ul>
            </div>
          </div>
        </section>
      ) : null}
      {activeTab.name === "OTT / CTV CAMPAIGN" ? (
        <section className="panel panel-success">
        <div className="tab-content-section">
          <img src={ottImg} alt="img" className="img-fluid" />
          <div className="tab-text">
            <h5>OTT / CTV CAMPAIGN</h5>
            <p>
              Precise audience targeting extends your reach with viewers
              across all their devices and keep your message top-of-mind
              through a variety of advertising formats.
            </p>
            <ul>
              <li>Reasonable friendly engagement</li>
              <li>Variety with ad formats</li>
              <li>Precise audience targeting</li>
              <li>
                Improved viewability - track how long users play your ad
              </li>
            </ul>
            <p>
              OTT (OVER-THE-TOP) ADVERTISING: EXPAND YOUR REACH THROUGH
              STREAMING OR VIDEO ON
            </p>
            <h5>DEMAND (VOD)</h5>
            <p>
              Target your audience with pinpoint accuracy and ensure user
              experience variety.
            </p>
            <ul>
              <li>Nearly 100% viewable and non-skippable</li>
              <li>Audience targeted with pinpoint accuracy</li>
              <li>Increase reach and frequency of ads</li>
              <li>Frequency caps ensure user experience variety</li>
            </ul>
          </div>
        </div>
      </section>
      ) : null}
      {activeTab.name === "DIGITAL DISPLAY CAMPAIGNS" ? (
         <section className="panel panel-success">
         <div className="tab-content-section">
           <img src={ottImg} alt="img" className="img-fluid" />
           <div className="tab-text">
             <h5>DIGITAL DISPLAY CAMPAIGNS</h5>
             <p>
               Precise audience targeting extends your reach with viewers
               across all their devices and keep your message top-of-mind
               through a variety of advertising formats.
             </p>
             <ul>
               <li>Reasonable friendly engagement</li>
               <li>Variety with ad formats</li>
               <li>Precise audience targeting</li>
               <li>
                 Improved viewability - track how long users play your ad
               </li>
             </ul>
             <p>
               OTT (OVER-THE-TOP) ADVERTISING: EXPAND YOUR REACH THROUGH
               STREAMING OR VIDEO ON
             </p>
             <h5>DEMAND (VOD)</h5>
             <p>
               Target your audience with pinpoint accuracy and ensure user
               experience variety.
             </p>
             <ul>
               <li>Nearly 100% viewable and non-skippable</li>
               <li>Audience targeted with pinpoint accuracy</li>
               <li>Increase reach and frequency of ads</li>
               <li>Frequency caps ensure user experience variety</li>
             </ul>
           </div>
         </div>
       </section>
      ) : null}
      {activeTab.name === "SCHEDULED DIRECT MAIL CAMPAIGNS" ? (
         <section className="panel panel-success">
         <div className="tab-content-section">
           <img src={ottImg} alt="img" className="img-fluid" />
           <div className="tab-text">
             <h5>SCHEDULED DIRECT MAIL CAMPAIGNS</h5>
             <p>
               Precise audience targeting extends your reach with viewers
               across all their devices and keep your message top-of-mind
               through a variety of advertising formats.
             </p>
             <ul>
               <li>Reasonable friendly engagement</li>
               <li>Variety with ad formats</li>
               <li>Precise audience targeting</li>
               <li>
                 Improved viewability - track how long users play your ad
               </li>
             </ul>
             <p>
               OTT (OVER-THE-TOP) ADVERTISING: EXPAND YOUR REACH THROUGH
               STREAMING OR VIDEO ON
             </p>
             <h5>DEMAND (VOD)</h5>
             <p>
               Target your audience with pinpoint accuracy and ensure user
               experience variety.
             </p>
             <ul>
               <li>Nearly 100% viewable and non-skippable</li>
               <li>Audience targeted with pinpoint accuracy</li>
               <li>Increase reach and frequency of ads</li>
               <li>Frequency caps ensure user experience variety</li>
             </ul>
           </div>
         </div>
       </section>
      ) : null}
    </div>
  );
}

function TabComponent() {
  const tabData = [
    { name: "RECURRING CAMPAIGNS", isActive: true },
    { name: "OTT / CTV CAMPAIGN", isActive: false },
    { name: "DIGITAL DISPLAY CAMPAIGNS", isActive: false },
    { name: "SCHEDULED DIRECT MAIL CAMPAIGNS", isActive: false },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0]);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-list">
      <Tabs tabData={tabData} activeTab={activeTab} changeTab={changeTab} />
      <Content activeTab={activeTab} />
    </div>
  );
}

export default TabComponent;
