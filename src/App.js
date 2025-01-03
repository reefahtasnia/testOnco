import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Login from './components/Login';
import Footer from './components/Footer';
import Navbar from './components/Nav';
import Home from './components/Home.js';
import EditProfile from './components/editProfile.js';
import Forum from './components/communityforum.js';
import NewQuestion from './components/newPost.js';
import ViewPost from './components/viewPost.js';
import Signup from './components/Signup.js';
import CancerScreening from './components/CancerScreening.js';
import PassordReset from './components/resetPassword.js';
import DoctorDashboard from './dashboard.js';
import UserDashboard from './user-dashboard/dashboard.js';
import UserMedicines from './user-dashboard/medicine.js';
import UserMessages from './user-dashboard/messages.js';

const PageWrapper = ({ children }) => {
    const location = useLocation();
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  };

function App() {
    const location = useLocation();

    // Define routes where the Navbar should not appear
    const noNavbarRoutes = ['/', '/login', '/signup', '/forgot-password'];

    return (
        <>
            {/* Render Navbar only if the current route is not in the noNavbarRoutes array */}
            {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/editProfile" element={<EditProfile />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cancerscreening" element={<CancerScreening />} />
                <Route path="/forgot-password" element={<PassordReset />} />
                <Route path="/newquestion" element={<NewQuestion />} />
                <Route path="/viewpost" element={<ViewPost />} />
                <Route path="/doctor" element={<DoctorDashboard />} />
                <Route path="/user" element={<UserDashboard  />}/>
                <Route path="/user/medicine" element={<UserMedicines  />} />
                <Route path="/user/messages" element={<UserMessages />} />
            </Routes>
        </>
    );
}

export default function RootApp() {
    return (
        <Router>
            <App />
        </Router>
    );
}
