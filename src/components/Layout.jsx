import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HiOutlineTicket } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Layout = ({ subtitle }) => {
  const navigate = useNavigate();
  return (
    <Container fluid className="text-white">
      <Row style={{ background: "#a6bb90" }} className="px-5 py-4">
        <Col
          xs="auto"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <h1>TICKET-FAST</h1>
        </Col>
        <Col className="d-flex align-items-center">
          <HiOutlineTicket size="3rem" />
        </Col>
      </Row>
      <Row style={{ background: "#e5e7e4" }} className="text-dark px-5 py-3">
        <Col className="fs-5">{subtitle}</Col>
      </Row>
    </Container>
  );
};

export default Layout;
