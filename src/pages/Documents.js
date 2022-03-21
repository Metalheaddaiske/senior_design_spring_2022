import React from "react";
import recent_cal from "./exchange_calendar.pdf";


const Documents = () => {
    return (
      <div>
      <h1>Invoice and Artist Confirmation Documents Here</h1>
      <embed src={recent_cal} alt='recent calendar' type="application/pdf" width="30%" height= "30%"></embed>
      </div>
    );
  };
    
  export default Documents;