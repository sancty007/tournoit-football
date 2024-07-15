import { useState } from "react";
import { Classement } from "../Classement/Classement";
import { Equipe } from "../Content/Equipe";
import Calendrier from "../Classement/Calendrier/Calendrier";
import Notifications from "../Notification/Notification";
import { Award, Bell, CalendarDays, Shirt, Menu, X } from "lucide-react";
import { Button } from "../../ui/button";

export const Sidebar = () => {
  const [toggle, setToggle] = useState(1);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isToggle = (id: number) => {
    setToggle(id);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 h-full bg-gray-800 p-4 ${isCollapsed ? "w-16" : "w-64"} transition-all duration-300`}>
        <div className="flex items-center mb-8 flex-col">
          <Button onClick={toggleSidebar} className="text-white">
            {isCollapsed ? <Menu /> : <X/>}
          </Button>
        </div>
        <div className="flex flex-col gap-8 h-full justify-center cursor-pointer">
          <div
            className={`flex items-center gap-4 p-2 text-white ${toggle === 1 ? "bg-gray-700" : ""}`}
            onClick={() => isToggle(1)}
          >
            <Shirt />
            {!isCollapsed && <p>Participant</p>}
          </div>
          <div
            className={`flex items-center gap-4 p-2 text-white ${toggle === 2 ? "bg-gray-700" : ""}`}
            onClick={() => isToggle(2)}
          >
            <CalendarDays />
            {!isCollapsed && <p>Calendrier</p>}
          </div>
          <div
            className={`flex items-center gap-4 p-2 text-white ${toggle === 3 ? "bg-gray-700" : ""}`}
            onClick={() => isToggle(3)}
          >
            <Award />
            {!isCollapsed && <p>Classement</p>}
          </div>
          <div
            className={`flex items-center gap-4 p-2 text-white ${toggle === 4 ? "bg-gray-700" : ""}`}
            onClick={() => isToggle(4)}
          >
            <Bell />
            {!isCollapsed && <p>Notification</p>}
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 mt-[2%] ${isCollapsed ? "ml-16" : "ml-64"}`}>
        <div className={toggle === 1 ? "block" : "hidden"}>
          <Equipe />
        </div>
        <div className={toggle === 2 ? "block" : "hidden"}>
          <Calendrier />
        </div>
        <div className={toggle === 3 ? "block" : "hidden"}>
          <Classement />
        </div>
        <div className={toggle === 4 ? "block" : "hidden"}>
          <Notifications />
        </div>
      </div>
    </>
  );
};
