import { useState } from "react";
import Modal from "../Modal/Modal";
import Controller from "../Controller/Controller";
import admin_image from "/images/admin_image.png";
import ballon from "/images/ballon.png";
import arbitre from "/images/arbitre.png";
import { Card } from "../../ui/card";




export const Equipe = () => {

   //Modal toggle
   const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };



	const [toggle, setToggle] = useState(1);

	const isToggle = (id: number) => {
		setToggle(id);
	};
	
	return (
		<div className="container mx-auto p-16">
			<Card className="navParticipants">
				<ul className="flex flex-row gap-5 justify-around items-center text-lg cursor-pointer">
					<li
						className={
							toggle === 1
								? " block border-b-2 w-40 text-center border-b-blue-500 cursor-pointer"
								: "border-none"
						}
						onClick={() => isToggle(1)}>
						Equipe{" "}
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
					<div className="">
						<Controller
							titre="Ajouter une équipe"
							content="Contenu de la boîte modale"
							image={admin_image} // Assurez-vous que le chemin de l'image est correct
							btitre="Ajouter une équipe"
							onclick={handleOpenModal}
						/>
					</div>
					<Modal
						isOpen={showModal}
						onClose={handleCloseModal}
						titre="Ajouter une équipe"
						content="Contenu de la boîte modale"
						placeholder="Nom de l'équipe"

					/> 
					
				</div>
			</div>
			<div className={toggle === 2 ? "block" : "hidden"}>
				<div className="flex flex-col md:flex-row items-center justify-center">
					<div className="">
						<Controller
							titre="Ajouter un arbitre"
							content="Contenu de la boîte modale"
							image={arbitre} // Assurez-vous que le chemin de l'image est correct
							btitre="Ajouter un arbitre"
							onclick={handleOpenModal}
						/>
					</div>
					<Modal
						isOpen={showModal}
						onClose={handleCloseModal}
						titre="Ajouter un arbitre"
						content="Contenu de la boîte modale"
						placeholder="Nom de l'arbitre"
					/>
				</div>
            </div>
			<div className={toggle === 3 ? "block" : "hidden"}>
				<div className="flex flex-col md:flex-row items-center justify-center">
					<div className="">
						<Controller
							titre="Ajouter un administrateur"
							content="Contenu de la boîte modale"
							image={ballon} // Assurez-vous que le chemin de l'image est correct
							btitre="Ajouter un administrateur"
							onclick={handleOpenModal}
						/>
					</div>
					<Modal
						isOpen={showModal}
						onClose={handleCloseModal}
						titre="Ajouter un administrateur"
						content="Contenu de la boîte modale"
						placeholder="Nom de l'administrateur"
					/>
				</div>
            </div>

        </div>

	
	
	);
};


{/* 	<div className={toggle === 1 ? "block" : "hidden"}>
				<Controller titre="Ajouter une équipe" content="lorem ipsum jhdfuuy"image="public/images/joueurs.jpg" btitre="Ajouter une équipe"/>
			</div>
			<div className={toggle === 2 ? "block" : "hidden"}>
				<Controller titre="Ajouter un Arbitre" content="Lorem ipsum hueyhu" image="public/images/participant.jpg" btitre="Ajouter un arbitre"/>
			</div>
			<div className={toggle === 3 ? "block" : "hidden"}>
				<Controller  titre="Ajouter un administratru" content="Lorem ipsum hueyhu" image="public/images/admin.jpg" btitre="Ajouter un administrateur"/>
			</div> */}