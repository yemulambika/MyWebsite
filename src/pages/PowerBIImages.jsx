import React from "react";
import img1 from "../assets/power_Bi_images/fight_status.png";
import img2 from "../assets/power_Bi_images/medical_status.png";
import img3 from "../assets/power_Bi_images/visa_status.png";

function PowerBIImages() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Resume Project Screenshots</h2>
      <img src={img3} style={{ width: "80%", margin: "30px", paddingLeft : "100px"}} />
      <img src={img2} style={{ width: "80%", margin: "30px" ,paddingLeft : "100px"}} />
      <img src={img1} style={{ width: "80%", margin: "30px",paddingLeft : "100px"}} />
      
    </div>
  );
}

export default PowerBIImages;