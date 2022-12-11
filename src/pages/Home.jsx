import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/Layout.jsx";
import styled from "styled-components";
import Anp from "../services/API/Anp.js";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  .items {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    margin-top: 2.5rem;
  }

  .fondo {
    background-color: white;
    padding: 1.5rem;
  }

  .fondo button {
    background: #e1cb5b;
    border: none;
    padding: 5px 50px;
    color: white;
    font-weight: bold;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const response = await Anp.getAll();
    setData(response.data);
    console.log(response.data);
  };

  return (
    <StyledDiv>
      <Container fluid>
        <Row>
          <Layout subtitle={"Listado de ANPs"} />
        </Row>
        <Row>
          <Col className="items">
            {data.map((item) => {
              return (
                <div key={item.id} className="fondo">
                  <p>{item.nombre}</p>
                  <img
                    src={item.imagen}
                    alt=""
                    height="250px"
                    width="350px"
                    className="mb-3"
                  />
                  <Row className="align-items-center">
                    <Col>
                      <button onClick={() => navigate(`/${item.id}`)}>
                        COMPRAR
                      </button>
                    </Col>
                    <Col className="text-center">
                      <p className="mb-0 fs-4">{item.precio} PEN</p>
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default Home;
