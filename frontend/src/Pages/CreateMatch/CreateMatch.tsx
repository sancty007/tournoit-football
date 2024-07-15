// src/CreateMatch.js

import axios from 'axios';
import { useState } from 'react';

export const CreateMatch = () => {
    const [divisionId, setDivisionId] = useState('');
    const [teamHomeId, setTeamHomeId] = useState('');
    const [teamAwayId, setTeamAwayId] = useState('');
    const [matchDate, setMatchDate] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/matches/create/', {
                division_id: divisionId,
                team_home_id: teamHomeId,
                team_away_id: teamAwayId,
                match_date: matchDate,
            });
            if (response.data.success) {
                setSuccess('Match created successfully!');
                setError('');
            } else {
                setError('Failed to create match.');
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
                <h2 className="text-2xl font-bold mb-6 text-center">Create New Match</h2>
                {success && <p className="text-green-500 mb-4">{success}</p>}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="divisionId">Division ID</label>
                    <input
                        type="number"
                        id="divisionId"
                        value={divisionId}
                        onChange={(e) => setDivisionId(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="teamHomeId">Team Home ID</label>
                    <input
                        type="number"
                        id="teamHomeId"
                        value={teamHomeId}
                        onChange={(e) => setTeamHomeId(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="teamAwayId">Team Away ID</label>
                    <input
                        type="number"
                        id="teamAwayId"
                        value={teamAwayId}
                        onChange={(e) => setTeamAwayId(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="matchDate">Match Date</label>
                    <input
                        type="datetime-local"
                        id="matchDate"
                        value={matchDate}
                        onChange={(e) => setMatchDate(e.target.value)}
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


