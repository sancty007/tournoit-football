import React from 'react';
import { Button } from '../../ui/button';


interface ContentType {
    image: string;
    titre: string;
    content: string;
    btitre: string;
    onclick: () => void; // Définissez ici le type de la fonction onclick, par exemple void pour une fonction sans retour
}

const Controller: React.FC<ContentType> = ({ image, titre, content, btitre, onclick }) => {


    return (
        <div className="">
            <div className="flex flex-col space-y-4">
                <div className='size-80 flex'>
                    <img src={image} alt="" className="w-full h-full" />
                </div>
                <h2 className="text-center text-xl">{titre}</h2>
                <p className="text-center text-xl">{content}</p>
                <Button className="inline-block" onClick={onclick}>{btitre}</Button>
            </div>
        </div>
    );
};

export default Controller;
