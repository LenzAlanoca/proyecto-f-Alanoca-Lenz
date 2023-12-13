import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa';

const Creditos = () => {
  // Puedes reemplazar estos enlaces con tus propios enlaces de redes sociales
  const socialLinks = {
    tiktok: "https://tiktok.com/@tu_usuario",
    youtube: "https://youtube.com/c/tu_canal",
    instagram: "https://instagram.com/tu_usuario"
  };

  return (
    <Container className="my-5 text-center pagina">
      <h2>Lenz Abad Alanoca Ojeda</h2>
      <p>INF-122 PROGRAMACIÓN WEB II - Paralelo A</p>
      <p>RU: 1778599</p>
      <p>CI: 14155567</p>
      <h3>GRACIAS POR VISITAR LA PÁGINA</h3>
      <Row className="justify-content-center my-4">
        <Col xs={12} md={4}>
          <a href="https://www.tiktok.com/@darok_gk" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="social-icon" />
          </a>
          <a href="https://www.youtube.com/@darokgk4422" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" />
          </a>
          <a href="https://www.instagram.com/darok_gk_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Creditos;
