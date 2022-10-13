import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class ItemListContainer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>{this.props.greetings}</Col>
        </Row>
      </Container>
    );
  }
}
