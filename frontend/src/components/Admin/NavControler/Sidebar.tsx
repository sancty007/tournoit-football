// import { FaUser, FaCalendarAlt, FaTrophy, FaFutbol } from 'react-icons/fa';

import { useState } from "react";
import { Classement } from "../Classement/Classement";


export const Sidebar = () => {
	const [toggle, setToggle] = useState(1);

	const isToggle = (id: number) => {
		setToggle(id);
	};

	return (
		<>
			<div className="fixed top-0 left-0 w-35 h-full bg-white text-black-900 border-r-2 shadow-lg px-2 py-4 flex flex-col items-center">
				<div className="flex flex-col gap-6 h-full justify-center">
					<div
						className="flex flex-col items-center"
						onClick={() => isToggle(1)}>
						<img src="public/images/la--tshirt.png" className="h-10 w-10" />
						<p className="text-lg font-thin">Participant</p>
					</div>
					<div
						className="flex flex-col items-center"
						onClick={() => isToggle(2)}>
						<img
							src="public/images/mdi-light--calendar.png"
							className="h-10 w-10"
						/>
						<p className="text-lg font-thin">Calendrier</p>
					</div>
					<div
						className="flex flex-col items-center"
						onClick={() => isToggle(3)}>
						<img
							src="public/images/ranking_5087800.png"
							className="h-12 w-12"
						/>
						<p className="text-lg font-thin">Classement</p>
					</div>
					<div
						className="flex flex-col items-center"
						onClick={() => isToggle(4)}>
						<img src="public/images/Notification.png" className="h-10 w-10" />
						<p className="text-lg font-thin">Notification</p>
					</div>
				</div>
			</div>

			<div className="ml-[10%] mt-[2%]">
				<div className={toggle === 1 ? "block" : "hidden"}>
					<h1 className="text-blue-500">salut</h1>
				</div>
				<div className={toggle === 2 ? "block" : "hidden"}>
					<h1 className="text-red-500">salut</h1>
				</div>
				<div className={toggle === 3 ? "block" : "hidden"}>
				<Classement/>
				</div>
				<div className={toggle === 4 ? "block" : "hidden"}>
					<h1 className="text-pink-500">salut</h1>
				</div>
			</div>
		</>
	);
};
