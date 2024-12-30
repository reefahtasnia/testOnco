import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState('');
    const [loggedInUser, setLoggedInUser] = useState('');

    useEffect(() => {
        // Retrieve the logged-in user's username from local storage
        const username = localStorage.getItem('loggedInUser');
        if (username) {
            setLoggedInUser(username);
        }
    }, []);

    const handleSearch = async () => {
        try {
            console.log(`Searching for: ${searchQuery}`);
            const response = await axios.get(`http://localhost:5000/search?username=${searchQuery}`);
            console.log('Response:', response.data);
            if (response.data.success) {
                setSearchResult(response.data.user);
                setError('');
            } else {
                setSearchResult(null);
                setError(response.data.message);
            }
        } catch (error) {
            console.error('Error during search:', error);
            setSearchResult(null);
            setError('Error searching for users.');
        }
    };

    const handleAdd = async () => {
        if (!searchResult) return;

        try {
            const response = await axios.post('http://localhost:5000/addFriend', {
                username: searchResult.username,
                sentBy: loggedInUser, // Use the logged-in user's username
            });

            if (response.data.success) {
                alert('Friend request sent successfully.');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error sending friend request:', error);
            alert('Failed to send friend request.');
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <h2>Search for Users</h2>
            <div>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {searchResult && (
                <div>
                    <p>
                        <strong>Username:</strong> {searchResult.username}
                    </p>
                    <button onClick={handleAdd}>Add</button>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Dashboard;
