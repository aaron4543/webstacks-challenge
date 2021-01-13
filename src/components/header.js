import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import "./layout.css"
import Logo from "../images/brackets-logo.svg"

const Header = ({ siteTitle }) => (
  <header className="header-style">
    <Container id="nav-container">
      <Navbar collapseOnSelect expand="md" className="navbar navbar-dark">
        <Navbar.Brand href="/" className="logo-style">
          <img src={Logo} />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li" className="header-buttons">
              <Link to="/" className="nav-link" activeClassName="active">
                What's Included?
              </Link>
            </Nav.Item>
            <Nav.Item as="li" className="header-buttons">
              <Link to="/" className="nav-link" activeClassName="active">
                Pricing
              </Link>
            </Nav.Item>
            <Nav.Item as="li" className="header-buttons">
              <Link to="/" className="nav-link" activeClassName="active">
                Sign-In
              </Link>
            </Nav.Item>
            <Nav.Item as="li" className="header-buttons nav-button">
              <Link to="/" className="nav-link" activeClassName="active">
                <Button className="primary-button">
                  <span className="button-text-span">Get Started</span>{" "}
                  <span className="carrot-font">{">"}</span>
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
