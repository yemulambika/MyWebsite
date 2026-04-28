import React from "react";
import { Typography , Button } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function Contact() {
  return (
    <div style={{ padding: "60px", textAlign: "center" }}>
      <Title>Contact Me</Title>
      <Paragraph>Email: ambika@gmail.com</Paragraph>
      <Paragraph>GitHub : <a href="https://github.com/yemulambika"><Button icon={<GithubOutlined />}>GitHub</Button></a></Paragraph>
      <Paragraph>LinkedIn :   <a href="https://www.linkedin.com/in/ambika-yemul-9ab81130b"><Button icon={<LinkedinOutlined />}>GitHub</Button></a></Paragraph>
    </div>
  );
}

export default Contact;