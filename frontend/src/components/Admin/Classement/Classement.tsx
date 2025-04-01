import React, { useState, useEffect } from 'react';
import { Button } from '../../ui/button';
import CreatePouleModal from '../../Admin/Modal/PouleModal';
import classement1 from '/images/classement1.png';
import classement3 from '/images/classement3.png';
import classement4 from '/images/classement4.png';
import MatchCard from './Calendrier/MatchCard'; // Adjust the path according to your project structure


interface Team {
  name: string;
  logoUrl?: string; // Added optional logoUrl property
}

interface Poule {
  id: number;
  teams: Team[];
}

export const Classement: React.FC = () => {
  const [showModal, setShowModal] = useState<number | null>(null);
  const [poules, setPoules] = useState<Poule[]>([]);
  const [numPoules, setNumPoules] = useState<string>('');
  const [teamsPerPoule, setTeamsPerPoule] = useState<string>('');
  const [availableTeams, setAvailableTeams] = useState<Team[]>([]);
  const [remainingTeams, setRemainingTeams] = useState<Team[]>([]);

  useEffect(() => {
    const savedEntries = localStorage.getItem("entries");
    if (savedEntries) {
      const parsedEntries = JSON.parse(savedEntries);
      const teams = parsedEntries.equipes.map((name: string) => ({ name, logoUrl: '' })); // Provide default logoUrl
      setAvailableTeams(teams);
      setRemainingTeams(teams);
    }
  }, []);

  const handleOpenModal = (index: number) => {
    setShowModal(index);
  };

  const handleCloseModal = () => {
    setShowModal(null);
    setNumPoules('');
    setTeamsPerPoule('');
  };

  const handleAddPoules = () => {
    const totalPoules = parseInt(numPoules);
    const teamsInEachPoule = parseInt(teamsPerPoule);
    let newPoules = [];

    for (let i = 0; i < totalPoules; i++) {
      const pouleTeams = remainingTeams.slice(i * teamsInEachPoule, (i + 1) * teamsInEachPoule);
      newPoules.push({ id: poules.length + i, teams: pouleTeams });
    }

    setPoules([...poules, ...newPoules]);
    const usedTeams = newPoules.flatMap(poule => poule.teams);
    setRemainingTeams(remainingTeams.filter(team => !usedTeams.includes(team)));
    handleCloseModal();
  };

  const handleDeletePoule = (id: number) => {
    const pouleToRemove = poules.find(poule => poule.id === id);
    if (pouleToRemove) {
      setRemainingTeams([...remainingTeams, ...pouleToRemove.teams]);
    }
    setPoules(poules.filter(poule => poule.id !== id));
  };

  const handleEditPoule = (id: number, teamIndex: number, newTeam: Team) => {
    setPoules(poules.map(poule => {
      if (poule.id === id) {
        const updatedTeams = [...poule.teams];
        updatedTeams[teamIndex] = newTeam;
        return { ...poule, teams: updatedTeams };
      }
      return poule;
    }));

    const updatedRemainingTeams = availableTeams.filter(team =>
      !poules.flatMap(poule => poule.teams).some(t => t.name === team.name)
    );
    setRemainingTeams(updatedRemainingTeams);
  };

  // Function to generate matches
  const generateMatches = (teams: Team[]) => {
    const matches: { team1: Team, team2: Team }[] = [];
    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        matches.push({ team1: teams[i], team2: teams[j] });
      }
    }
    return matches;
  };

  return (
    <div className="p-8 space-y-5">
      {poules.length === 0 && (
        <>
          <h1 className="text-center">Choisissez un classement de tournoi</h1>
          <div className="flex flex-col gap-4 lg:flex-row justify-between">
            <div className="w-full group relative" onClick={() => handleOpenModal(1)}>
              <h2 className="text-center">Seulement les phases de groupe</h2>
              <img src={classement1} className="w-full" alt="Classement 1" />
              <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16 p-8 bg-blue-600">
                Seulement les phases de groupe
              </Button>
            </div>
            <div className="w-full group relative" onClick={() => handleOpenModal(2)}>
              <h2 className="text-center">Phase de poules et phase éliminatoire</h2>
              <img src={classement3} className="w-full" alt="Classement 3" />
              <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16 p-8 bg-blue-600">
                Phase de poules et phase éliminatoire
              </Button>
            </div>
            <div className="w-full group relative" onClick={() => handleOpenModal(3)}>
              <h2 className="text-center">Phase éliminatoire seulement</h2>
              <img src={classement4} className="w-full" alt="Classement 4" />
              <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16 p-8 bg-blue-600">
                Phase éliminatoire seulement
              </Button>
            </div>
          </div>
        </>
      )}

      <CreatePouleModal
        show={showModal !== null}
        onClose={handleCloseModal}
        numPoules={numPoules}
        setNumPoules={setNumPoules}
        teamsPerPoule={teamsPerPoule}
        setTeamsPerPoule={setTeamsPerPoule}
        onAddPoules={handleAddPoules}
      />

      {poules.length > 0 && (
        <div>
          <h2 className="text-center mt-8">Tableau des Poules</h2>
          <Button
            className="bg-green-500 text-white mb-4"
            onClick={() => handleOpenModal(0)}
          >
            Ajouter une Poule
          </Button>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Poule</th>
                <th className="border p-2">Équipes</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {poules.map((poule) => (
                <tr key={poule.id}>
                  <td className="border p-2">{`Poule ${poule.id + 1}`}</td>
                  <td className="border p-2">
                    <ul>
                      {poule.teams.map((team, index) => (
                        <li key={index}>
                          <select
                            value={team.name}
                            onChange={(e) =>
                              handleEditPoule(poule.id, index, { name: e.target.value })
                            }
                          >
                            <option value={team.name}>{team.name}</option>
                            {remainingTeams.map((availableTeam, i) => (
                              <option key={i} value={availableTeam.name}>
                                {availableTeam.name}
                              </option>
                            ))}
                          </select>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border p-2">
                    <Button
                      className="bg-red-500 text-white"
                      onClick={() => handleDeletePoule(poule.id)}
                    >
                      Supprimer
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8">
            <h2 className="text-center mb-6">Matchs de Poules</h2>
            {poules.map((poule) => (
              <div key={poule.id} className="mb-6">
                <h3 className="text-xl font-bold text-center mb-4">{`Poule ${poule.id + 1}`}</h3>
                {generateMatches(poule.teams).map((match, index) => (
                  <MatchCard key={index} team1={match.team1} team2={match.team2} />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
