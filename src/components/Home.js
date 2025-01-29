import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Doctor Appointment System</h1>
            <Link to="/search">Search Doctors</Link>
        </div>
    );
}

export default Home;
