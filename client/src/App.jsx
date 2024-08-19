
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UserProvider } from './components/users/UserContext.jsx'; 
import Navbar from "./components/NavbarHome/NavbarHome.jsx";
import Home from "../src/Pages/HomeGlobal/Home.jsx";
import Hero from './Pages/Home/Hero.jsx';
import Error from "./Pages/Error/Error.jsx";
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx'
import LoginPage from './Pages/LoginJobSeekers/Login.jsx';
import CreateAccountPage from './Pages/SignUpJobSeekers/SignUp.jsx';

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
import Footer from './components/Footer.jsx';
import Header from "./components/users/Header.jsx";

import FreeAdviceService from './Pages/FreeAdviceService.jsx';
import LearnMore from './Pages/LearnMore.jsx';
import ProhibitedActions from './Pages/Prohibited actions.jsx';
function AppContent() {
  const [loggedIn,setloggedIn] = useState(false);
  return (
    <>
     {loggedIn ? <Header /> : <Navbar />}

     
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/error" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

       
          {/* <Route path="/sign-up" element={<CreateAccountPage />} />
          <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/company/:id" element={<CompanyDetails />} />
          <Route path="/sign-up" element={<CreateAccountPage />} />
          <Route
            path="/login"
            element={
              <LoginPage loggedIn={loggedIn} setloggedIn={setloggedIn} />
            }
          />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/apply/:id" element={<ApplyPage />} />
          <Route path="/Templates" element={<Templates />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/blog" element={<BlogCard />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-list" element={<UserList />} />

          <Route path="/free-advice" element={<FreeAdviceService />} />
                            <Route path="/learn-more" element={<LearnMore />} />
                            <Route path="/prohibited-actions" element={<ProhibitedActions />} />
        </Routes>
      </div>
      {location.pathname !== '/HomeGlobale' && <Footer />}
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