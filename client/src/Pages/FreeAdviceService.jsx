import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import img4 from '../assets/4.jpg';  // Remplacez par le chemin correct vers vos images
import img5 from '../assets/5.jpg';

const FreeAdviceService = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Container className="my-5">
                <Row>
                    <Col md={6}>
                        <img src={img4} alt="img4" style={{ width: '100%' }} />
                    </Col>
                    <Col md={6}>
                        <img src={img5} alt="img5" style={{ width: '100%' }} />
                    </Col>
                </Row>
            </Container>
            {/* <Footer /> */}
        </div>
    );
};

export default FreeAdviceService;
