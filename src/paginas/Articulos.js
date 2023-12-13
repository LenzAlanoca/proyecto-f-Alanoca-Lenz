import React, { useState } from 'react'; // Añade useState aquí
import cirucleI from './../assets/g1375.png';
import { Link } from 'react-router-dom';



const TallaCamisetasForm = () => {
  const [altura, setAltura] = useState('');
  const [talla, setTalla] = useState('');

  const calcularTallaCamiseta = () => {
    if (altura < 160) {
      setTalla('S');
    } else if (altura >= 160 && altura < 175) {
      setTalla('M');
    } else {
      setTalla('L');
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '30px' }}>
      <h2>Calcula tu Talla de Camiseta (cm)</h2>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Ingresa tu altura en cm"
        style={{ padding: '10px', margin: '10px' }}
      />
      <button onClick={calcularTallaCamiseta} style={{ backgroundColor: 'yellow', color: 'black', padding: '10px' }}>
        Calcular Talla
      </button>
      {talla && <p>Tu talla recomendada es: {talla}</p>}
    </div>
  );
};

const TallaTenisForm = () => {
  const [tallaPie, setTallaPie] = useState('');
  const [tallaTenis, setTallaTenis] = useState('');

  const calcularTallaTenis = () => {
    if (tallaPie < 24) {
      setTallaTenis('38');
    } else if (tallaPie >= 24 && tallaPie < 26) {
      setTallaTenis('40');
    } else {
      setTallaTenis('42');
    }
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '30px' }}>
      <h2>Calcula tu Talla de Tenis(cm)</h2>
      <input
        type="number"
        value={tallaPie}
        onChange={(e) => setTallaPie(e.target.value)}
        placeholder="Ingresa la medida de tu pie en cm"
        style={{ padding: '10px', margin: '10px' }}
      />
      <button onClick={calcularTallaTenis} style={{ backgroundColor: 'yellow', color: 'black', padding: '10px' }}>
        Calcular Talla
      </button>
      {tallaTenis && <p>Tu talla recomendada es: {tallaTenis}</p>}
    </div>
  );
};
const Articulos = () => {
  return (
    <div className='pagina'>
        <header class="py-5 bg-image-full headim v2">
        <div class="text-center my-5">
          <img class="img-fluid rounded-circle mb-4" src={cirucleI} width="10%" alt="..." />
          <h1 class="text-white fs-3 fw-bolder">ADI-g(x)</h1>
          <p class="text-white-50 mb-0">Somos tu mejor opcion</p>
        </div>
      </header>
      <h1 className='title display-4 my-1 py-2'>Articulos disponibles</h1>
      

      <div id="portfolio" className='bg-dark'>
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="col-lg-4 col-sm-6">
                      <Link to="/Tenis">
                        <a class="portfolio-box"  title="Tenisdep">
                            <img class="img-fluid" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/xcat_fw23_holiday_stocking_stuffers_dec_glp_tcc_d_cfeae80b2c.jpg" alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50 enlaces">Tenis</div>
                                <div class="project-name enlaces">Consiguelos aqui</div>
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                    <Link to="/Tenis">
                        <a class="portfolio-box"  title="Project Name">
                            <img class="img-fluid" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/xcat_fw23_holiday_dec_shoes100andunder_glp_group_tcc_d_313e735c64.jpg" alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50 enlaces">Tenis</div>
                                <div class="project-name enlaces">Consiguelos aqui</div>
                            </div>
                        </a>
                        </Link> 
                    </div>
                    <div class="col-lg-4 col-sm-6">
                      <Link to="/Tenis">
                        <a class="portfolio-box"  title="Project Name">
                            <img class="img-fluid" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/og136_fw23_og_reset_sustain_stansmith_tcc_2_d_c17684c8b5.jpg"  alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50 enlaces">Tenis</div>
                                <div class="project-name enlaces">Consiguelos aqui</div>
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                    <Link to="/Camisetas">
                        <a class="portfolio-box"  title="Project Name">
                            <img class="img-fluid" src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/af2db509357843edafe5af7200c885d0_9366/argentina-22-winners-home-jersey.jpg" width="75%" alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50 enlaces">Camiseta</div>
                                <div class="project-name enlaces">Consiguelos aqui</div>
                            </div>
                        </a>
                        </Link>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                    <Link to="/Camisetas">
                        <a class="portfolio-box" title="Project Name">
                            <img class="img-fluid" src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a05caa6950445a68f1daa570119845e_9366/flag-jersey.jpg" width='75%' alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Camiseta</div>
                                <div class="project-name enlaces">Consiguelos aqui</div>
                            </div>
                        </a>
                        </Link> 
                    </div>
                    <div class="col-lg-4 col-sm-6">
                    <Link to="/Camisetas">
                        <a class="portfolio-box"  title="Project Name">
                            <img class="img-fluid" src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/da2828321fcf422b9fa2d4d928b7bc08_9366/messi-mural-tee.jpg" width="75%" alt="..." />
                            <div class="portfolio-box-caption p-3">
                                <div class="project-category text-white-50 enlaces">Camiseta</div>
                                <div class="project-name enlaces">Consiguelos aqui</div>
                            </div>
                            
                        </a>
                        </Link> 
                    </div>
                </div>
            </div>
        </div>
        <div className='formtalla'>
{/* Formulario para calcular talla de camisetas */}
<TallaCamisetasForm />

{/* Formulario para calcular talla de tenis */}
<TallaTenisForm />



       </div>
        
        
        
        </div>
        
  )
}

export default Articulos