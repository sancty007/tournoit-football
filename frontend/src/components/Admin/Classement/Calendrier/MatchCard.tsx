import React from 'react';

interface Team {
  name: string;
  logoUrl: string;
}

interface MatchCardProps {
  team1: Team;
  team2: Team;
}

const MatchCard: React.FC<MatchCardProps> = ({ team1, team2 }) => {
  return (
    <div className="border rounded-md p-4 shadow-lg gap-3 bg-white flex items-center justify-between">
      <div className="flex items-center">
        <img src={team1.logoUrl} alt={team1.name} className="w-16 h-16 object-cover mr-4" />
        <h3 className="text-lg font-semibold">{team1.name}</h3>
      </div>
      <span className="text-xl font-bold">vs</span>
      <div className="flex items-center">
        <h3 className="text-lg font-semibold">{team2.name}</h3>
        <img src={team2.logoUrl} alt={team2.name} className="w-16 h-16 object-cover ml-4" />
      </div>
    </div>
  );
};

export default MatchCard;
