
import { AlignLeft} from "lucide-react";
import { useMediaQuery } from "../hooks/use-media-query";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";



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
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
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