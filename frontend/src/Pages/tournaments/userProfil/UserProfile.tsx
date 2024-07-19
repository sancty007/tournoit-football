// src/components/UserProfile.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    username: string;
    email: string;
    profile_picture?: string;
}

export const UserProfile = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        axios.get('http://localhost:8000/users/me/')
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the user!', error);
            });
    }, []);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center space-x-4 mb-4">
            <img
                src={user.profile_picture || '/default-profile.png'}
                alt="User Profile"
                className="w-10 h-10 rounded-full"
            />
            <div>
                <p className="font-bold">{user.username}</p>
                <p>{user.email}</p>
            </div>
        </div>
    );
};
