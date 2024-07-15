// src/TournamentList.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/ui/card';

interface Tournament {
    id: number;
    name: string;
    start_date: string;
    end_date: string;
    location: string;
}

const TournamentList = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const response = await axios.get('http://localhost:8000/tournaments/');
                setTournaments(response.data);
            } catch (error) {
                console.error("There was an error fetching the tournaments!", error);
            }
        };

        fetchTournaments();
    }, []);

    return (
        <Card className="min-h-screen p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Liste des tournois</h1>
            <ul>
                {tournaments.map(tournament => (
                    <li key={tournament.id} className="mb-4">
                        <Link to={`/tournaments/${tournament.id}`} className="text-blue-500">
                            {tournament.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default TournamentList;
