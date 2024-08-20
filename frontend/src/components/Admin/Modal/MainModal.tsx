import React, { useState, useEffect } from "react";
import AddPlayerModal, { Player } from "../Modal/AddModal";
import PlayerListModal from "../Modal/ListModal";

const PlayerManagement: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isAddPlayerModalOpen, setIsAddPlayerModalOpen] = useState(false);

  useEffect(() => {
    const savedPlayers = localStorage.getItem("players");
    if (savedPlayers) {
      setPlayers(JSON.parse(savedPlayers));
    }
  }, []);

  const handleAddPlayer = (player: Player) => {
    const updatedPlayers = [...players, player];
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
    setIsAddPlayerModalOpen(false);
  };

  const handleEdit = (index: number | null) => {
    setIsAddPlayerModalOpen(true);
  };

  const handleDelete = (index: number) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };

  const handleCloseAddPlayerModal = () => {
    setIsAddPlayerModalOpen(false);
    onClose();
  };

  return (
    <div>
      <PlayerListModal
        isOpen={isOpen}
        onClose={onClose}
        players={players}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddPlayerModal
        isOpen={isAddPlayerModalOpen}
        onClose={handleCloseAddPlayerModal}
        onSave={handleAddPlayer}
      />
    </div>
  );
};

export default PlayerManagement;
