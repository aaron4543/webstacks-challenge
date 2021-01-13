import React from "react"
import { Row, Col, Button } from "react-bootstrap"

const Hero = ({ content }) => {
  return (
    <>
      <Row>
        <Col id="hero-section" md={{ span: 2.5, offset: 1 }} sm={12}>
          <h5 className="little-header">{content.title}</h5>
        </Col>
      </Row>

      <Row>
        <Col
          id="hero-section"
          md={{ span: 6, offset: 1 }}
          lg={{ span: 3, offset: 1 }}
          sm={12}
        >
          <p className="title-line">{content.subtitle}</p>
        </Col>
      </Row>
      <Row>
        <Col id="hero-section" md={{ span: 2.5, offset: 1 }} sm={12}>
          <p className="small-text">{content.description}</p>
        </Col>
      </Row>
      <Row>
        <Col
          md={{ span: 2.5, offset: 1 }}
          // sm={12}
        >
          <Button className="primary-button">
            {/* <span className="primary-button-span">Get Started</span> */}
            <span className="button-text-span">Get Started </span>
            <span className="carrot-font">{">"}</span>
          </Button>
        </Col>
        <Col
          md={{ span: 1, offset: 0.5 }}
          // sm={12}
        >
          <Button id="secondary-button">
            <span className="button-text-span">Request a Demo </span>
            <span className="carrot-font">{">"}</span>
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Hero
