import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import SearchDoctors from './components/SearchDoctors';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/search">Search</Link>
                <Link to="/login">Login</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchDoctors />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
