import React from "react"
import { Row, Col } from "react-bootstrap"

const Cards = ({ products }) => {
  return (
    <Row md={4}>
      {products.map(product => {
        const { node } = product
        const { image } = node
        if (node.header === "Augmented Reality") {
          return (
            <Col
              id="no-gutters"
              key={node.id}
              sm={12}
              md={{ span: 3, offset: 1 }}
              lg={{ span: 3, offset: 1 }}
            >
              <div className="card-container">
                <div className="card-content">
                  <div className="card-title">{node.header}</div>

                  <div className="card-description">{node.body}</div>
                  <div className="card-learn-more">Learn More {">"}</div>
                </div>
                <img className="card-image" src={image.file.url}></img>
              </div>
            </Col>
          )
        }
        return (
          <Col id="no-gutters" key={node.id} sm={12} md={3} lg={3}>
            <div className="card-container">
              <div className="card-content">
                <div className="card-title">{node.header}</div>

                <div className="card-description">{node.body}</div>
                <div className="card-learn-more">Learn More {">"}</div>
              </div>
              <img className="card-image" src={image.file.url}></img>
            </div>
          </Col>
        )
      })}
    </Row>
  )
}

export default Cards
