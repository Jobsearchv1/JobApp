import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import './BlogCard.css'; // Custom CSS for additional styling

// Import images from assets
import bloganswering from '../../assets/bloganswering.jpg';
import Blogchallenge from '../../assets/Blogchallenge.jpg';
import blogreact from '../../assets/blogreact.jpg';
import blogreacttest from '../../assets/blogreacttest.png';
import blogwoman from '../../assets/blogwoman.jpg';

const BlogCard = () => {
  const [blogs, setBlogs] = useState([
    {
      image: bloganswering,
      title: 'Answering: ',
      description: 'What Is Your Biggest Weakness?',
      date: 'August 13, 2024',
      authorImage: 'https://via.placeholder.com/50',
      badges: ['INTERVIEWS', 'OFFERS'],
    },
    {
      image: blogreact,
      title: 'Advanced React',
      description: 'Dive deep into React hooks and performance optimization.',
      date: 'August 14, 2024',
      authorImage: 'https://via.placeholder.com/50',
      badges: ['React', 'Redux', 'Management'],
    },
    {
      image: Blogchallenge,
      title: '#RiseToTheChallenge:',
      description: 'RiseToTheChalleng,Achieve Professional Growth',
      date: 'August 15, 2024',
      authorImage: 'https://via.placeholder.com/50',
      badges: ['React', 'Redux', 'Management'],
    },
    {
      image: blogreacttest,
      title: 'React Testing',
      description: 'Best practices for testing React components.',
      date: 'August 16, 2024',
      authorImage: 'https://via.placeholder.com/50',
      badges: ['React', 'Testing', 'Jest'],
    },
    {
      image: blogwoman,
      title: 'Women Day',
      description: 'Best World, Best Woman, so Great life.',
      date: 'August 13, 2024',
      authorImage: 'https://via.placeholder.com/50',
      badges: ['Woman', 'Life', 'Happiness'],
    },
  ]);

  const [formData, setFormData] = useState({
    image: '',
    title: '',
    description: '',
    date: '',
    authorImage: '',
    badges: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      ...formData,
      badges: formData.badges.split(',').map((badge) => badge.trim()), // Convert badges to an array
    };
    setBlogs([newBlog, ...blogs]); // Add the new blog
    setFormData({
      image: '',
      title: '',
      description: '',
      date: '',
      authorImage: '',
      badges: '',
    });
  };

  const handleDelete = (indexToDelete) => {
    setBlogs(blogs.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Container>
      <Row>
        <Col md={4} className="form-col">
          <div className="form-container">
            <h2>Add a New Blog</h2>
            <Form onSubmit={handleSubmit} className="mb-5">
              {/* Form inputs for adding a new blog */}
              <Form.Group controlId="formImage">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter title"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Enter description"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAuthorImage">
                <Form.Label>Author Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="authorImage"
                  value={formData.authorImage}
                  onChange={handleChange}
                  placeholder="Enter author image URL"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBadges">
                <Form.Label>Badges (comma-separated)</Form.Label>
                <Form.Control
                  type="text"
                  name="badges"
                  value={formData.badges}
                  onChange={handleChange}
                  placeholder="Enter badges separated by commas"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add Blog
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={8}>
          <h2 className="mt-5">Blog Posts</h2>
          <div className="row">
            {blogs.map((blog, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={blog.image} alt={blog.title} />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>{blog.description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">{blog.date}</small>
                      <img
                        src={blog.authorImage}
                        alt="Author"
                        style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                      />
                    </div>
                    <div className="mt-2">
                      {blog.badges.map((badge, idx) => (
                        <span key={idx} className="badge bg-secondary me-1">
                          {badge}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="danger"
                      size="sm"
                      className="mt-3"
                      onClick={() => handleDelete(index)}
                    >
                      <FaTrash /> Delete
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogCard;