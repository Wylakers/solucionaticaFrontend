import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/Layout.jsx";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Anp from "../services/API/Anp.js";
import Pago from "../services/API/Pago.js";

const StyledDiv = styled.div`
  .parent {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    padding: 30px 20px;
  }

  .pagar button {
    background: #e1cb5b;
    border: none;
    padding: 5px 50px;
    color: white;
    font-weight: bold;
  }

  .counter input {
    width: 50px;
    text-align: center;
    font-weight: bolder;
    border: none;
    background: #fefefe;
  }

  .counter button {
    width: 25px;
    border: none;
  }

  .confirm button {
    background: #e1cb5b;
    border: none;
    padding: 5px 50px;
    color: white;
    font-weight: bold;
  }
`;

const Compra = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cantidad_boletos, setCantidad] = useState(1);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);

  const handleData = async () => {
    const response = await Anp.getOne(id);
    setData(response.data);
    console.log(response.data);
    setTotal(response.data[0].precio);
  };

  useEffect(() => {
    handleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addCountHandler = () => {
    setCantidad(cantidad_boletos + 1);
    setTotal(data[0].precio * (cantidad_boletos + 1));
  };
  const removeCountHandler = () => {
    if (cantidad_boletos === 0) {
      return;
    } else {
      setCantidad(cantidad_boletos - 1);
      setTotal(data[0].precio * (cantidad_boletos - 1));
    }
  };

  const handleOnClick = () => {
    const nombre = data[0].nombre;
    Pago.post({ total, cantidad_boletos, id }).then((response) => {
      console.log(response);
    });
    Pago.sendEmail({ nombre, cantidad_boletos, total }).then((res) => {
      console.log(res);
    });

    navigate("/confirm");
  };

  return (
    <StyledDiv>
      <Container fluid>
        <Row>
          <Layout subtitle={"DETALLE DE LA ANP"} />
        </Row>
        {data.map((data) => (
          <Row className="bg-white parent mt-5" key={data.id}>
            <Col className="me-2">
              <img src={data.imagen} alt="" height="350px" width="560px" />
            </Col>
            <Col>
              <Row className="fs-1 mb-4 ">
                <Col>{data.nombre}</Col>
              </Row>
              <Row className="text-start lh-sm  h-50">
                <Col>{data.descripcion}</Col>
              </Row>
              <Row className="counter mb-4">
                <Col>
                  <span className="me-2 fs-5">Cantidad:</span>
                  <button onClick={removeCountHandler}> - </button>
                  <input value={cantidad_boletos} readOnly />
                  <button onClick={addCountHandler}> + </button>
                </Col>
                <Col className="text-end">
                  <span className="me-2 fs-5">Importe total:</span>
                  <span className="fs-5" name="total">
                    {total} PEN
                  </span>
                </Col>
              </Row>
              <Row className="confirm mt-auto">
                <Col className="text-end">
                  <button onClick={handleOnClick}>PAGAR</button>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Container>
    </StyledDiv>
  );
};

export default Compra;
