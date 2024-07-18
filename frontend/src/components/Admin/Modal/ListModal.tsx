import React from "react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { PencilIcon, TrashIcon } from "lucide-react";


export type Player = {
    name: string;
    birthdate: string;
};

type PlayerListModalProps = {
    isOpen: boolean;
    onClose: () => void;
    players: Player[];
    onEdit: (index: number | null) => void;
    onDelete: (index: number) => void;
};

const PlayerListModal: React.FC<PlayerListModalProps> = ({ isOpen, onClose, players, onEdit, onDelete }) => {
    if (!isOpen) return null;

    return (
        <Card className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="ModalContent p-6 bg-white rounded-md">
                <h2 className="text-xl font-semibold mb-4">Liste des joueurs</h2>
                {players.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {players.map((player, index) => (
                            <li key={index} className="border-b-2 border-gray-300 py-2 flex justify-between items-center">
                                <span>
                                    {player.name} - {player.birthdate}
                                </span>
                                <div className="flex gap-2 ">
                                    <Button
                                        className="p-2 bg-none"
                                        onClick={() => onEdit(index)}
                                    >
                                        <PencilIcon className="h-5 w-5 text-gray-600" />
                                    </Button>
                                    <Button
                                        className="p-2 bg-none"
                                        onClick={() => onDelete(index)}
                                    >
                                        <TrashIcon className="h-5 w-5 text-red-600" />
                                    </Button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-md">Aucun joueur ajouté.</p>
                )}
                <div className="flex justify-end mt-4 gap-2">
                    <Button onClick={onClose} className="py-2 px-4 bg-slate-400 rounded-md">
                        Fermer
                    </Button>
                    <Button onClick={() => onEdit(null)} className="py-2 px-4 rounded-md">
                        Ajouter un joueur
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default PlayerListModal;
