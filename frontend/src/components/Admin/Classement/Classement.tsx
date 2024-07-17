import React, { useState } from 'react';
import { Button } from '../../ui/button';
import CreatePouleModal from "../../Admin/Modal/PouleModal"
import classement1 from '/images/classement1.png';
import classement3 from '/images/classement3.png';
import classement4 from '/images/classement4.png';

interface Poule {
  id: number;
  teams: number;
}

export const Classement: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [poules, setPoules] = useState<Poule[]>([]);
  const [numPoules, setNumPoules] = useState<string>('');
  const [teamsPerPoule, setTeamsPerPoule] = useState<string>('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setNumPoules('');
    setTeamsPerPoule('');
  };

  const handleAddPoules = () => {
    const newPoules = Array.from({ length: parseInt(numPoules) }, (_, i) => ({
      id: i + poules.length,
      teams: parseInt(teamsPerPoule),
    }));
    setPoules([...poules, ...newPoules]);
    handleCloseModal();
  };

  const handleDeletePoule = (id: number) => {
    setPoules(poules.filter(poule => poule.id !== id));
  };

  return (
    <div className="p-8 space-y-5">
      <h1 className="text-center">Choisissez un classement de tournoi</h1>
      <div className="flex flex-col gap-4 lg:flex-row justify-between">
        <div className="w-full group relative" >
          <h2 className="text-center">Seulement les phases de groupe</h2>
          <img src={classement1} className="w-full" alt="Classement 1" />
          <Button onClick={handleOpenModal} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16 p-8 bg-blue-600" >
          Seulement les phases de groupe
          </Button>
        </div>
        <div className="w-full group relative" onClick={handleOpenModal}>
          <h2 className="text-center">Phase de poules et phase éliminatoire</h2>
          <img src={classement3} className="w-full" alt="Classement 3" />
          <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16 p-8 bg-blue-600">
          Phase de poules et phase éliminatoire
          </Button>
        </div>
        <div className="w-full group relative" onClick={handleOpenModal}>
          <h2 className="text-center">Phase éliminatoire seulement</h2>
          <img src={classement4} className="w-full" alt="Classement 4" />
          <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16 p-8 bg-blue-600">
          Phase éliminatoire seulement
          </Button>
        </div>
      </div>

      <CreatePouleModal
        show={showModal}
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
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Poule</th>
                <th className="border p-2">Nombre d'équipes</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {poules.map((poule) => (
                <tr key={poule.id}>
                  <td className="border p-2">{`Poule ${poule.id + 1}`}</td>
                  <td className="border p-2">{poule.teams}</td>
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
        </div>
      )}
    </div>
  );
};
