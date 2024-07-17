import React, { useState, useEffect } from "react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Input } from "../../ui/input";

export type Player = {
    name: string;
    birthdate: string;
};

type AddPlayerModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (player: Player) => void;
    player: Player | null;
};

const AddPlayerModal: React.FC<AddPlayerModalProps> = ({ isOpen, onClose, onSave, player }) => {
    const [name, setName] = useState<string>("");
    const [birthdate, setBirthdate] = useState<string>("");

    useEffect(() => {
        if (player) {
            setName(player.name);
            setBirthdate(player.birthdate);
        } else {
            setName("");
            setBirthdate("");
        }
    }, [player]);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave({ name, birthdate });
        setName("");
        setBirthdate("");
    };

    return (
        <Card className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="ModalContent p-6 bg-white rounded-md">
                <h2 className="text-xl font-semibold mb-2">Ajouter un joueur</h2>
                <Input
                    type="text"
                    className="border rounded-md p-2 mb-3 w-full"
                    placeholder="Nom du joueur"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="date"
                    className="border rounded-md p-2 mb-3 w-full"
                    placeholder="Date de naissance"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                />
                <div className="flex justify-end gap-2 mt-4">
                    <Button onClick={onClose} className="py-2 px-4 rounded-md">
                        Annuler
                    </Button>
                    <Button onClick={handleSave} className="py-2 px-4 rounded-md">
                        {player ? "Modifier" : "Ajouter"}
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default AddPlayerModal;
