import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import siginInForm from '/images/siginInForm.png';
import axios from 'axios';

// Fonction pour sauvegarder les utilisateurs dans le localStorage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const saveUserToLocalStorage = (user: any) => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    storedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storedUsers));
};

const SignUpForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('admin'); // Par défaut, l'utilisateur est enregistré en tant que 'admin'
    const [error, setError] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/register/', {
                username,
                email,
                password,
                role,
            });
            console.log('Utilisateur créé avec succès:', response.data);
            navigate('/login'); // Redirection vers la page de connexion après inscription réussie
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('Erreur lors de la création de l\'utilisateur:', error.response ? error.response.data : error.message);

            // Détecter les erreurs de réseau et gérer le fallback local storage
            const isNetworkError = !error.response; // Si error.response est undefined, il s'agit probablement d'une erreur réseau

            if (isNetworkError) {
                setError('Le serveur est injoignable. Utilisation du stockage local.');

                // Sauvegarder l'utilisateur dans le localStorage en cas d'échec de l'API
                const newUser = {
                    username,
                    email,
                    password, // Notez que stocker les mots de passe en clair dans localStorage n'est pas recommandé pour la sécurité
                    role,
                };
                saveUserToLocalStorage(newUser);

                // Vous pourriez également rediriger l'utilisateur ou effectuer d'autres actions
                navigate('/login'); // Redirection vers la page de connexion après sauvegarde locale
            } else {
                // Afficher le message d'erreur spécifique si disponible
                const errorMessage = error.response && error.response.data && error.response.data.detail
                    ? error.response.data.detail
                    : 'Erreur lors de la création de l\'utilisateur. Veuillez réessayer.';

                setError(errorMessage);
            }
        }
    };

    const handleSwitchToSignIn = () => {
        navigate('/login');
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center space-x-0 py-28">
            <Card className='w-[385px] rounded-none border-none'>
                <img src={siginInForm} alt="" className='h-full w-full object-cover ' />
            </Card>
            <Card className="p-8 rounded-none max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-4 text-center">Inscription</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Nom d'utilisateur
                        </label>
                        <Input
                            type="text"
                            id="username"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Adresse Email
                        </label>
                        <Input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Mot de passe
                        </label>
                        <Input
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirmer le mot de passe
                        </label>
                        <Input
                            type="password"
                            id="confirmPassword"
                            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-sm font-medium">
                            Rôle
                        </label>
                        <select
                            id="role"
                            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm text-black"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="user" className='text-black'>User</option>
                            <option value="admin" className='text-black'>Administrateur</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <Button
                            type="submit"
                            className="w-full p-2 rounded"
                        >
                            S'inscrire
                        </Button>
                        <button
                            type="button"
                            className="text-sm"
                            onClick={handleSwitchToSignIn}
                        >
                            Déjà inscrit ? Se connecter
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default SignUpForm;
