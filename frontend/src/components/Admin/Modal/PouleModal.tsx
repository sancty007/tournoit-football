import React from 'react';
import { Button } from '../../ui/button';

interface CreatePouleModalProps {
  show: boolean;
  onClose: () => void;
  numPoules: string;
  setNumPoules: React.Dispatch<React.SetStateAction<string>>;
  teamsPerPoule: string;
  setTeamsPerPoule: React.Dispatch<React.SetStateAction<string>>;
  onAddPoules: () => void;
}

const CreatePouleModal: React.FC<CreatePouleModalProps> = ({
  show,
  onClose,
  numPoules,
  setNumPoules,
  teamsPerPoule,
  setTeamsPerPoule,
  onAddPoules,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
          ×
        </button>
        <h2 className="text-center mb-4">Créer des Poules</h2>
        <input
          type="number"
          value={numPoules}
          onChange={(e) => setNumPoules(e.target.value)}
          placeholder="Nombre de poules"
          className="w-full p-2 mb-4 border"
        />
        <input
          type="number"
          value={teamsPerPoule}
          onChange={(e) => setTeamsPerPoule(e.target.value)}
          placeholder="Nombre d'équipes par poule"
          className="w-full p-2 mb-4 border"
        />
        <Button onClick={onAddPoules} className="w-full bg-blue-600 text-white">
          Valider
        </Button>
      </div>
    </div>
  );
};

export default CreatePouleModal;
