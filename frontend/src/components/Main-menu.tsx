
import { AlignLeft} from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";



export default function MainMenu() {
    
    const isDesktop = useMediaQuery("(min-width:768px)");

    return isDesktop ? <h1></h1> :
     <div>

        <Sheet>
                <SheetTrigger>
                    <div className="p-4">
                        <AlignLeft />
                    </div>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div  className="">
                                <ul className="grid grid-cols-1 space-y-4">
                                    <li><Link to="/">HOME</Link></li>
                                    <li><Link to="/calendrier">CALENDRIER</Link></li>
                                    <li><Link to="/groups">GROUPS</Link></li>
                                    <li><Link to="/equipes">EQUIPES</Link></li>
                                    <li><Link to="/contact">CONTACT</Link></li>
                                </ul>
                            </div>.
                        </SheetDescription>
                    </SheetHeader>
            </SheetContent>
        </Sheet>

        {/* <Drawer>
            <DrawerTrigger>
                <AlignRight />
            </DrawerTrigger>
            <DrawerContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </DrawerContent>
        </Drawer> */}
    </div>;
}