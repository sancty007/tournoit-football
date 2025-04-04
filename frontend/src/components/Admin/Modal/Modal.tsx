import { useState } from "react";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Input } from "../../ui/input";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: string) => void;
  titre: string;
  content: string;
  placeholder: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSave,
  titre,
  content,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    const isValid = /^[a-zA-Z\s]+$/.test(inputValue);
    if (isValid) {
      onSave(inputValue);
      setInputValue("");
      onClose();
    } else {
      alert("Veuillez entrer uniquement des lettres.");
    }
  };

  return (
    <Card className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="ModalContent bg-white p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-2">{titre}</h2>
        <p className="text-md mb-4">{content}</p>
        <Input
          type="text"
          className="border rounded-md p-2 mb-3"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={onClose} className="py-2 px-4 rounded-md bg-gray-300 hover:bg-gray-400">
            Annuler
          </Button>
          <Button onClick={handleSave} className="py-2 px-4 rounded-md  text-white hover:bg-blue-600">
            Ajouter
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Modal;
