import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup'; // Adjust the path if necessary
import Login from './components/Login'; // Adjust the path if necessary
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <Routes>
                {/* Default Route */}
                <Route path="/" element={<Signup />} />
                {/* Login Route */}
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
