// import { FaUser, FaCalendarAlt, FaTrophy, FaFutbol } from 'react-icons/fa';

import { useState } from "react";
import { Classement } from "../Classement/Classement";
import { Equipe } from "../Content/Equipe";
import Calendrier from "../Classement/Calendrier/Calendrier";
import Notifications from "../Notification/Notification";
import { Award, Bell, CalendarDays, Shirt } from "lucide-react";


export const Sidebar = () => {
	const [toggle, setToggle] = useState(1);

	const isToggle = (id: number) => {
		setToggle(id);
	};

	return (
		<>
			<div className="sideBar">
				<div className="flex flex-col gap-8 h-full justify-center cursor-pointer">
					<div
						className="flex flex-col items-center "
						
						onClick={() => isToggle(1)}>
						<Shirt/>
						<p  className={
                            toggle === 1
                                ? " block border-b-2 w-15 text-center border-b-blue-500 cursor-pointer"
                                : "border-none"
                        }>Participant</p>
					</div>
					<div
						className="flex flex-col items-center"
						onClick={() => isToggle(2)}>
						<CalendarDays/>
						<p   className={
                            toggle === 2
                                ? " block border-b-2 w-15 text-center border-b-blue-500 cursor-pointer"
                                : "border-none"
                        }>Calendrier</p>
					</div>
					<div
						className="flex flex-col items-center"
						onClick={() => isToggle(3)}>
						<Award/>
						<p   className={
                            toggle === 3
                                ? " block border-b-2 w-15 text-center border-b-blue-500 cursor-pointer"
                                : "border-none"
                        }>Classement</p>
					</div>
					<div
						className="flex flex-col items-center"
						onClick={() => isToggle(4)}>
						<Bell />
						<p   className={
                            toggle === 4
                                ? " block border-b-2 w-15 text-center border-b-blue-500 cursor-pointer"
                                : "border-none"
                        }>Notification</p>
					</div>
				</div>
			</div>

			<div className="ml-[10%] mt-[2%]">
				<div className={toggle === 1 ? "block" : "hidden"}>
					<Equipe/>
				</div>
				<div className={toggle === 2 ? "block" : "hidden"}>
					<Calendrier/>
				</div>
				<div className={toggle === 3 ? "block" : "hidden"}>
					<Classement/>
				</div>
				<div className={toggle === 4 ? "block" : "hidden"}>
					<Notifications/>
				</div>
			</div>
		</>
	);
};
