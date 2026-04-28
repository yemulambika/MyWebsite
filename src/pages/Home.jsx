import React from "react";
import { Typography, Button } from "antd";

const { Title, Paragraph } = Typography;

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <Title>Hi, I'm Ambika 👋</Title>
      <Paragraph>
        Full Stack Developer | MERN + AI/ML
      </Paragraph>

      <Button type="primary" style={{ marginRight: "10px" }}>
        <a href="">Resume</a>
      </Button>
      <Button>GitHub</Button>
    </div>
  );
}

export default Home;