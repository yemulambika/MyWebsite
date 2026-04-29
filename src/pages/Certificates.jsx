import React from "react";
import { Card, Row, Col } from "antd";
import GFG from "../assets/GFG.jpg";
import reactCertificate from "../assets/React.png";
import Data_Structure from "../assets/Data_Structure.png";
import SQL from "../assets/SQL.png";
import "../index.css";

function Certificates() {
  return (
    <div className="cert-wrapper">
      <h2 className="cert-title">📜 Certifications</h2>

      <Row gutter={[24, 24]} justify="center">
        
        <Col xs={24} sm={12} md={10} lg={8}>
          <Card
            className="cert-card"
            cover={<img alt="DSA Certificate" src={Data_Structure} />}
          >
            <h3>Data Structures & Algorithms</h3>
            <p>Issued by Scaler</p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={10} lg={8}>
          <Card
            className="cert-card"
            cover={<img alt="SQL Certificate" src={SQL} />}
          >
            <h3>Database & SQL</h3>
            <p>Issued by Scaler</p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={10} lg={8}>
          <Card
            className="cert-card"
            cover={<img alt="GFG Certificate" src={GFG} />}
          >
            <h3>Data Structures (GFG)</h3>
            <p>Issued by GeeksforGeeks</p>
          </Card>
        </Col>

        <Col xs={24} sm={12} md={10} lg={8}>
          <Card
            className="cert-card"
            cover={<img alt="React Certificate" src={reactCertificate} />}
          >
            <h3>React Development</h3>
            <p>Issued by Scaler Topics</p>
          </Card>
        </Col>

      </Row>
    </div>
  );
}

export default Certificates;