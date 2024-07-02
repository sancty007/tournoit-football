import { ModeToggle } from "./mode-toggle"
import { ThemeProvider } from "./theme-provider"
import { Button } from "./ui/button"


export const Header  = () =>{

    return(
       <nav className="header">
            <div className="container mx-auto flex justify-between items-center  ">
                <div>
                    <ul className="flex gap-8">
                        <li>HOME</li>
                        <li>CALENDRIER</li>
                        <li>GROUPS</li>
                        <li>EQUIPES</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div className="flex gap-4 items-center">
                    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <ModeToggle />
                    </ThemeProvider>
                    <Button>SE CONNECTER</Button>
                    <Button>S'INCRIRE</Button>
                </div>
            </div>
       </nav>
    )
}