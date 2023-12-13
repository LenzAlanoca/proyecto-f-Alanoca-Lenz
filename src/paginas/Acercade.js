import React from 'react'
import cirucleI from './../assets/g1375.png';
import { Link } from 'react-router-dom';
import cirucleIF from './../assets/imagencirculefem.jpg';
import cirucleIM from './../assets/teamcircule.jpg';
import pl1 from './../assets/team1.jpg';
import pl2 from './../assets/team2.jpg';
import pl3 from './../assets/team3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
const Acercade = () => {
  return (
    <div className='pagina'>
        <header class="py-5 bg-image-full headim v1">
            <div class="text-center my-5">
                <img class="img-fluid rounded-circle mb-4" src={cirucleI}  width="10%" alt="..." />
                <h1 class="text-white fs-1 fw-bolder">ADI-g(x)</h1>
                <p class="text-white fs-1 mb-0">El Alma del deporte</p>
            </div>
        </header>

        
        <section class="page-section cta">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <div class="cta-inner bg-faded text-center rounded">
                            <h2 class="section-heading mb-4">
                                <span class="section-heading-upper">Nuestra promesa</span>
                                <span class="section-heading-lower">para ti</span>
                            </h2>
                            <p class="mb-0">
                            Nuestros productos están diseñados para mejorar el rendimiento deportivo, la comodidad y la seguridad. Nuestros servicios ofrecen apoyo y orientación a los atletas, ayudándoles a alcanzar sus objetivos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <h1 className='title display-4 my-1 py-3' >NUESTRA FILOSOFIA</h1>

        <section className='desbor'>
            <div class="container px-1">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5"><img class="img-fluid rounded-circle" src={cirucleIM} alt="..." /></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 class="display-4">Trabajo En Equipo!</h2>
                            <p>
                            El trabajo en equipo también es importante porque puede fomentar la colaboración, la comunicación y el respeto mutuo. Cuando las personas trabajan juntas, deben aprender a comunicarse eficazmente y a resolver problemas de forma colaborativa. Esto puede ayudar a crear un entorno de trabajo más positivo y productivo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <div className='caja d-flex flex-column flex-lg-row'>
    <div class='col-12 col-lg-7 my-auto p-10'>
          <h1>Conoce a nuestra familia</h1>
          <p>
            
            Estos son algunos equipos con los que hemos colaborado para
            crecer en el deporte, en ADI-g(x) todos somos familia.

          </p>

        </div>
    <div class="col-12 col-lg-5" >
          <div class="col ml-2">
            <h1 class="text-black"></h1>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators" >
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={pl1} class="d-block w-100" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Equipo tigrito </h5>
                    <p>3 Trofeos</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={pl2} class="d-block w-100" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Equipo Leonsito</h5>
                    <p>3 Trofeos</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={pl3} class="d-block w-100" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Equipo PowerLifter</h5>
                    <p>1 Medalla de Oro, trofeo Champios,
                      Sangre de Dragon.
                    </p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          
        </div>
        
    </div>
        

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

        
    </div>
  )
}

export default Acercade