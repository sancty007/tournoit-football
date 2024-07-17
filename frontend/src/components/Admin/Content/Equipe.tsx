import { useState } from "react";
import Modal from "../Modal/Modal";
import Controller from "../Controller/Controller";
import admin_image from "/images/admin_image.png";
import ballon from "/images/ballon.png";
import arbitre from "/images/arbitre.png";
import { LucideUser } from "lucide-react";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import PlayerManager from "../Modal/MainModal";
 

export const Equipe = () => {
	// Modal toggle
	const [showModal, setShowModal] = useState(false);
	const [modalType, setModalType] = useState<
		"equipes" | "arbitres" | "administrateurs"
	>("equipes");
	const [entries, setEntries] = useState({
		equipes: [],
		arbitres: [],
		administrateurs: [],
	});
    const [showPlayerManager, setShowPlayerManager] = useState(false);
	// State to control the display of the lists
	const [showEquipeList, setShowEquipeList] = useState(false);
	const [showArbitreList, setShowArbitreList] = useState(false);
	const [showAdminList, setShowAdminList] = useState(false);

	// State to handle editing
	const [editIndex, setEditIndex] = useState<number | null>(null);
	const [editValue, setEditValue] = useState("");

	const handleOpenModal = (
		type: "equipes" | "arbitres" | "administrateurs"
	) => {
		setModalType(type);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setEditIndex(null);
		setEditValue("");
	};

	const handleSave = (value: string) => {
		if (value !== "") {
			if (editIndex !== null) {
				setEntries((prev) => ({
					...prev,
					[modalType]: prev[modalType].map((item, index) =>
						index === editIndex ? value : item
					),
				}));
			} else {
				setEntries((prev) => ({
					...prev,
					[modalType]: [...prev[modalType], value],
				}));
				// Toggle the display state for the relevant type
				if (modalType === "equipes") {
					setShowEquipeList(true);
				} else if (modalType === "arbitres") {
					setShowArbitreList(true);
				} else if (modalType === "administrateurs") {
					setShowAdminList(true);
				}
			}
			setShowModal(false);
			setEditIndex(null);
			setEditValue("");
		} else {
			alert("Veuillez réessayer, le champ est vide");
		}
	};

	const handleEdit = (
		index: number,
		value: string,
		type: "equipes" | "arbitres" | "administrateurs"
	) => {
		setEditIndex(index);
		setEditValue(value);
		setModalType(type);
		setShowModal(true);
	};

	const handleDelete = (
		index: number,
		type: "equipes" | "arbitres" | "administrateurs"
	) => {
		setEntries((prev) => ({
			...prev,
			[type]: prev[type].filter((_, i) => i !== index),
		}));

		// Update the display state based on the list length after deletion
		if (type === "equipes" && entries.equipes.length === 1) {
			setShowEquipeList(false);
		} else if (type === "arbitres" && entries.arbitres.length === 1) {
			setShowArbitreList(false);
		} else if (
			type === "administrateurs" &&
			entries.administrateurs.length === 1
		) {
			setShowAdminList(false);
		}
	};

	const [toggle, setToggle] = useState(1);

	const isToggle = (id: number) => {
		setToggle(id);
		// Reset the display states
		setShowEquipeList(entries.equipes.length > 0);
		setShowArbitreList(entries.arbitres.length > 0);
		setShowAdminList(entries.administrateurs.length > 0);
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
						onClick={() => isToggle(1)}>
						Equipe
					</li>
					<li
						className={
							toggle === 2
								? "block border-b-2 w-40 text-center border-b-blue-500 cursor-pointer"
								: "border-none"
						}
						onClick={() => isToggle(2)}>
						Arbitre
					</li>
					<li
						className={
							toggle === 3
								? "block border-b-2 w-40 text-center border-b-blue-500 cursor-pointer"
								: "border-none"
						}
						onClick={() => isToggle(3)}>
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
						titre={
							editIndex !== null ? "Modifier une équipe" : "Ajouter une équipe"
						}
						content="Contenu de la boîte modale"
						placeholder="Nom de l'équipe"
						defaultValue={editValue}
					/>
					{showEquipeList && (
						<div className="w-full mt-6">
							<h3 className="text-lg font-semibold mb-2">Liste des équipes</h3>
							<ul className="list-disc pl-5">
								{entries.equipes.map((equipe, index) => (
									<li
										className="border-b-2 border-gray-300 py-2 flex justify-between items-center"
										key={index}>
										{equipe}
										<div className="flex gap-2">
											<Button
												className="bg-gray-500 text-white px-2 py-1 rounded"
												onClick={() => handleEdit(index, equipe, "equipes")}>
												Modifier
											</Button>
											<Button
												className="bg-red-500 text-white px-2 py-1 rounded"
												onClick={() => handleDelete(index, "equipes")}>
												Supprimer
											</Button>
											<Button
												className="bg-blue-500 text-white px-2 py-1 rounded"
												onClick={() =>  setShowPlayerManager(true)}>
												<LucideUser size={20} />{" "}
												{/* Utilisation de LucideUser ici */}
											</Button>

                                            {showPlayerManager && <PlayerManager />}
										</div>
                                       
									</li>
                                    
								))}
							</ul>
							<Button
								className="mt-4  px-4 py-2 rounded"
								onClick={() => handleOpenModal("equipes")}>
								Ajouter une équipe
							</Button>
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
						titre={
							editIndex !== null ? "Modifier un arbitre" : "Ajouter un arbitre"
						}
						content="Contenu de la boîte modale"
						placeholder="Nom de l'arbitre"
						defaultValue={editValue}
					/>
					{showArbitreList && (
						<div className="w-full mt-6">
							<h3 className="text-lg font-semibold mb-2">Liste des arbitres</h3>
							<ul className="list-disc pl-5">
								{entries.arbitres.map((arbitre, index) => (
									<li
										className="border-b-2 border-gray-300 py-2 flex justify-between items-center"
										key={index}>
										{arbitre}
										<div className="flex gap-2">
											<Button
												className="bg-gray-500 text-white px-2 py-1 rounded"
												onClick={() => handleEdit(index, arbitre, "arbitres")}>
												Modifier
											</Button>
											<Button
												className="bg-red-500 text-white px-2 py-1 rounded"
												onClick={() => handleDelete(index, "arbitres")}>
												Supprimer
											</Button>
										</div>
									</li>
								))}
							</ul>
							<Button
								className="mt-4  px-4 py-2 rounded"
								onClick={() => handleOpenModal("arbitres")}>
								Ajouter un arbitre
							</Button>
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
						titre={
							editIndex !== null
								? "Modifier un administrateur"
								: "Ajouter un administrateur"
						}
						content="Contenu de la boîte modale"
						placeholder="Nom de l'administrateur"
						defaultValue={editValue}
					/>
					{showAdminList && (
						<div className="w-full mt-6">
							<h3 className="text-lg font-semibold mb-2">
								Liste des administrateurs
							</h3>
							<ul className="list-disc pl-5">
								{entries.administrateurs.map((administrateur, index) => (
									<li
										className="border-b-2 border-gray-300 py-2 flex justify-between items-center"
										key={index}>
										{administrateur}
										<div className="flex gap-2">
											<Button
												className="bg-gray-500 text-white px-2 py-1 rounded"
												onClick={() =>
													handleEdit(index, administrateur, "administrateurs")
												}>
												Modifier
											</Button>
											<Button
												className="bg-red-500 text-white px-2 py-1 rounded"
												onClick={() => handleDelete(index, "administrateurs")}>
												Supprimer
											</Button>
										</div>
									</li>
								))}
							</ul>
							<Button
								className="mt-4  px-4 py-2 rounded"
								onClick={() => handleOpenModal("administrateurs")}>
								Ajouter un administrateur
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};


