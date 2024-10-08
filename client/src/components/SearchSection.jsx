import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchSection.css'; // Importez votre fichier CSS pour les styles personnalisés

// Liste statique des pays pour l'exemple
const countries = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'FR', name: 'France' },
  // Ajoutez d'autres pays ici
];

const SearchSection = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    keyword: '',
    location: '', // Pour la liste déroulante
    distance: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData.location); // Passe la localisation au parent
  };

  return (
    <div className="search-section">
      <div className="overlay">
        <h2>The Home of Remote Workers</h2>
        <p>Learn the right skills, find the perfect job and become location independent</p>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={4}>
              <Form.Group controlId="formKeyword">
                <Form.Control
                  type="text"
                  name="keyword"
                  placeholder="Keyword"
                  value={formData.keyword}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formLocation">
                
                <Form.Control
                  as="select"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId="formDistance">
                <Form.Control
                  type="text"
                  name="distance"
                  placeholder="Distance"
                  value={formData.distance}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default SearchSection;
