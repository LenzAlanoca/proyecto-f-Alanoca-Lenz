import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contactanos = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene la recarga de la página
    alert('Información enviada');
  };

  return (
    <Container className="my-5 pagina">
      <Row>
        <Col md={6}>
          <h2>Contactanos</h2>
          <p>Si tienes alguna consulta o deseas más información, no dudes en contactarnos.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu dirección" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control type="text" placeholder="Ingresa la descripcion de tu pedido o la de tu consulta" />
            </Form.Group>

            <Button variant="dark" type="submit">Enviar</Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2>Ubicación</h2>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4230666812086!2d-68.13250008840988!3d-16.50472578417395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206520793ddd%3A0x53f6df346cc69976!2sUniversidad%20Mayor%20de%20San%20Andr%C3%A9s!5e0!3m2!1ses!2sbo!4v1702430524983!5m2!1ses!2sbo"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactanos;
