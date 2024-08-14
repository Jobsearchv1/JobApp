
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UserProvider } from './components/users/UserContext.jsx'; 
import Navbar from "./components/Navbar";
import Hero from './Pages/Home/Hero.jsx';
import Error from "./Pages/Error/Error.jsx";
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx'
import CreateAccountPage from "./components/users/Sign Up/SignUp.jsx";
import LoginPage from "./components/users/Login/Login.jsx";
import ProfilePage from './components/users/ProfilePage.jsx';
import CompanyDetails from './components/users/CompanyDetails.jsx'; // Importez le composant CompanyDetails
import banner from './components/Banner.jsx'
import JobDetails from './components/users/JobDetails.jsx'
import ApplyPage from './components/users/ApplyPage.jsx'; // Importez le composant ApplyPage
import UserList from './components/users/UserList.jsx'; 
import Dashboard from './components/users/Dashboard.jsx';   
import Templates from './components/users/Templates.jsx';
import Features from './components/users/Features.jsx';
import ErrorBoundary from './components/users/ErrorBoundary.jsx';
import BlogCard from './components/users/BlogCard.jsx';

function AppContent() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/error" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<CreateAccountPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/company/:id" element={<CompanyDetails />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/apply/:id" element={<ApplyPage />} />
          <Route path="/Templates" element={<Templates />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/blog" element={<BlogCard />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-list" element={<UserList />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <UserProvider>
        <ErrorBoundary>
          <AppContent />
        </ErrorBoundary>
      </UserProvider>
    </Router>
  );
}

export default App;