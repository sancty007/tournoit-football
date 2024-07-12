import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Input } from "../../ui/input";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    titre: string;
    content: string;
    placeholder: string;
}

const Modal: React.FC<ModalProps> = ({...props}) => {
    //isOpen, onClose, titre, content 
    if (!props.isOpen) return null;

    return (
        <Card className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="ModalContent">
                <h2 className="text-xl font-semibold mb-2">{props.titre}</h2>
                <p className="text-md mb-4">{props.content}</p>
                <Input type="text" className="border  rounded-md p-2 mb-3" placeholder={props.placeholder}/>
                <div className="flex justify-end gap-2 mt-4">
                    <Button onClick={props.onClose} className=" py-2 px-4 rounded-md ">
                        Annuler
                    </Button>
                    <Button className=" py-2 px-4 rounded-md ">
                        Ajouter
                    </Button>
                </div>
            </div>
       </Card>
    
    
    );
};

export default Modal;
