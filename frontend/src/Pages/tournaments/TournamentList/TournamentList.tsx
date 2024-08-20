import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';

export const TournamentsList = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [tournaments, setTournaments] = useState<any[]>([]);

    useEffect(() => {
        // Récupérer les tournois depuis le localStorage
        const storedTournaments = JSON.parse(localStorage.getItem('tournaments') || '[]');
        setTournaments(storedTournaments);
    }, []);

    return (
        <Card className="min-h-screen p-4 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6">Liste des Tournois</h2>
            {tournaments.length === 0 ? (
                <p>Aucun tournoi disponible.</p>
            ) : (
                <ul className="grid grid-cols-1 w-full lg:grid-flow-col gap-4">
                    {tournaments.map((tournament) => (
                        <li key={tournament.id} className="mb-4 p-4 border rounded">
                            <h3 className="text-xl font-semibold">{tournament.name}</h3>
                            <p><strong>Date de début:</strong> {tournament.start_date}</p>
                            <p><strong>Date de fin:</strong> {tournament.end_date}</p>
                            <p><strong>Lieu:</strong> {tournament.location}</p>
                            <Link to={"/login/tournaments/DashboardAmin"}>
                                <Button className="mt-2">Voir Détails</Button>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </Card>
    );
};
