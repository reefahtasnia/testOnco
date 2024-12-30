import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; 
import Footer from './components/Footer'; 
import Navbar from './components/Nav'; 
import Home from './components/Home.js'; 
import EditProfile from './components/editProfile.js'
import Forum from './components/communityforum.js'; 
import Signup from './components/signup.js';
import CancerScreening from './components/CancerScreening.js';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/editProfile" element={ <EditProfile />} />
                <Route path="/forum" element={ <Forum />} />
                <Route path="/signup" element={ <Signup />} />
                <Route path="/cancerscreening" element={ <CancerScreening />} />
            </Routes>
        </Router>
    );
}

export default App;
