import React, { useState, useEffect } from "react";

import iconBudget from "../assets/images/icon-budget.svg";
import iconTarget from "../assets/images/icon-target.svg";
import iconIncrease from "../assets/images/icon-increase.svg";
import iconSolutions from "../assets/images/icon-solutions.svg";
import iconCampaign from "../assets/images/icon-campaign.svg";
import iconAdd from "../assets/images/ad-icon.svg"
export const json = {
  title: "CAMPAIGN MANAGER",
  description:
    "A totally automated marketing campaign for your products or services focusses on your target customer with an easy-to-use interface that includes scheduling and execution of everything customer-facing, including all copy, design, and audience segments. Our best-in-class platform helps you connect with the right people, the first time!",

  campaignFeatures: [
    {
      icon: iconBudget,
      title: "Budget Friendly",
    },
    {
      icon: iconTarget,
      title: "Target Specific Customers",
    },
    {
      icon: iconIncrease,
      title: "Increase Your Brand Awareness",
    },
    {
      icon: iconSolutions,
      title: "A Long-Term and Flexible Solution",
    },
    {
      icon: iconCampaign,
      title: "Measure the Effectiveness of Your Campaign",
    },
    {
      icon: iconAdd,
      title: "Start a Programmatic Ad and Print Campaign in minutes",
    },
  ],
};



