export interface MatchData {
    team1Name: string;
    team2Name: string;
    team1Logo: string;
    team2Logo: string;
    date: string;
    time: string;
}

export interface TournamentStats {
    numberOfTournaments: number;
    participants: number;
    matchesPlayed: number;
}

export const matchesData: MatchData[] = [
    {
        team1Name: "Équipe A",
        team2Name: "Équipe B",
        team1Logo: "https://example.com/team1_logo.png",
        team2Logo: "https://example.com/team2_logo.png",
        date: "2024-07-05",
        time: "18:00"
    },
    {
        team1Name: "Équipe C",
        team2Name: "Équipe D",
        team1Logo: "https://example.com/team3_logo.png",
        team2Logo: "https://example.com/team4_logo.png",
        date: "2024-07-06",
        time: "20:00"
    },
    {
        team1Name: "Équipe C",
        team2Name: "Équipe D",
        team1Logo: "https://example.com/team3_logo.png",
        team2Logo: "https://example.com/team4_logo.png",
        date: "2024-07-06",
        time: "20:00"
    },
    {
        team1Name: "Équipe C",
        team2Name: "Équipe D",
        team1Logo: "https://example.com/team3_logo.png",
        team2Logo: "https://example.com/team4_logo.png",
        date: "2024-07-06",
        time: "20:00"
    }
    // Ajoutez d'autres matchs ici
];

export const tournamentStats: TournamentStats = {
    numberOfTournaments: 10,
    participants: 150,
    matchesPlayed: 47
};
