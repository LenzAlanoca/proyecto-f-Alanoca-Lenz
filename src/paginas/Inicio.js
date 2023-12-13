import React from 'react'
import Footer from '../components/Footer'
import cirucleI from './../assets/g1375.png';
import cirucleIF from './../assets/imagencirculefem.jpg';
import cirucleIM from './../assets/imagencirculemas.jpg';
import card1 from './../assets/CARD1.png';
import card2 from './../assets/CARD2.png';
import card3 from './../assets/CARD3.png';
import miImagen from './../assets/logo1.png';

import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Inicio = () => {
  return (
    <div className='pagina'>
      

      <header class="py-5 bg-image-full headim">
            <div class="text-center my-5">
                <img class="img-fluid rounded-circle mb-4" src={cirucleI}  width="10%" alt="..." />
                <h1 class="text-white fs-3 fw-bolder">ADI-g(x)</h1>
                <p class="text-white-50 mb-0">Ariculos Deportivos</p>
            </div>
        </header>

    
        
        
        <section class="bg-light">
            <div class="container px-5 py-5">
                <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
                    <div class="col-12 col-lg-5">
                        <h2 class="display-4 lh-1 mb-4">Entra en una nueva era del deporte</h2>
                        <p class="lead fw-normal text-muted mb-5 mb-lg-0">
                          Con nosotros puedes desbloquear tu maximo potencial, con articulos de primera calidad hemos llevado tu potencial
                          al maximo desde mas de una decada.
                        </p>
                    </div>
                    <div class="col-sm-8 col-md-6">
                        <div class="px-5 px-sm-0"><img class="img-fluid rounded-circle" src={cirucleIF} alt="..." /></div>
                    </div>
                </div>
            </div>
        </section>
      <section>
      <h1 className='title display-4 my-1 py-2' >NUESTROS SERVICIOS</h1>

      <div className='container py-4'>
    <div className='row justify-content-center'>
    <div className='col-12 col-md-3 mb-4'>
        <Card style={{ width: '100%' }}>  
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>ASESORAMIENTO</Card.Title>
        <Card.Text>
        Ofrecemos el mejor asesoramiento para tu cambio fisico proporcionandote la mejor calidad y atencion con los mejores profesionales en el area.
        </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Deportes" >Deportes</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-3 mb-4'>
        <Card style={{ width: '100%' }}>  
    
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>CALIDAD</Card.Title>
        <Card.Text>
          La calidad de nuestro productos es inigualable en el mercado, con continua evidencia cientifica fabricamos los mejores articulos para su mayor potencial.
        </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Articulos" >Articulos</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-3 mb-4'>
        <Card style={{ width: '100%' }}>  
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>SEGUIMIENTO</Card.Title>
        <Card.Text>
          Como casa deportiva puedes aplicar a nuestros programas de patrocio para unirte a la familia ADI-g(x) con los mejores equipos
          en alpinismo y atletismo.
        </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Atletismo" >Atletismo</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  </div>
   

      </section>

      <div className='container fondo'>
        <aside class="text-center ">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-xl-8">
                        <div class="h2 fs-1 text-black mb-4">"ADI-g(x) ha ayudado al equipo de atletismo local a mejorar
                         su rendimiento, su infraestructura y su popularidad."</div>
                        <img className='imgtot' src={miImagen} alt="..." />
                    </div>
                </div>
            </div>
        </aside>
        </div>
        <section className='desbor'>
            <div class="container px-1">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5"><img class="img-fluid rounded-circle" src={cirucleIM} alt="..." /></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 class="display-4">Unete!</h2>
                            <p>
                              Unete a la gran familia, con apoyo, compañerismo,disciplica, transformaremos tu vida y tu potencial.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    
    

    </div>
    
  

  )
}

export default Inicio