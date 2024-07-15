import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import siginInForm from '/images/siginInForm.png';
import axios from 'axios';


const SignUpForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('admin'); // Par défaut, l'utilisateur est enregistré en tant que 'player'
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/users/users/', {
        username,
        email,
        password,
        role, // Utilise le rôle sélectionné dans le formulaire
      });
      console.log('Utilisateur créé avec succès:', response.data);
      // Redirection ou autre traitement après inscription réussie
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
      setError('Erreur lors de la création de l\'utilisateur. Veuillez réessayer.');
    }
    
    // Réinitialiser le formulaire après la soumission
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setRole('admin'); // Réinitialiser le rôle après l'inscription
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
