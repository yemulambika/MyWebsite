import React from "react";
import { Typography, Button, Space } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function Contact() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div className="glass-card contact-card">
        <Title level={2} style={{ textAlign: "center", color: "white" }}>
          📬 Let's Connect
        </Title>

        <Paragraph
          style={{
            fontSize: "16px",
            textAlign: "center",
            color: "#cbd5f5",
          }}
        >
          I'm actively seeking opportunities in{" "}
          <b>Full Stack Development</b> and <b>AI/ML</b>.
          <br />
          Open for internships, full-time roles, and collaborations.
        </Paragraph>

        {/* EMAIL */}
        <Paragraph
          style={{
            textAlign: "center",
            color: "#e2e8f0",
            marginTop: "20px",
          }}
        >
          <MailOutlined /> <b>Email:</b>{" "}
          <a href="mailto:ambika@gmail.com" style={{ color: "#60a5fa" }}>
            ambika@gmail.com
          </a>
        </Paragraph>

        {/* BUTTONS */}
        <Space
          size="large"
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            type="primary"
            icon={<GithubOutlined />}
            href="https://github.com/yemulambika"
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            icon={<LinkedinOutlined />}
            href="https://www.linkedin.com/in/ambika-yemul-9ab81130b"
            target="_blank"
          >
            LinkedIn
          </Button>
        </Space>
      </div>
    </div>
  );
}

export default Contact;