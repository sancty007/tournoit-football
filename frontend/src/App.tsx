import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'



//import { UserDashboard } from './Pages/UserDashboard/UserDashboard'
import { CreateTournament } from './Pages/tournaments/CreateTournament/CreateTournament'
import { UserDashboard } from './Pages/UserDashboard/UserDashboard'
import TournamentDetail from './Pages/tournaments/DetailTournament/DetailTournament'
import { AfficheAdmin } from './Pages/tournaments/AdminPage/Adminpage'
import { LoginForm } from './Pages/forms/LoginForm '
import SignUpForm from './Pages/SignInForm/SignInForm'
import { Home } from './Pages/Home/home'
import Layout from './layouts/Layout'
import { TournamentsList } from './Pages/tournaments/TournamentList/TournamentList'
//import { CreateDivision } from './Pages/CreateDivision/CreateDivision'
//import { CreateMatch } from './Pages/CreateMatch/CreateMatch'
//import { AddPlayer } from './Pages/AddPlayer/AddPlayer'

//import { AdminDashboard } from './Pages/AdminDashboard/AdminDashboard'

//import { LoginForm } from './Pages/forms/LoginForm '
function App() {

  function switchToSignIn(): void {
    // Suppression de l'erreur
    console.log('Switch to sign in');
  }

  return(
      <BrowserRouter>
        <Routes>

          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm switchToSignIn={switchToSignIn} />} />
            <Route path="/login/UserDashboard" element={<UserDashboard />} />
          </Route>
          

          {/* gestion de tournoit  par l'admin*/}
          <Route path="/login/tournaments/new" element={<CreateTournament />} />
          <Route path="/login/tournaments/:id" element={<TournamentDetail/>} />
          <Route path="/login/tournaments" element={<TournamentsList/>} />
          <Route path="/login/tournaments/DashboardAmin" element={<AfficheAdmin/>} />

          <Route path="/login/UserDashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
// src/api.js
