// src/UserDashboard.js

export const UserDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">User Dashboard</h1>
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
            </div>
        </div>
    );
};

