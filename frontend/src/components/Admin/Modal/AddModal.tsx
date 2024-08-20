
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

const AddPlayerModal: React.FC<AddPlayerModalProps> = ({
  isOpen,
  onClose,
  onSave,
  player,
}) => {
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
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(birthdate).getFullYear();
    const age = currentYear - birthYear;

    const nameValid = /^[a-zA-Z\s]+$/.test(name);
    const ageValid = age >= 16 && age <= 45;

    if (!name) {
      alert("Le nom ne peut pas être vide.");
      return;
    }

    if (!nameValid) {
      alert("Veuillez entrer uniquement des lettres pour le nom.");
      return;
    }

    if (!birthdate) {
      alert("La date de naissance ne peut pas être vide.");
      return;
    }

    if (!ageValid) {
      alert("La date de naissance doit correspondre à un âge entre 16 et 45 ans.");
      return;
    }

    onSave({ name, birthdate });
    setName("");
    setBirthdate("");
    onClose();
  };

  return (
    <Card className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="ModalContent p-6 bg-white rounded-md">
        <h2 className="text-xl font-semibold mb-2">
          {player ? "Modifier le joueur" : "Ajouter un joueur"}
        </h2>
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
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={onClose} className="py-2 px-4 rounded-md bg-gray-300 hover:bg-gray-400">
            Annuler
          </Button>
          <Button onClick={handleSave} className="py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600">
            {player ? "Modifier" : "Ajouter"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AddPlayerModal;