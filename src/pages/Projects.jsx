import React from "react";
import { Card, Row, Col, Tag, Button } from "antd";
import WeatherImages from "./WeatherImages";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Projects() {
  const navigate = useNavigate();
  return (<div>
    <Row>
      <div className="projects-container" style={{margin : "20px"}}>
        <Row gutter={[25, 25]} justify="center">

          <Col span={8}
            xs={30} md={20} lg={20}>
            <Card
              className="project-card"
              title="🌦️ Weather Dashboard (MERN Stack)"
              bordered={false}
              style={{ border : "1px solid black"}}
            >
              <p className="project-desc">
                Full-stack weather analytics platform with real-time weather data,
                authentication, and interactive charts.
              </p>

              {/* Features */}
              <div className="section">
                <h4>🚀 Key Features</h4>
                <div className="tags">
                  <Tag color="blue">JWT Auth</Tag>
                  <Tag color="green">Weather API</Tag>
                  <Tag color="orange">Charts (Chart.js)</Tag>
                  <Tag color="purple">PDF Export</Tag>
                  <Tag color="cyan">CORS Setup</Tag>
                  <Tag color="red">MongoDB</Tag>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="section">
                <h4>🧠 Tech Stack</h4>
                <p>React • Node.js • Express • MongoDB • JWT • Chart.js</p>
              </div>

              {/* Links */}
              <div className="buttons">


                <Button
                  type="primary"
                  href="https://weather-dashboard-frontend-1.onrender.com"
                  target="_blank"
                  style={{margin : "10px"}}
                >
                  Live Demo
                </Button>

                <Button onClick={() => navigate("/weather-images")}>
                  View Screenshots
                </Button>
              </div>
            </Card>
          </Col>

        </Row>
      </div>

      <div className="projects-container" style={{margin : "20px"}}>
        <Row gutter={[25, 25]} justify="center">

          <Col span={8}
            xs={30} md={20} lg={20}>
            <Card
              className="project-card"
              title="🌦️ Weather Dashboard (MERN Stack)"
              bordered={false}
              style={{ border : "1px solid black"}}
            >
              <p className="project-desc">
                Full-stack weather analytics platform with real-time weather data,
                authentication, and interactive charts.
              </p>

              {/* Features */}
              <div className="section">
                <h4>🚀 Key Features</h4>
                <div className="tags">
                  <Tag color="blue">JWT Auth</Tag>
                  <Tag color="green">Weather API</Tag>
                  <Tag color="orange">Charts (Chart.js)</Tag>
                  <Tag color="purple">PDF Export</Tag>
                  <Tag color="cyan">CORS Setup</Tag>
                  <Tag color="red">MongoDB</Tag>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="section">
                <h4>🧠 Tech Stack</h4>
                <p>React • Node.js • Express • MongoDB • JWT • Chart.js</p>
              </div>

              {/* Links */}
              <div className="buttons">


                <Button
                  type="primary"
                  href="http://movie-place-pnvhe59fz-ambika-s-projects.vercel.app/watchList"
                  target="_blank"
                  style={{margin : "10px"}}
                >
                  Live Demo
                </Button>

                <Button onClick={() => navigate("/weather-images")}>
                  View Screenshots
                </Button>
              </div>
            </Card>
          </Col>

        </Row>
      </div>

      <Col span={8}>
        <Card title="BookMyShow">
          MERN + API integration + antD
        </Card>
      </Col>
    </Row>
  </div>
  );
}

export default Projects;