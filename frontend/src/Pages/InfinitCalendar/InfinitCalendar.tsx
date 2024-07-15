// src/components/ui/infinite-moving-cards.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Match {
  match_id: number;
  teams: string[];
  date: string;
}

export const InfiniteMovingCards = () => {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    // Fetch match data from the backend
    axios.get('http://localhost:8000/api/calendrier')
      .then(response => {
        setMatches(response.data);
      })
      .catch(error => {
        console.error('Error fetching match data:', error);
      });
  }, []);

  return (
    <div className="flex overflow-x-scroll space-x-4 p-4">
      {matches.map((match, index) => (
        <div key={index} className="p-4 bg-white rounded shadow-md min-w-[200px]">
          <p className="font-bold">{new Date(match.date).toLocaleString()}</p>
          <p>{match.teams.join(' vs ')}</p>
        </div>
      ))}
    </div>
  );
};
