import React from "react";
import { Menu, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(12px)",
        background: "rgba(15, 23, 42, 0.7)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "0 40px",

        // ✅ IMPORTANT FIX
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "70px"
      }}
    >
      {/* LEFT: LOGO */}
      <h2
        style={{
          color: "white",
          margin: 0,
          cursor: "pointer",
          fontWeight: "bold"
        }}
        onClick={() => navigate("/")}
      >
        Ambika.dev
      </h2>

      {/* CENTER: MENU */}
      <Menu
        mode="horizontal"
        theme="dark"
        selectedKeys={[location.pathname]}
        style={{
          flex: 1,
          marginLeft: "40px",
          background: "transparent",
          borderBottom: "none"
        }}
      >
        <Menu.Item key="/" onClick={() => navigate("/")}>Home</Menu.Item>
        <Menu.Item key="/projects" onClick={() => navigate("/projects")}>Projects</Menu.Item>
        <Menu.Item key="/certificates" onClick={() => navigate("/certificates")}>Certificates</Menu.Item>
        <Menu.Item key="/experience" onClick={() => navigate("/experience")}>Experience</Menu.Item>
        <Menu.Item key="/contact" onClick={() => navigate("/contact")}>Contact</Menu.Item>
      </Menu>

      {/* RIGHT: CTA */}
      <Button
        type="primary"
        onClick={() => navigate("/contact")}
      >
        Hire Me
      </Button>
    </div>
  );
}

export default Navbar;