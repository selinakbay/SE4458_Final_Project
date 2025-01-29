import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SearchDoctors() {
    const [doctors, setDoctors] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query.length > 2) {
            axios.get(`/api/doctors?search=${query}`).then(response => {
                setDoctors(response.data);
            });
        }
    }, [query]);

    return (
        <div>
            <h2>Search Doctors</h2>
            <input type="text" placeholder="Search by name or specialty" value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {doctors.map(doc => (
                    <li key={doc._id}>{doc.name} - {doc.specialty}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchDoctors;
