import React, { useState } from "react";
import { Button } from "../../ui/button";
import AddPlayerModal, { Player } from "./AddModal";
import PlayerListModal from "./ListModal";


const PlayerManager: React.FC = () => {
    const [showAddPlayerModal, setShowAddPlayerModal] = useState<boolean>(false);
    const [showPlayerListModal, setShowPlayerListModal] = useState<boolean>(false);
    const [players, setPlayers] = useState<Player[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    const handleAddPlayer = (player: Player) => {
        if (editIndex !== null) {
            const updatedPlayers = [...players];
            updatedPlayers[editIndex] = player;
            setPlayers(updatedPlayers);
            setEditIndex(null);
        } else {
            setPlayers([...players, player]);
        }
        setShowAddPlayerModal(false);
        setShowPlayerListModal(true);
    };

    const handleEditPlayer = (index: number) => {
        setEditIndex(index);
        setShowAddPlayerModal(true);
        setShowPlayerListModal(false);
    };

    const handleDeletePlayer = (index: number) => {
        const updatedPlayers = players.filter((_, i) => i !== index);
        setPlayers(updatedPlayers);
    };
   

    return (
        <div className="container mx-auto p-16">
            <Button onClick={() => setShowAddPlayerModal(true)} className="py-2 px-4 rounded-md">
                Ajouter un joueur
            </Button>

            <AddPlayerModal
                isOpen={showAddPlayerModal}
                onClose={() => setShowAddPlayerModal(false)}
                onSave={handleAddPlayer}
                player={editIndex !== null ? players[editIndex] : null}
            />

            <PlayerListModal
                isOpen={showPlayerListModal}
                onClose={() => setShowPlayerListModal(false)}
                players={players}
                onEdit={handleEditPlayer}
                onDelete={handleDeletePlayer}
            />
        </div>
    );
};

export default PlayerManager;
