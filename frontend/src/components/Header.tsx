import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Home } from '../Pages/Home/home';

import { ModeToggle } from './mode-toggle';
import { ThemeProvider } from './theme-provider';
import { Button } from './ui/button';

import MainMenu from './Main-menu';
import { LoginForm } from '../Pages/forms/LoginForm ';

import SignUpForm from '../Pages/SignInForm/SignInForm';
import { CreateTournament } from '../Pages/CreateTournament/CreateTournament';
import { UserDashboard } from '../Pages/UserDashboard/UserDashboard';

export const Header = () => {
  return (
    <>
      <BrowserRouter>
        <MainMenu />
        <nav className="header">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <ul className="flex gap-8">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/calendrier">CALENDRIER</Link></li>
                <li><Link to="/groups">GROUPS</Link></li>
                <li><Link to="/equipes">EQUIPES</Link></li>
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          {/* Ajoutez d'autres routes comme /calendrier, /groups, /equipes, /contact ici */}
          <Route path="/login/createTournament" element={<CreateTournament />} />
          <Route path="/login/UserDashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
