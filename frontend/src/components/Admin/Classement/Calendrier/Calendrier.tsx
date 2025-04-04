// src/components/Classement/Calendrier/Calendrier.tsx
import { useState, useEffect } from 'react';
import Innovation from "/images/Innovation.png"
import axios from 'axios';

const Calendrier = () => {
  const [matches, setMatches] = useState<{ date: string; teams: string }[]>([]);

  useEffect(() => {
    // Fetch schedule data from the backend
    axios.get('http://localhost:8000/api/calendrier')
      .then(response => {
        setMatches(response.data);
      })
      .catch(error => {
        console.error('Error fetching schedule data:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calendrier</h1>
      <div className="flex justify-center items-center">
  <img src={Innovation} className="w-1/2 h-auto" alt="Innovation" />
</div>
      <h1 className="text-2xl font-bold mb-5">EN COURS D'IMPLEMENTATION ......</h1>

      <ul>
        {matches.map((match, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{match.date}:</span> {match.teams}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendrier;
