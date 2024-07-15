import { useState } from 'react';
import { Card, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { useNavigate } from 'react-router-dom';
import { HiEye, HiEyeOff } from 'react-icons/hi'; // Import des icônes Eye et EyeOff
import axios from 'axios';
import poster from '/images/poster.png';


export const LoginForm = () => {
    const [username, setUsername] = useState(''); // Pré-définir le nom d'utilisateur pour les tests
    const [password, setPassword] = useState(''); // Pré-définir le mot de passe pour les tests
    const [role, setRole] = useState(''); // Pré-définir le rôle pour les tests
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const [showPassword, setShowPassword] = useState(false); // État pour montrer/masquer

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/token/', {
                username,
                password,
            });
            if (response.status === 200) {
                localStorage.setItem('access_token', response.data.access); // Stockage du token d'accès JWT dans localStorage
                localStorage.setItem('refresh_token', response.data.refresh); // Stockage du token de rafraîchissement JWT dans localStorage
    
                // Redirection en fonction du rôle
                if (role === 'admin') {
                    navigate('/login/tournaments/new');
                } else {
                    navigate('/login/UserDashboard');
                }
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
        }
    };
    

    return (
        <div className='p-36 container mx-auto'>
            <div className='grid grid-col-1 items-center justify-center lg:grid-flow-col '>
                <Card className='w-[385px] border-none rounded-none'>
                    <img src={poster} alt="" className='h-full w-full object-cover' />
                </Card>
                <Card className='rounded shadow-lg max-w-md w-full lg:w-[385px] '>
                    <form onSubmit={handleSubmit} className="p-8 rounded">
                        <CardTitle className="text-2xl font-bold mb-6 text-center">Connexion</CardTitle>
                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="username">Username</label>
                            <Input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="password">Password</label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? 'text' : 'password'} // Utilisation de l'état showPassword pour déterminer le type d'entrée
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <HiEyeOff /> : <HiEye />} {/* Icône pour montrer/masquer le mot de passe */}
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2" htmlFor="role">Role</label>
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full p-2 border rounded text-black"
                                required
                            >
                                <option value="user" className='text-black'>User</option>
                                <option value="admin_competition" className='text-black'>Admin</option>
                            </select>
                        </div>
                        <Button
                            type="submit"
                            className="w-full p-2 rounded"
                        >
                            Login
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};