import React from "react";
import img1 from "../assets/ai-resume-images/AI_analysis.png";
import img2 from "../assets/ai-resume-images/Analysis_result.png";
import img3 from "../assets/ai-resume-images/upload_Page.png";

function AIResumeImages() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Resume Project Screenshots</h2>
      <img src={img3} style={{ width: "100%", marginBottom: "20px" }} />
      <img src={img2} style={{ width: "100%", marginBottom: "20px" }} />
      <img src={img1} style={{ width: "100%", marginBottom: "20px" }} />
      
    </div>
  );
}

export default AIResumeImages;