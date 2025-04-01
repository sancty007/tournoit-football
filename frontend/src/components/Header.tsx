import { Link } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';
import { ThemeProvider } from './theme-provider';
import { Button } from './ui/button';

import MainMenu from './Main-menu';
import { IoFootballSharp } from 'react-icons/io5';

export const Header = () => {
  return (
    <header>
      <MainMenu />
     
      <nav className="header">
        <div className="container mx-auto flex justify-between items-center">
          <div className='flex items-center justify-center gap-8'>
            <div className=''>
              <h1 className=' flex items-center justify-center text-2xl'>
                <span className='text-red-700'>Linga</span>F<IoFootballSharp className="text-3xl lg:text-xl" /><IoFootballSharp className="text-3xl lg:text-xl" />T
              </h1>
            </div>
            <ul className="flex gap-8">
              <li><Link to="/">ACCUEIL</Link></li>
              <li><Link to="/calendrier">CALENDRIER</Link></li>
              <li><Link to="/groups">GROUPES</Link></li>
              <li><Link to="/equipes">ÉQUIPES</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <div className="flex gap-4 items-center">
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <ModeToggle />
            </ThemeProvider>
            <Link to="/login"><Button>SE CONNECTER</Button></Link>
            <Link to="/signup"><Button>S'INSCRIRE</Button></Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
