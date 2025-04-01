import axios from 'axios';
import { useState, FormEvent } from 'react';
import { Input } from '../../../components/ui/input';
import { Card } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { useNavigate } from 'react-router-dom';

// Fonction pour sauvegarder les tournois dans le localStorage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const saveTournamentToLocalStorage = (tournament: any) => {
    const storedTournaments = JSON.parse(localStorage.getItem('tournaments') || '[]');
    storedTournaments.push(tournament);
    localStorage.setItem('tournaments', JSON.stringify(storedTournaments));
};

export const CreateTournament = () => {
    const [name, setName] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [error, setError] = useState<string>('');

    const navigate = useNavigate();

    // Fonction pour vérifier les dates
    const validateDates = (start: string, end: string) => {
        const today = new Date().toISOString().split('T')[0];
        if (start < today) {
            return 'La date de début ne peut pas être dans le passé.';
        }
        if (end < start) {
            return 'La date de fin ne peut pas être antérieure à la date de début.';
        }
        return '';
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Validation des dates
        const dateError = validateDates(startDate, endDate);
        if (dateError) {
            setError(dateError);
            return;
        }

        try {
            // Envoyer les données au backend
            const response = await axios.post('http://localhost:8000/tournaments/', {
                name,
                start_date: startDate,
                end_date: endDate,
                location,
            });

            if (response.data.success) {
                // Créer un nouvel objet tournoi
                const newTournament = {
                    id: response.data.id, // Id provenant de la réponse API
                    name,
                    start_date: startDate,
                    end_date: endDate,
                    location,
                };

                // Enregistrer le tournoi dans le localStorage
                saveTournamentToLocalStorage(newTournament);

                setSuccess('Tournoi créé avec succès !');
                setError('');
                setName('');
                setStartDate('');
                setEndDate('');
                setLocation('');
                navigate('/login/tournaments'); // Redirection vers la liste des tournois
            } else {
                throw new Error('Échec de la création du tournoi.');
            }
        } catch (err) {
            // En cas d'erreur API, sauvegarder les données dans localStorage
            const newTournament = {
                id: Date.now(), // Utiliser un ID temporaire basé sur le timestamp
                name,
                start_date: startDate,
                end_date: endDate,
                location,
            };

            saveTournamentToLocalStorage(newTournament);

            setSuccess('Tournoi créé avec succès, mais la sauvegarde en ligne a échoué.');
            setError('');
            setName('');
            setStartDate('');
            setEndDate('');
            setLocation('');
            navigate('/login/tournaments'); // Redirection vers la liste des tournois
        }
    };

    return (
        <Card className="min-h-screen p-4 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Créer un nouveau tournoi</h2>
                {success && <p className="text-green-500 mb-4">{success}</p>}
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="name">Nom du tournoi</label>
                    <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="start_date">Date de début</label>
                    <Input
                        type="date"
                        id="start_date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="end_date">Date de fin</label>
                    <Input
                        type="date"
                        id="end_date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="location">Lieu</label>
                    <Input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <Button
                        type="submit"
                        className="w-full p-2 rounded"
                    >
                        Créer
                    </Button>
                </div>
            </form>
        </Card>
    );
};
