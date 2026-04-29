import React from "react";
import { Card, Row, Col, Tag, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./Project.css";


function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects-wrapper">

      {/* TITLE */}
      <h2 className="projects-title">🚀 Projects</h2>

      {/* PROJECT GRID */}
      <Row gutter={[28, 28]} justify="center">

        {/* WEATHER */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Card className="project-card glass-card" bordered={false}>
            <h3>🌦️ Weather Dashboard</h3>

            <p className="project-desc">
              Full-stack weather analytics platform with authentication,
              real-time data, and interactive charts.
            </p>

            <div className="section">
              <h4>Key Features</h4>
              <div className="tags">
                <Tag color="blue">JWT Auth</Tag>
                <Tag color="green">Weather API</Tag>
                <Tag color="orange">Charts</Tag>
                <Tag color="purple">PDF Export</Tag>
                <Tag color="cyan">CORS</Tag>
                <Tag color="red">MongoDB</Tag>
              </div>
            </div>

            <div className="section">
              <h4>Tech Stack</h4>
              <p style={{color : "white"}}>React • Node • Express • MongoDB • JWT • Chart.js</p>
            </div>

            <div className="buttons">
              <Button type="primary" href="https://movie-place-flax.vercel.app/" target="_blank">
                Live Demo
              </Button>
              <Button onClick={() => navigate("/weather-images")}>
                Screenshots
              </Button>
            </div>
          </Card>
        </Col>

        {/* MOVIE */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Card className="project-card glass-card" bordered={false}>
            <h3>🎬 Movie Place</h3>

            <p className="project-desc">
              Movie discovery platform using TMDB API with watchlist,
              trailer playback, filtering, and search.
            </p>

            <div className="section">
              <h4>Key Features</h4>
              <div className="tags">
                <Tag color="blue">TMDB API</Tag>
                <Tag color="red">Watchlist</Tag>
                <Tag color="green">Genre Filter</Tag>
                <Tag color="orange">Search</Tag>
                <Tag color="purple">Rating Sort</Tag>
                <Tag color="cyan">Trailer</Tag>
                <Tag color="geekblue">AntD UI</Tag>
              </div>
            </div>

            <div className="section">
              <h4>Tech Stack</h4>
              <div className="tags" style={{color : "white"}}>React • Node • Express • TMDB API • Ant Design</div>
            </div>

            <div className="buttons">
              <Button type="primary" href="https://movie-place-flax.vercel.app/" target="_blank">
                Live Demo
              </Button>
              <Button onClick={() => navigate("/movie-images")}>
                Screenshots
              </Button>
            </div>
          </Card>
        </Col>

        {/* GITHUB */}
        <Col xs={24} sm={24} md={12} lg={10}>
          <Card className="project-card glass-card" bordered={false}>
            <h3>💻 More on GitHub</h3>

            <p className="project-desc">
              Additional projects including mini apps and games.
            </p>

            <div className="section">
              <h4>Includes</h4>
              <div className="tags">
                <Tag>To-Do</Tag>
                <Tag>Tic-Tac-Toe</Tag>
                <Tag>Simon</Tag>
                <Tag>Drum Kit</Tag>
                <Tag>Dice</Tag>
              </div>
            </div>

            {/* SKILLS INSIDE (compact version) */}
            <div className="section">
              <h4>Tech Skills</h4>
              <div className="tags">
                <Tag color="blue">HTML</Tag>
                <Tag color="green">CSS</Tag>
                <Tag color="gold">JavaScript</Tag>
                <Tag color="cyan">React</Tag>
                <Tag color="purple">Node</Tag>
                <Tag color="red">MongoDB</Tag>
                <Tag color="orange">Express</Tag>
              </div>
            </div>

            <div className="buttons">
              <Button
                type="primary"
                href="https://github.com/yemulambika"
                target="_blank"
              >
                View Repositories
              </Button>
            </div>
          </Card>
        </Col>

      </Row>

    </div>
  );
}

export default Projects;