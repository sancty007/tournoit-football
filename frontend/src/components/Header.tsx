import { ModeToggle } from "./mode-toggle"
import { ThemeProvider } from "./theme-provider"
import { Button } from "./ui/button"


export const Header  = () =>{

    return(
        <div className="hidden container mx-auto lg:flex  justify-between items-center p-7">
                <ul  className="flex gap-8">
                    <li>HOME</li>
                    <li>CALENDRIER</li>
                    <li>GROUPS</li>
                    <li>EQUIPES</li>
                </ul>
            <div className="flex gap-4 items-center">
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                   <ModeToggle />
                </ThemeProvider>
                <Button>SE CONNECTER</Button>
                <Button>S'INCRIRE</Button>
            </div>
        </div>
    )
}