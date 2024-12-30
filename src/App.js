import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; 
import Footer from './components/Footer'; 
import Navbar from './components/Nav'; 
import Home from './components/Home.js'; 
import EditProfile from './components/editProfile.js';
import Forum from './components/communityforum.js'; 
import NewQuestion from './components/newPost.js';
import Signup from './components/Signup.js';
import CancerScreening from './components/CancerScreening.js';
import PassordReset from './components/resetPassword.js';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/editProfile" element={ <EditProfile />} />
                <Route path="/forum" element={ <Forum />} />
                <Route path="/signup" element={ <Signup />} />
                <Route path="/cancerscreening" element={ <CancerScreening />} />
                <Route path="/forgot-password" element={ <PassordReset />} />
                <Route path="/newquestion" element={ <NewQuestion />} />
            </Routes>
        </Router>
    );
}

export default App;
