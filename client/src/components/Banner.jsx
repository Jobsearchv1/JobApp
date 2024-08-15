import React, { createContext, useState, useContext } from 'react';
import { Carousel, Card, Button, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import img1 from '../../src/assets/APACHE.jpg'
import img2 from '../../src/assets/CRSLOGO.jpg'
import img3 from '../../src/assets/HamiltoBarness.jpg'
import img4 from '../../src/assets/Idex_Consulting.jpg'
import img5 from '../../src/assets/MediaSearchInc.jpg'
import img6 from '../../src/assets/MERJE.jpg'
import img7 from '../../src/assets/Thomas_Ren_Associates.jpg'




const employers = [
    { id: 1, name: 'APACHE', image: img1 },
    { id: 2, name: 'CRSLOGO', image: img2 },
    { id: 3, name: 'HamiltoBarness', image: img3 },
    { id: 4, name: 'Idex_Consulting', image: img4 },
    { id: 5, name: 'MediaSearchInc', image: img5 },
    { id: 6, name: 'MERJ', image: img6 },
    { id: 7, name: 'Thomas_Ren_Associates', image: img7 },
  

    // Ajoutez autant d'employeurs que nécessaire
  ];
  
  const chunkArray = (array, chunkSize) => {
    const results = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      results.push(array.slice(i, i + chunkSize));
    }
    return results;
  };
  
  const Banner = () => {
    const navigate = useNavigate(); // Utilisez useNavigate pour la navigation
  
    const handleSelect = (id) => {
      navigate(`/company/${id}`); // Redirige vers la page de détails de l'entreprise
    };
  
    const employerChunks = chunkArray(employers, 3);
  
    return (
      <div className="container">
        <h2>Featured Employers</h2>
        <Carousel>
          {employerChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row>
                {chunk.map((employer) => (
                  <Col key={employer.id} md={4}>
                    <Card onClick={() => handleSelect(employer.id)} style={{ cursor: 'pointer' }}>
                      <Card.Img
                        variant="top"
                        src={employer.image}
                        alt={employer.name}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <Card.Body>
                        <Card.Title>{employer.name}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  };
  
  export default Banner;