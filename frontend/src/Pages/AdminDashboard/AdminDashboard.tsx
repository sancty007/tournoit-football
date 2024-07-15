// src/AdminDashboard.js

//import { useNavigate } from 'react-router-dom';

export const AdminDashboard = () => {
    //const navigate = useNavigate();

    /* const handleCreateTournament = () => {
        navigate('/create-tournament');
    };

    const handleViewStatistics = () => {
        navigate('/view-statistics');
    };

    const handleCreateTeam = () => {
        // Replace `1` with the actual tournament ID if applicable
        navigate(`/tournaments/1/create-team`);
    };

    const handleAddPlayer = () => {
        // Replace `1` with the actual team ID if applicable
        navigate(`/teams/1/add-player`);
    };
 */
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Statistiques des tournois</h2>
                    <p>Nombre de tournois: 10</p>
                    <p>Participants: 150</p>
                    <p>Matchs joués: 45</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Prochain match</h2>
                    <p>Équipe A vs Équipe B</p>
                    <p>Date: 05/07/2024</p>
                    <p>Heure: 18:00</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Actions rapides</h2>
                    <button
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-2"
                        //onClick={handleCreateTournament}
                    >
                        Créer un nouveau tournoi
                    </button>
                    <button
                        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                        //onClick={handleViewStatistics}
                    >
                        Voir les statistiques
                    </button>
                    <button
                        className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
                        //onClick={handleCreateTeam}
                    >
                        Créer une nouvelle équipe
                    </button>
                    <button
                        className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600"
                        //onClick={handleAddPlayer}
                    >
                        Ajouter un joueur
                    </button>
                </div>
            </div>
        </div>
    );
};

