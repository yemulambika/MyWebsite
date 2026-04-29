import React from "react";
import { Tag } from "antd";
import "../index.css";

function Experience() {
  return (
    <div className="experience-wrapper">
      <div className="glass-card experience-card" style={{margin : "40px"}}>
        
        {/* TITLE */}
        <h2 className="exp-title">
          💼 Web Developer Intern – Suzlon Energy Ltd
        </h2>

        {/* SUMMARY */}
        <p className="exp-summary">
          Contributed to real-world industrial applications by working on
          SCADA systems, data visualization, and full-stack development.
        </p>

        {/* CONTRIBUTIONS */}
        <h4 className="exp-heading">🚀 Key Contributions</h4>
        <ul className="exp-list">
          <li>
            Developed and optimized SQL queries for efficient data retrieval
            and reporting
          </li>
          <li>
            Built interactive dashboards using Power BI for real-time analytics
          </li>
          <li>
            Designed and developed responsive frontend components using React.js
          </li>
          <li>
            Integrated backend APIs for seamless data flow across systems
          </li>
          <li>
            Worked with SCADA systems to monitor and analyze operational data
          </li>
        </ul>

        {/* TECH STACK */}
        <h4 className="exp-heading">🧠 Tech Stack</h4>
        <div className="exp-tags">
          <Tag color="blue">React.js</Tag>
          <Tag color="green">JavaScript</Tag>
          <Tag color="purple">SQL</Tag>
          <Tag color="orange">Power BI</Tag>
          <Tag color="cyan">SCADA</Tag>
        </div>
      </div>
    </div>
  );
}

export default Experience;