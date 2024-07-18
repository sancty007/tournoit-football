import React, { useState } from "react";
import { Button } from "../../ui/button";
import AddPlayerModal, { Player } from "./AddModal";
import PlayerListModal from "./ListModal";

const PlayerManager: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [showPlayerList, setShowPlayerList] = useState(false);

    const handleAddPlayer = (player: Player) => {
        if (editIndex !== null) {
            // Update existing player
            const updatedPlayers = [...players];
            updatedPlayers[editIndex] = player;
            setPlayers(updatedPlayers);
            setEditIndex(null);
        } else {
            // Add new player
            setPlayers([...players, player]);
        }
        // Switch to show player list after adding
        setShowPlayerList(true);
    };

    const handleEditPlayer = (index: number) => {
        setEditIndex(index);
        // Keep the player list modal closed while editing
        setShowPlayerList(false);
    };

    const handleDeletePlayer = (index: number) => {
        const updatedPlayers = players.filter((_, i) => i !== index);
        setPlayers(updatedPlayers);
    };

    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="container mx-auto p-16">
            {!showPlayerList ? (
                <AddPlayerModal
                    isOpen={isOpen}
                    onClose={onClose}
                    onSave={handleAddPlayer}
                    player={editIndex !== null ? players[editIndex] : null}
                />
            ) : (
                <PlayerListModal
                    isOpen={isOpen}
                    onClose={onClose}
                    players={players}
                    onEdit={handleEditPlayer}
                    onDelete={handleDeletePlayer}
                />
            )}
        </div>
    );
};

export default PlayerManager;
