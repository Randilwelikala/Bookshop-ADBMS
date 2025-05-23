import React from "react";
import "./Analysis.css";

const Analysis = () => {
  return (
    <div className="analysis-container">
      <h1>Analysis Report</h1>
      <div className="powerbi-embed">
      <iframe 
      title="bi" 
      width="1140"
       height="541.25" 
       src="https://app.powerbi.com/reportEmbed?reportId=764021bf-d5fb-4ee2-8ce3-f089bdf6fd9f&autoAuth=true&ctid=9486ac65-39d3-4d25-977c-76d9c31c0046" frameborder="0" allowFullScreen="true"></iframe>
      </div>
    </div>
  );
};


export default Analysis;