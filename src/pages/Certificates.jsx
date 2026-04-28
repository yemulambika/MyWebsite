import React from "react";
import { Card, Row, Col } from "antd";
import GFG from "../assets/GFG.jpg"
import reactCertificate from "../assets/React.png"
import Data_Structure from "../assets/Data_Structure.png"
import SQL from "../assets/SQL.png"

function Certificates() {
  return (
    <div style={{ padding: "40px" }}>
      <Row gutter={[16, 16]}>
        
        <Col span={8}>
  <Card
    title="Data Structure and Algorithms"
    cover={
      <img
        alt="certificate"
        src={Data_Structure}
      />
    }
  >
    Issued by Scaler
  </Card>
</Col>
 <Col span={8}>
  <Card
    title="Database and SQL"
    cover={
      <img
        alt="certificate"
        src={SQL}
      />
    }
  >
    Issued by Scaler
  </Card>
</Col>

        <Col span={8}>
          <Card
    title="Data Structure and Algorithms"
    cover={
      <img
        alt="certificate"
        src={GFG}
      />
    }
  >
    Issued by Scaler
  </Card>
        </Col>

        

        <Col span={8}>
          <Card
    title="React"
    cover={
      <img
        alt="certificate"
        src={reactCertificate}
      />
    }
  >
    Issued by Scaler Topics
  </Card>
        </Col>

      </Row>
    </div>
  );
}

export default Certificates;