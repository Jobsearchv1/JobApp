import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

import './About.css'


function About() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          
          <Carousel.Caption>
            <h3>Send an email to hello@remoteworker.com and a member of our Support team will get back to you within 24 hours.</h3>
            <p>Remote Worker Ltd<br/>
            83 Alma Road<br/>
            Clifton<br/>
            Bristol<br/>
            BS8 2DP</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p className='linee'>__________________________________________________________________________________________________________________________________</p>

      <Container>
        <section className="about-us my-5">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i className="bi bi-info-circle me-2"></i>
                    About Us
                  </Card.Title>
                  <Card.Text>
                    Remote Worker Ltd is dedicated to connecting talented job seekers with employers who offer remote work opportunities. Our mission is to empower individuals to find flexible, rewarding careers that can be performed from anywhere in the world.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="remote-work my-5">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i className="bi bi-laptop me-2"></i>
                    Remote Work
                  </Card.Title>
                  <Card.Text>
                    Embracing remote work opens up a world of opportunities for both employees and employers. It provides flexibility, improves work-life balance, and allows companies to tap into a global talent pool. Our platform is designed to facilitate this transition and support the remote work community.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="our-service my-5">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i className="bi bi-concierge-bell me-2"></i>
                    Our Service
                  </Card.Title>
                  <Card.Text>
                    We offer a comprehensive job board, application management system, and resources to help job seekers and employers navigate the remote work landscape. From job listings to application tracking and beyond, we are here to support your remote work journey.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="our-value my-5">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i className="bi bi-people me-2"></i>
                    Our Value for Job Seekers
                  </Card.Title>
                  <Card.Text>
                    For job seekers, we provide access to a wide range of remote job opportunities and tools to enhance your job search experience. Our goal is to create a seamless experience and facilitate successful remote work engagements.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section className="add-value-employers my-5">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i className="bi bi-briefcase me-2"></i>
                    Add Value for Employers
                  </Card.Title>
                  <Card.Text>
                    For employers, we offer a platform to post job openings, manage applications, and connect with top remote talent. Our services are designed to support employers in finding the best candidates for their remote positions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>

      <Categorie />
    </>
  );
}

export default About;