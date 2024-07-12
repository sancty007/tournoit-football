import React, { useState } from 'react';

const Formteamm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [fullName, setFullName] = useState<string>('');

    const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Ajouter votre logique de gestion d'inscription ici
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);
        alert(fullName+""+email+""+username+""+password)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 ml-20">
            <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden">
   
                <div className="w-1/2  h-full" >
                <video className="w-full" autoPlay controls muted loop>
  <source src="https://www.shutterstock.com/shutterstock/videos/3447451967/preview/stock-footage-sports-background-with-a-stadium-at-night-with-glowing-spotlights-camera-flying-over-grass-field.webm" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
                </div>
                <div className="flex flex-col w-full md:w-1/2 p-8 md:p-12  ml-2">
                    <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
                        Créer un compte
                    </h2>
                    <form className="space-y-6" onSubmit={handleSignup}>
                        
                            <div>
                                <label htmlFor="fullName" className="sr-only">
                                    Nom complet
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    required
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Nom complet"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border-b-2 border-l-2 border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Nom d'utilisateur
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Nom d'utilisateur"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Mot de passe
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Mot de passe"
                                />
                            </div>
                      
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            S'inscrire
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Formteamm;
