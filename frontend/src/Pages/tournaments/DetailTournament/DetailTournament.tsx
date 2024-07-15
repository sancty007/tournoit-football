// src/TournamentDetail.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../../../components/ui/card';

const TournamentDetail = () => {
    const { id } = useParams();
    const [tournament, setTournament] = useState(null);

    useEffect(() => {
        const fetchTournament = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/tournaments/${id}/`);
                setTournament(response.data);
            } catch (error) {
                console.error("There was an error fetching the tournament details!", error);
            }
        };

        fetchTournament();
    }, [id]);

    if (!tournament) return <div>Loading...</div>;

    return (
        <Card className="min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">{tournament.name}</h1>
            <p>Start Date: {tournament.start_date}</p>
            <p>End Date: {tournament.end_date}</p>
            <p>Location: {tournament.location}</p>
            {/* Add management features here */}
        </Card>
    );
};

export default TournamentDetail;
