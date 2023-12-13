import React from 'react'
import cirucleI from './../assets/g1375.png';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import cirucleIM from './../assets/deportim.jpg';
import card1 from './../assets/CARD4.png';
import card2 from './../assets/CARD6.png';
import card3 from './../assets/CARD5.png';
import { Button, Card } from 'react-bootstrap';
const Deportes = () => {
  return (
    <div className='pagina'>
      <header class="py-5 bg-image-full headim v3">
        <div class="text-center my-5">
          <img class="img-fluid rounded-circle mb-4" src={cirucleI} width="10%" alt="..." />
          <h1 class="text-white fs-3 fw-bolder">ADI-g(x)</h1>
          <p class="text-white-50 mb-0">Apoyo Del Deporte</p>
        </div>
      </header>

      <section class="bg-light">
  <div class="container px-5 py-5">
    <div class="row gx-5 align-items-center justify-content-center">
      <div class="col-12 col-lg-5">
        <h2 class="display-4 lh-1 mb-4">MUEVETE!</h2>
        <p class="lead fw-normal text-muted mb-5 mb-lg-0">
        El deporte nos brinda la oportunidad de superar nuestros límites, alcanzar nuestras metas y construir un futuro mejor. 
        Nos enseña a trabajar duro, a perseverar ante la adversidad y a nunca rendirnos. 
        También nos ayuda a desarrollar importantes habilidades como la disciplina, la concentración y la resolución de problemas.
        </p>
      </div>
      <div class="col-12 col-md-8 col-lg-6">
        <div class="video-responsive">
          <iframe src="https://www.youtube.com/embed/jYwBAy-UnAQ?si=flvFawBD7OXwHKjO" title="YouTube video player" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="page-section bg-black " id="abouti">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="text-white mt-0 px-1">Tenemos lo que necesitas</h2>
                        <hr class="divider divider-light" />
                        <p class="text-white mb-4"> y alcanzar tu máximo potencial!</p>
                        <a class="btn btn-light btn-xl" ><Link className='enlaces' to="/Articulos" >Articulos</Link> </a>
              
                    </div>
                </div>
                
            </div>
        </section>
        <section className='desbor'>
            <div class="container px-1">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5"><img class="img-fluid rounded-circle" src={cirucleIM} alt="..." /></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 class="display-4">COMIENZA AHORA!</h2>
                            <p>
                              Nunca es tarde para comenzar a moverte comienza hot con nostros y podras disfrutar de vida
                              mas plenamente y en mejor estado que nuca, no lo dudes no digas algun dia di dia 1.</p>
                              <a class="btn btn-dark btn-xl" ><Link className='enlaces' to="/Historia" >Contactanos</Link> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <h1>
        TE OFRECEMOS ASESORIA EN 
      </h1>
      <div className='container py-4'>
    <div className='row justify-content-center'>
    <div className='col-12 col-md-3 mb-4'>
     
        <Card style={{ width: '100%' }}>  
      <Card.Img variant="top" src={card1} />
      <Card.Body>
        <Card.Title>ATLETISMO</Card.Title>
        <Card.Text>
        Trabajar con los atletas de forma individual para desarrollar un plan de entrenamiento personalizado que se adapte a sus necesidades y objetivos.
        </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Atletismo" >Atletismo</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-3 mb-4'>
        <Card style={{ width: '100%' }}>  
    
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>ALPINISMO</Card.Title>
        <Card.Text>
        La asesoría en alpinismo brinda a los escaladores de todos los niveles la orientación y el apoyo que necesitan para alcanzar sus objetivos. 
        </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Alpinismo" >Alpinismo</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-3 mb-4'>
        <Card style={{ width: '100%' }}>  
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>NUTRICION</Card.Title>
        <Card.Text>
        Los asesores pueden proporcionar consejos sobre nutrición y suplementación para ayudar a los atletas a optimizar su rendimiento.
        </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Historia" >Contactanos</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  </div>

     </div>
  )
}

export default Deportes