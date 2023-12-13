import React from 'react'
import cirucleI from './../assets/g1375.png';
import pl1 from './../assets/team4.jpg';
import pl2 from './../assets/team5.jpg';
import pl3 from './../assets/team6.jpg';
import miImagen from './../assets/logo1.png';
import { Link } from 'react-router-dom';
const Atletismo = () => {
  return (
    <div className='pagina'>
        <header class="py-5 bg-image-full headim v4">
            <div class="text-center my-5">
                <img class="img-fluid rounded-circle mb-4" src={cirucleI}  width="10%" alt="..." />
                <h1 class="text-white fs-1 fw-bolder">ADI-g(x)</h1>
                <p class="text-white fs-1 mb-0">UNETE!</p>
            </div>
        </header>
        
        <div className='caja d-flex flex-column flex-lg-row'>
    <div class='col-12 col-lg-7 my-auto p-10'>
          <h1>ALGUNOS MIEMBROS DE NUESTRO EQUIPO</h1>
          <p>
            
            Estos son algunos atletas de carreras que hemos apoyado
            ya se en formacion o acoplamiento incluso asesoramiento , en ADI-g(x) todos somos familia.

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
                    <h5>Camila García</h5>
                    <p>Corredora de velocidad, ganó la medalla de oro en los 100 metros planos en los Juegos Olímpicos de París 2024. </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={pl2} class="d-block w-100" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Juan Pablo Pérez</h5>
                    <p>Corredor de fondo, estableció un nuevo récord mundial en la maratón con un tiempo de 2 horas, 01 minuto y 39 segundos en el Maratón de Berlín 2025.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={pl3} class="d-block w-100" />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>José Luis López</h5>
                    <p>Corredor de obstáculos, ganó la medalla de bronce en los 400 metros vallas en los Juegos Panamericanos de Santiago 2023.
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
    <div className='container fondo'>
        <aside class="text-center ">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-xl-8">
                        <div class="h2 fs-1 text-black mb-4">"ADI-g(x) aplica para estar con nostros y escala al siguiente nivel"</div>
                        <a class="btn btn-light btn-xl my-3" ><Link className='enlaces' to="/Historia" >Envia tu solicitud</Link> </a>
                        
                    </div>
                </div>
            </div>
        </aside>
        </div>
        
        </div>




  )
}

export default Atletismo