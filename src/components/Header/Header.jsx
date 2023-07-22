import React from "react";
import { Container, Row, Button } from "reactstrap";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* _______Logo_________ */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/* _______End of Logo_________ */}
            {/* _______Menu_________ */}
            <div className="navigation">
              <ul className="menu  d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* _______End of Menu_________ */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                <button className="btn secondary__btn">
                  <Link to="/login">Login</Link>
                </button>
                <button className="btn primary__btn">
                  <Link to="/Register">Register</Link>
                </button>
              </div>
              <span className="mobile__menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
