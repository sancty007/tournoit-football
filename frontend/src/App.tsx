import './App.css'
import { UserDashboard } from './Pages/UserDashboard/UserDashboard'
//import { CreateDivision } from './Pages/CreateDivision/CreateDivision'
//import { CreateMatch } from './Pages/CreateMatch/CreateMatch'
//import { AddPlayer } from './Pages/AddPlayer/AddPlayer'
//import { CreateTeam } from './Pages/CreateTeam/CreateTeam'
//import { AdminDashboard } from './Pages/AdminDashboard/AdminDashboard'
//import { CreateTournament } from './Pages/CreateTournament/CreateTournament'
//import { LoginForm } from './Pages/forms/LoginForm '
//import { Home } from './Pages/Home/home'
import { Footer } from './components/Footer'
import {Header} from "./components/Header"

function App() {
  return(
    <>
    <Header />
    <UserDashboard/>
    <Footer />
    </>
  )
}

export default App
