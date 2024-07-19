import React, { useState, useEffect } from "react";
import AddPlayerModal, { Player } from "../Modal/AddModal";
import PlayerListModal from "../Modal/ListModal";
import { Button } from "../../ui/button";

const PlayerManagement: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isAddPlayerModalOpen, setIsAddPlayerModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedPlayers = localStorage.getItem("players");
    if (savedPlayers) {
      setPlayers(JSON.parse(savedPlayers));
    }
  }, []);

  const handleAddPlayer = (player: Player) => {
    const updatedPlayers =
      editIndex !== null
        ? players.map((p, index) => (index === editIndex ? player : p))
        : [...players, player];

    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
    setIsAddPlayerModalOpen(false);
    setEditIndex(null);
  };

  const handleEdit = (index: number | null) => {
    setEditIndex(index);
    setIsAddPlayerModalOpen(true);
  };

  const handleDelete = (index: number) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
    localStorage.setItem("players", JSON.stringify(updatedPlayers));
  };

  const handleCloseAddPlayerModal = () => {
    setIsAddPlayerModalOpen(false);
    setEditIndex(null);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setIsAddPlayerModalOpen(true);
    }
  }, [isOpen]);

  return (
    <div>
      <PlayerListModal
        isOpen={isAddPlayerModalOpen}
        onClose={handleCloseAddPlayerModal}
        players={players}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddPlayerModal
        isOpen={isAddPlayerModalOpen}
        onClose={handleCloseAddPlayerModal}
        onSave={handleAddPlayer}
        player={editIndex !== null ? players[editIndex] : null}
      />
    </div>
  );
};

export default PlayerManagement;
