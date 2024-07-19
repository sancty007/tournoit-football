
import { AlignLeft} from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import { IoFootballSharp } from "react-icons/io5";



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
                            <div  className="grid grid-cols-1">
                                <ul className="grid grid-cols-1 space-y-4">
                                    <li><Link to="/">HOME</Link></li>
                                    <li><Link to="/calendrier">CALENDRIER</Link></li>
                                    <li><Link to="/groups">GROUPS</Link></li>
                                    <li><Link to="/equipes">EQUIPES</Link></li>
                                    <li><Link to="/contact">CONTACT</Link></li>
                                </ul>

                                <div className='py-10'>
                                    <h1 className=' flex items-center justify-center text-2xl'>
                                        <span className='text-red-700'>Linga</span>F<IoFootballSharp className="text-3xl lg:text-xl" /><IoFootballSharp className="text-3xl lg:text-xl" />T
                                    </h1>
                                </div>
                            </div>
                            
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