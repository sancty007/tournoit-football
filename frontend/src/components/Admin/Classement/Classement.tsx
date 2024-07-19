import React, { useState, useEffect } from 'react';
import { Button } from '../../ui/button';
import CreatePouleModal from '../../Admin/Modal/PouleModal';
import classement1 from '/images/classement1.png';
import classement3 from '/images/classement3.png';
import classement4 from '/images/classement4.png';

interface Team {
  name: string;
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

  useEffect(() => {
    // Retrieve teams from localStorage
    const savedEntries = localStorage.getItem("entries");
    if (savedEntries) {
      const parsedEntries = JSON.parse(savedEntries);
      setAvailableTeams(parsedEntries.equipes.map((name: string) => ({ name })));
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

    const newPoules = Array.from({ length: totalPoules }, (_, i) => ({
      id: i + poules.length,
      teams: availableTeams.slice(i * teamsInEachPoule, (i + 1) * teamsInEachPoule),
    }));

    setPoules([...poules, ...newPoules]);
    handleCloseModal();
  };

  const handleDeletePoule = (id: number) => {
    setPoules(poules.filter(poule => poule.id !== id));
  };

  const handleEditPoule = (id: number) => {
    // Logic to add or edit teams within a poule can be added here
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
                        <li key={index}>{team.name}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="border p-2">
                    <Button
                      className="bg-blue-500 text-white mr-2"
                      onClick={() => handleEditPoule(poule.id)}
                    >
                      Modifier
                    </Button>
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
        </div>
      )}
    </div>
  );
};
