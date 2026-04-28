import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item onClick={() => navigate("/")}>Home</Menu.Item>
      <Menu.Item onClick={() => navigate("/projects")}>Projects</Menu.Item>
      <Menu.Item onClick={() => navigate("/certificates")}>Certificates</Menu.Item>
      <Menu.Item onClick={() => navigate("/experience")}>Experience</Menu.Item>
      <Menu.Item onClick={() => navigate("/contact")}>Contact</Menu.Item>
    </Menu>
  );
}

export default Navbar;