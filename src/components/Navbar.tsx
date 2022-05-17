import React, { useState, useEffect } from "react";
import {
  Dropdown,
  NavLink,
  NavItem,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiBell, FiGrid, FiMaximize, FiSettings } from "react-icons/fi";
import Logo from "../assets/logo.svg";
import "./NavBar.css";

const NavBar = () => {

  const [showLogo, setShowLogo] = useState(true);

  const handleToggle = () => {
    
    setShowLogo(!showLogo);
  };
  const handleToggleRightDrawer = () => {

  };

  return (
    <div className="d-flex justify-content-between topbar fixed-top">
      <div className="align-items-center d-flex">
        <Link to="/">
          <div
            className={!showLogo ? "logo-container" : "logo-container-closed"}
          >
            <img src={Logo} alt="logo" className="logo ms-1 me-3" />
            {!showLogo && <span className="company-title">BotsTMS</span>}
          </div>
        </Link>
        <Button onClick={handleToggle}>
          <FaBars />
        </Button>
        <Dropdown as={NavItem} className="create-new-container">
          <Dropdown.Toggle as={NavLink}>Create New</Dropdown.Toggle>
          <Dropdown.Menu>
            <div>
              <Dropdown.Item>New Projects</Dropdown.Item>
              <Dropdown.Item>Create Users</Dropdown.Item>
              <Dropdown.Item>Revenue Report</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <div className="dropdown-divider"></div>
              <Dropdown.Item>Help & Support</Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={NavItem} className="mega-menu-container">
          <Dropdown.Toggle as={NavLink}>Mega Menu</Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-megamenu">
            <div className="d-flex">
              <div className="mx-4 col-3">
                <p>UI Components</p>
                <ul>
                  <li>Widgets</li>
                  <li>Buttons</li>
                  <li>Icons</li>
                  <li>Grid</li>
                  <li>Typography</li>
                </ul>
              </div>
              <div className="mx-4 col-3">
                <p>Applications</p>
                <ul>
                  <li>eCommerce</li>
                  <li>CRM Pages</li>
                  <li>Email</li>
                  <li>Calendar</li>
                  <li>Team Contacts</li>
                </ul>
              </div>
              <div className="mx-4 col-3">
                <p>Extra Pages</p>
                <ul>
                  <li>Team Contacts</li>
                  <li>eCommerce</li>
                  <li>CRM Pages</li>
                  <li>Email</li>
                  <li>Calendar</li>
                </ul>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="align-items-center d-flex">
        <NavItem className="search-container">
          <FormControl
            type="text"
            placeholder="Search..."
            className="mr-sm-2"
          />
        </NavItem>
        <NavItem className="maximize-container">
          <NavLink href="#" target="_blank">
            <FiMaximize />
          </NavLink>
        </NavItem>
        <NavItem className="grid-container">
          <NavLink href="#" target="_blank">
            <FiGrid />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" target="_blank">
            <FiBell />
          </NavLink>
        </NavItem>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>
            <img
              src="https://i.pravatar.cc/25"
              alt="avatar"
              className="avatar"
            />
            <span className="name-container">Geneva</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <div className="dropdown-avatar">
              <p className="dropdown-item">Welcome!</p>
              <Dropdown.Item>My Account</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Lock Screen</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <NavItem>
          <Button className="btn" onClick={handleToggleRightDrawer}>
            <FiSettings />
          </Button>
        </NavItem>
      </div>
    </div>
  );
};

export default NavBar;
