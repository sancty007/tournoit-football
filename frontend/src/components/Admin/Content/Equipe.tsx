import { SetStateAction, useState } from "react";
import Modal from "../Modal/Modal";
import Controller from "../Controller/Controller";
import admin_image from "/images/admin_image.png";
import ballon from "/images/ballon.png";
import arbitre from "/images/arbitre.png";
import { Card } from "../../ui/card";

export const Equipe = () => {
    // Modal toggle
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const [entries, setEntries] = useState({
        equipes: [],
        arbitres: [],
        administrateurs: []
    });
    
    // State to control the display of the lists
    const [showEquipeList, setShowEquipeList] = useState(false);
    const [showArbitreList, setShowArbitreList] = useState(false);
    const [showAdminList, setShowAdminList] = useState(false);

    const handleOpenModal = (type: SetStateAction<string>) => {
        setModalType(type);
        setShowModal(true);
    };
    
    type modalType = "equipes" | "arbitres" | "administrateurs";
    
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSave = (value: string) => {
        if (value !== "") {
            setEntries((prev) => ({
                ...prev,
                [modalType]: [...prev[modalType], value]
            }));
            setShowModal(false);

            // Toggle the display state for the relevant type
            if (modalType === "equipes") {
                setShowEquipeList(true);
            } else if (modalType === "arbitres") {
                setShowArbitreList(true);
            } else if (modalType === "administrateurs") {
                setShowAdminList(true);
            }
        } else {
            alert("Veuillez réessayer, le champ est vide");
        }
    };

    const [toggle, setToggle] = useState(1);

    const isToggle = (id: number) => {
        setToggle(id);
        // Reset the display states
        setShowEquipeList(false);
        setShowArbitreList(false);
        setShowAdminList(false);
    };

    return (
        <div className="container mx-auto p-16">
            <Card className="navParticipants">
                <ul className="flex flex-row gap-5 justify-around items-center text-lg cursor-pointer">
                    <li
                        className={
                            toggle === 1
                                ? "block border-b-2 w-40 text-center border-b-blue-500 cursor-pointer"
                                : "border-none"
                        }
                        onClick={() => isToggle(1)}
                    >
                        Equipe
                    </li>
                    <li
                        className={
                            toggle === 2
                                ? "block border-b-2 w-40 text-center border-b-blue-500 cursor-pointer"
                                : "border-none"
                        }
                        onClick={() => isToggle(2)}
                    >
                        Arbitre
                    </li>
                    <li
                        className={
                            toggle === 3
                                ? "block border-b-2 w-40 text-center border-b-blue-500 cursor-pointer"
                                : "border-none"
                        }
                        onClick={() => isToggle(3)}
                    >
                        Administrateur
                    </li>
                </ul>
            </Card>
            <div className={toggle === 1 ? "block" : "hidden"}>
                <div className="flex flex-col md:flex-row items-center justify-center ">
                    {!showEquipeList && (
                        <div className="">
                            <Controller
                                titre="Ajouter une équipe"
                                content="Contenu de la boîte modale"
                                image={admin_image}
                                btitre="Ajouter une équipe"
                                onclick={() => handleOpenModal("equipes")}
                            />
                        </div>
                    )}
                    <Modal
                        isOpen={showModal}
                        onClose={handleCloseModal}
                        onSave={handleSave}
                        titre="Ajouter une équipe"
                        content="Contenu de la boîte modale"
                        placeholder="Nom de l'équipe"
                    />
                    {showEquipeList && (
                        <div className="w-full mt-4">
                            <h3 className="text-lg font-semibold mb-2">Liste des équipes</h3>
                            <ul>
                                {entries.equipes.map((equipe, index) => (
                                    <li className="border-2 border-black pl-2" key={index}>{equipe}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className={toggle === 2 ? "block" : "hidden"}>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {!showArbitreList && (
                        <div className="">
                            <Controller
                                titre="Ajouter un arbitre"
                                content="Contenu de la boîte modale"
                                image={arbitre}
                                btitre="Ajouter un arbitre"
                                onclick={() => handleOpenModal("arbitres")}
                            />
                        </div>
                    )}
                    <Modal
                        isOpen={showModal}
                        onClose={handleCloseModal}
                        onSave={handleSave}
                        titre="Ajouter un arbitre"
                        content="Contenu de la boîte modale"
                        placeholder="Nom de l'arbitre"
                    />
                    {showArbitreList && (
                        <div className="w-full mt-4">
                            <h3 className="text-lg font-semibold mb-2">Liste des arbitres</h3>
                            <ul>
                                {entries.arbitres.map((arbitre, index) => (
                                    <li key={index}>{arbitre}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className={toggle === 3 ? "block" : "hidden"}>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {!showAdminList && (
                        <div className="">
                            <Controller
                                titre="Ajouter un administrateur"
                                content="Contenu de la boîte modale"
                                image={ballon}
                                btitre="Ajouter un administrateur"
                                onclick={() => handleOpenModal("administrateurs")}
                            />
                        </div>
                    )}
                    <Modal
                        isOpen={showModal}
                        onClose={handleCloseModal}
                        onSave={handleSave}
                        titre="Ajouter un administrateur"
                        content="Contenu de la boîte modale"
                        placeholder="Nom de l'administrateur"
                    />
                    {showAdminList && (
                        <div className="w-full mt-4">
                            <h3 className="text-lg font-semibold mb-2">Liste des administrateurs</h3>
                            <ul>
                                {entries.administrateurs.map((administrateur, index) => (
                                    <li key={index}>{administrateur}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
