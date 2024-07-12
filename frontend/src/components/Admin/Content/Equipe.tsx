import { useState } from "react";
import { Controller } from "../Controller/Controller";

export const Equipe = () => {
	const [toggle, setToggle] = useState(1);

	const isToggle = (id: number) => {
		setToggle(id);
	};
	return (
		<div>
			<nav className="w-[500px] h-[70px] mt-10 bg-white border-b-2 rounded-lg shadow-md pt-5 ml-[35%]">
				<ul className="flex flex-row gap-5  justify-around items-center text-lg text-black font-thin">
					<li
						className={
							toggle === 1
								? " block border-b-2  border-b-blue-500 border-b-"
								: "border-none"
						}
						onClick={() => isToggle(1)}>
						Equipe{" "}
					</li>
					<li
						className={
							toggle === 2
								? "block border-b-2  border-b-blue-500"
								: "border-none"
						}
						onClick={() => isToggle(2)}>
						Arbitre
					</li>
					<li
						className={
							toggle === 3
								? "block border-b-2  border-b-blue-500"
								: "border-none"
						}
						onClick={() => isToggle(3)}>
						Administrateur
					</li>
				</ul>
			</nav>

			<div className={toggle === 1 ? "block" : "hidden"}>
				<Controller titre="Ajouter une équipe" content="lorem ipsum jhdfuuy"image="public/images/joueurs.jpg" btitre="Ajouter une équipe"/>
			</div>
			<div className={toggle === 2 ? "block" : "hidden"}>
				<Controller titre="Ajouter un Arbitre" content="Lorem ipsum hueyhu" image="public/images/participant.jpg" btitre="Ajouter un arbitre"/>
			</div>
			<div className={toggle === 3 ? "block" : "hidden"}>
				<Controller  titre="Ajouter un administratru" content="Lorem ipsum hueyhu" image="public/images/admin.jpg" btitre="Ajouter un administrateur"/>
			</div>
		</div>
	);
};
