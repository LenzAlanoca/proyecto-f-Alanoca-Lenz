import React, { useState } from 'react';
import cirucleI from './../assets/g1375.png';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import card1 from './../assets/CARD7.png';
import card2 from './../assets/CARD8.png';
import card3 from './../assets/CARD9.png';
import card4 from './../assets/CARD12.png';
import card5 from './../assets/CARD10.png';
import card6 from './../assets/CARD11.png';
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
const Camisetas = () => {
  return (
    <div className='pagina'>
        <header class="py-5 bg-image-full headim v7">
            <div class="text-center my-5">
                <img class="img-fluid rounded-circle mb-4" src={cirucleI}  width="10%" alt="..." />
                <h1 class="text-white fs-1 fw-bolder">ADI-g(x)</h1>
                <p class="text-white fs-1 mb-0">Camisetas</p>
            </div>
        </header>

        <section>
      <h1 className='title display-4 my-1 py-2' >Te ofrecemos</h1>

      <div className='container py-4'>
    <div className='row justify-content-center'>
    <div className='col-12 col-md-3 mb-4'>
        <Card style={{ width: '100%' }}>  
      <Card.Img variant="top" src={card1} />

      <Card.Body>
        <Card.Title>Camiseta 1</Card.Title>
        <Card.Text>
        
        </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Historia" >Pedido</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-3 mb-4'>
        <Card style={{ width: '100%' }}>  
    
      <Card.Img variant="top" src={card3} />
      <Card.Body>
        <Card.Title>Camiseta 2</Card.Title>
        <Card.Text>
           
        </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Historia" >Pedido</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-3 mb-4'>
        <Card style={{ width: '100%' }}>  
      <Card.Img variant="top" src={card2} />
      <Card.Body>
        <Card.Title>Camiseta 3</Card.Title>
        <Card.Text>
           
        </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Historia" >Pedido</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  </div>
   

      </section>
      <section>
    

      <div className='container py-4'>
    <div className='row justify-content-center'>
    <div className='col-12 col-md-3 mb-4'>
        <Card style={{ width: '100%' }}>  
      <Card.Img variant="top" src={card4} />

      <Card.Body>
        <Card.Title>Camiseta 4</Card.Title>
        <Card.Text>
         </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Historia" >Pedido</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-3 mb-4'>
        <Card style={{ width: '100%' }}>  
    
      <Card.Img variant="top" src={card5} />
      <Card.Body>
        <Card.Title>Camiseta 5</Card.Title>
        <Card.Text>
         </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Historia" >Pedido</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-12 col-md-3 mb-4'>
        <Card style={{ width: '100%' }}>  
      <Card.Img variant="top" src={card6} />
      <Card.Body>
        <Card.Title>Camiseta 6</Card.Title>
        <Card.Text>
           
        </Card.Text>
        <Button variant="dark"><Link className='enlaces' to="/Historia" >Pedido</Link> </Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  </div>
   

      </section>
      <div className='formtalla'>
{/* Formulario para calcular talla de camisetas */}
<TallaCamisetasForm />





       </div>

    </div>
  )
}

export default Camisetas