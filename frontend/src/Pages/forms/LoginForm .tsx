import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import axios from 'axios';
import poster from '/images/poster.png';

// Définir le type pour les utilisateurs
interface UserModel {
    username: string;
    password: string;
    role: string; // Assurez-vous que le rôle est inclus
}

// Fonction pour récupérer les utilisateurs depuis le localStorage
const getUserFromLocalStorage = (username: string, password: string): UserModel | undefined => {
    const storedUsers: UserModel[] = JSON.parse(localStorage.getItem('users') || '[]');
    return storedUsers.find((user) => user.username === username && user.password === password);
};

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [role, setRole] = useState('user'); // Pré-définir le rôle pour les tests
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); // État pour montrer/masquer

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/token/', {
                username,
                password,
            });
            if (response.status === 200) {
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);

                // Redirection en fonction du rôle
                if (role === 'admin') {
                    navigate('/login/tournaments/new');
                } else {
                    navigate('/login/UserDashboard');
                }
            } else {
                setError('Identifiants invalides. Veuillez réessayer.');
            }
        } catch (error) {
            // Vérifier le localStorage si le backend ne répond pas
            const user = getUserFromLocalStorage(username, password);
            if (user) {
                // Utilisateur trouvé dans le localStorage
                localStorage.setItem('access_token', 'fake_access_token'); // Simuler un token pour la démonstration
                localStorage.setItem('refresh_token', 'fake_refresh_token'); // Simuler un token pour la démonstration

                // Redirection en fonction du rôle
                if (user.role === 'admin') {
                    navigate('/login/tournaments/new');
                } else {
                    navigate('/login/UserDashboard');
                }
            } else {
                setError('Identifiants invalides. Veuillez réessayer.');
            }
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 py-28">
            <Card className='w-[385px] rounded-none border-none'>
                <img src={poster} alt="" className='h-full w-full object-cover ' />
            </Card>
            <Card className="p-8 rounded-none max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center">Connexion</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Nom d'utilisateur
                        </label>
                        <Input
                            type="text"
                            id="username"
                            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Mot de passe
                        </label>
                        <div className="relative">
                            <Input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                            >
                                {showPassword ? <HiEyeOff /> : <HiEye />}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <Button
                            type="submit"
                            className="w-full p-2 rounded"
                        >
                            Se connecter
                        </Button>
                        <button
                            type="button"
                            className="text-sm"
                            onClick={() => navigate('/signup')}
                        >
                            Pas encore inscrit ? S'inscrire
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};
