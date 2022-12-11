import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/Layout.jsx";
import { AiFillCheckCircle } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  .borde {
    background-color: white;
    width: 500px;
    border-radius: 10px;
    padding: 2rem 1rem 0.5rem 1rem;
    margin: 0 auto;
  }
`;

const Confirmacion = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <Container fluid>
        <Row>
          <Layout subtitle={"COMPRA FINALIZADA"} />
        </Row>
        <Row>
          <Col className="text-center mt-5">
            <div className="borde">
              <p className="fs-1">¡FELICIDADES!</p>
              <AiFillCheckCircle color="#01bb00" size="7rem" className="mb-4" />
              <p className="lh-sm">
                Tu compra ha sido concretada. <br />
                Revisa tu correo para <br /> ver la informaciónde tu compra.
              </p>
              <p
                className="text-end"
                onClick={() => navigate("/")}
                style={{ cursor: "pointer" }}
              >
                Volver a inicio &#62;
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default Confirmacion;
