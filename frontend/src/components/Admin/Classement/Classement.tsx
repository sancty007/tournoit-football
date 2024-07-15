
import { Button } from '../../ui/button'
import classement1 from '/images/classement1.png'
import classement3 from '/images/classement3.png'
import classement4 from '/images/classement4.png'

export const Classement = () => {
    return (
        <div className="grid grid-cols-1 space-y-5 justify-center lg:grid-flow-row gap-16 p-8">
            <h1  className="text-center">Choisissez un classement de tournoi</h1>
            <div className="flex flex-col gap-4 justify-between lg:flex-row ">
                <div className="w-full group relative">
                    <h2 className='text-center items-center'>Seulement les phases de groupe</h2>
                    <img src={classement1} className="w-full" alt="Classement" />
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16 p-8 bg-blue-600">
                        Seulement les phases de groupe
                    </Button>
                </div>
                <div className=" w-full relative group">
                    <h2 className='text-center items-center'>Phase de poules et phase éliminatoire</h2>
                    <img src={classement3} className=" "/>
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16 p-8 bg-blue-600">
                      Phase de poules et phase éliminatoire
                    </Button>
                </div>
                <div className="w-full group relative">
                    <h2 className='text-center items-center'>Phase éliminatoire seulement</h2>
                    <img src={classement4} className=""/>
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-16 p-8 bg-blue-600">
                    Phase éliminatoire seulement
                    </Button>
                </div>
            </div>
            <h1 className="text-center">Lorem ipsum dolor sit amnisi asperente minima.</h1>
            <div className="grid grid-cols-1 w-full gap-4 items-center justify-center lg:grid-cols-3">
                <Button className="border-2 border-gray-400  rounded-sm w-full ">+ Ajouter</Button>
                <Button className="border-2 border-gray-400  rounded-sm">+ Supprimer</Button>
                <Button className="border-2 border-gray-400 rounded-sm ">+ Assurer </Button>
            </div>
            
        </div>
    )
}
