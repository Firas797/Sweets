import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import G1 from '../Gateaux/Gtx Images/1.jpg';
import G2 from '../Gateaux/Gtx Images/2.jpg';
import G3 from '../Gateaux/Gtx Images/3.jpg';
import G4 from '../Gateaux/Gtx Images/4.jpg';
import G5 from '../Gateaux/Gtx Images/5.jpg';
import G6 from '../Gateaux/Gtx Images/7.jpg';
import G7 from '../Gateaux/Gtx Images/9.jpg';
import G8 from '../Gateaux/Gtx Images/10.jpg';
import G9 from '../Gateaux/Gtx Images/11.jpg';
import G10 from '../Gateaux/Gtx Images/12.jpg';
import G11 from '../Gateaux/Gtx Images/13.jpg';
import G12 from '../Gateaux/Gtx Images/14.jpg';

function Bodys() {
  const images = [G1, G2, G3, G4, G5, G6, G8, G9, G7, G10, G12, G11];
  const handleCommandeClick = () => {
    window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom when the button is clicked
  };
  return (
    <div className="bodyy">
      <h1 className="h11">Nos Galeries</h1>
      <Container>
        <Row>
          {images.map((image, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
              <img src={image} alt={`Gateaux ${index + 1}`} className="img-fluid" />
            </Col>
          ))}
                     <h1 className="h11">Clicker ici pour commander</h1>

               <button 
      className="buy-now" 
      onClick={handleCommandeClick}
    >
      Commander Maintenant
    </button>
        </Row>
      </Container>
    </div>
  );
}

export default Bodys;
