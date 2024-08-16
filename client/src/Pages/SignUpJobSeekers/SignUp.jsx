import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import image12 from '../../assets/16.jpg'; // Import the new image
import { useNavigate } from 'react-router-dom';
import '../SignUpJobSeekers/SignUp.css';

const CreateAccount = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        mobile: '',
        address: '',
        github: '',
        twitter: '',
        instagram: '',
        facebook: '',
        job_title: '',
        location: '',
        website: '',
        experience: '',
        education: '',
        skills: ''
    });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNext = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevious = () => {
        setCurrentStep((prev) => prev - 1);
    };

    const validateStep1 = () => {
        return formData.firstName && formData.lastName && formData.email && formData.password;
    };

    const validateStep2 = () => {
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessageType('');
        setMessage('');
        setLoading(true);

        if (!validateStep1()) {
            setMessageType('error');
            setMessage('Please fill in all required fields in step 1.');
            setLoading(false);
            return;
        }

        if (!validateStep2()) {
            setMessageType('error');
            setMessage('Please check the fields in step 2.');
            setLoading(false);
            return;
        }

        try {
            await axios.post('http://localhost:3026/api/users/register', formData);
            setMessageType('success');
            setMessage('Account created successfully! Redirecting to login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setMessageType('error');
            setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (  
        <section className="text-">
    <img src={image12} alt="Background" className="img" />
                <div className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary" style={{
                    backdropFilter: 'blur(30px)'
                }}>
                    <div className="card-body py-5 px-md-5">
                        {currentStep === 1 && (
                            <h2 className="fw-bold mb-5"></h2>
                        )}
                        {message && (
                            <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
                                {message}
                            </div>
                        )}
       
                            <form onSubmit={handleSubmit}>
                                {currentStep === 1 && (
                                    <>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="First Name"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="firstName">First name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Last Name"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="lastName">Last name</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="email">Email address</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="phone">Phone</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Mobile"
                                                        name="mobile"
                                                        value={formData.mobile}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="mobile">Mobile</label>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {currentStep === 2 && (
                                    <>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Address"
                                                        name="address"
                                                        value={formData.address}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="address">Address</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="GitHub"
                                                        name="github"
                                                        value={formData.github}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="github">GitHub</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Twitter"
                                                        name="twitter"
                                                        value={formData.twitter}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="twitter">Twitter</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Instagram"
                                                        name="instagram"
                                                        value={formData.instagram}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="instagram">Instagram</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Facebook"
                                                        name="facebook"
                                                        value={formData.facebook}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="facebook">Facebook</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Job Title"
                                                        name="job_title"
                                                        value={formData.job_title}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="job_title">Job Title</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Location"
                                                        name="location"
                                                        value={formData.location}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="location">Location</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Website"
                                                        name="website"
                                                        value={formData.website}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="website">Website</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Experience"
                                                        name="experience"
                                                        value={formData.experience}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="experience">Experience</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Education"
                                                        name="education"
                                                        value={formData.education}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="education">Education</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Skills"
                                                        name="skills"
                                                        value={formData.skills}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" htmlFor="skills">Skills</label>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                      <div className="row">
                                    <div className="col-md-6 mb-4">
                                        {currentStep > 1 && (
                                            <button type="button" className="btn btn-secondary btn-block mb-4" onClick={handlePrevious}>
                                                Previous
                                            </button>
                                        )}
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        {currentStep < 2 && (
                                            <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleNext}>
                                                Next
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {currentStep === 2 && (
                                    <button type="submit" className="btn btn-primary btn-block mb-4">
                                        {loading ? 'Creating Account...' : 'Sign up'}
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                

                
            
        </section>
    );
};

export default CreateAccount;
                               