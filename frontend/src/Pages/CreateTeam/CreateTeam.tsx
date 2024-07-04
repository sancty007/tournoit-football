// src/CreateTeam.js

import axios from 'axios';
import { useState } from 'react';

export const CreateTeam = ({ tournamentId }) => {
    const [name, setName] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8000/tournaments/${tournamentId}/create-team/`, {
                name,
            });
            if (response.data.success) {
                setSuccess('Team created successfully!');
                setError('');
            } else {
                setError('Failed to create team.');
                setSuccess('');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Create New Team</h2>
                {success && <p className="text-green-500 mb-4">{success}</p>}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Team Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Create
                </button>
            </form>
        </div>
    );
};

