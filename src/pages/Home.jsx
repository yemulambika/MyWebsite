import React from "react";
import { Typography, Button, Space, Tag } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import "../index.css";
import Resume from "../assets/Weather-Dashboard_photos/Ambika_Yemul_Resume.pdf"
const { Title, Paragraph } = Typography;

function Home() {
  return (
    <div className="home-wrapper">

      {/* HERO SECTION */}
      <div className="hero">

        <Title className="hero-title">
          Hi, I'm <span>Ambika</span> 👋
        </Title>

        <Paragraph className="hero-subtitle">
          Full Stack Developer (MERN) • AI/ML Enthusiast <br />
          Building scalable web apps with intelligent features
        </Paragraph>

        {/* SKILLS */}
        <div className="hero-tags">
          <Tag color="blue">React</Tag>
          <Tag color="green">Node.js</Tag>
          <Tag color="purple">MongoDB</Tag>
          <Tag color="orange">Express</Tag>
          <Tag color="cyan">Machine Learning</Tag>
          <Tag color="gold">Java</Tag>
        </div>

        {/* CTA BUTTONS */}
        <Space size="large" className="hero-buttons">
          <Button
            type="primary"
            onClick={() => window.open(Resume, "_blank")}
          >
            📄 Download Resume
          </Button>

          <Button
            icon={<GithubOutlined />}
            href="https://github.com/yemulambika"
            target="_blank"
          >
            GitHub
          </Button>
        </Space>

      </div>

      {/* PROFILE LINKS (GLASS CARD) */}
      <div className="profiles glass-card">
        <Title level={4} style={{ color: "white" }}>
          🚀 Coding Profiles
        </Title>

        <Space wrap size="middle" style={{ justifyContent: "center" }}>
          <Button
            icon={<LinkedinOutlined />}
            href="https://www.linkedin.com/in/ambika-yemul-9ab81130b/"
            target="_blank"
          >
            LinkedIn
          </Button>

          <Button
            icon={<GithubOutlined />}
            href="https://github.com/yemulambika"
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            href="https://www.scaler.com/academy/profile/e7ceb3bc53e7"
            target="_blank"
          >
            Scaler
          </Button>

          <Button
            href="https://leetcode.com/u/ambikayemul/"
            target="_blank"
          >
            LeetCode
          </Button>

          <Button
            href="https://www.geeksforgeeks.org/profile/ambikayeuqqd"
            target="_blank"
          >
            GeeksforGeeks
          </Button>
        </Space>
      </div>

    </div>
  );
}

export default Home;