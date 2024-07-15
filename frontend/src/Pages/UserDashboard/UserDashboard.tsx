/* eslint-disable react-refresh/only-export-components */
import { Card } from "../../components/ui/card";
import { matchesData, tournamentStats } from "../../matchData/MatchData";

export const UserDashboard = () => {
    return (
        <>
            <div className="py-20">
                <div className="userdashboard">
                    <h1 className="text-3xl font-bold mb-6 text-center">User Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="userdashboardCard">
                            <h2 className="text-xl font-semibold mb-4">Statistiques des tournois</h2>
                            <p>Nombre de tournois: {tournamentStats.numberOfTournaments}</p>
                            <p>Participants: {tournamentStats.participants}</p>
                            <p>Matchs joués: {tournamentStats.matchesPlayed}</p>
                        </Card>
                        {matchesData.map((match, index) => (
                            <Card className="userdashboardCard" key={index}>
                                <h2 className="text-xl font-semibold mb-4">Prochain match</h2>
                                <div className="flex items-center mb-4">
                                    <img src={match.team1Logo} alt={`${match.team1Name} logo`} className="w-12 h-12 mr-4" />
                                    <p>{match.team1Name} vs {match.team2Name}</p>
                                    <img src={match.team2Logo} alt={`${match.team2Name} logo`} className="w-12 h-12 ml-4" />
                                </div>
                                <p>Date: {match.date}</p>
                                <p>Heure: {match.time}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};



    
