


export const Classement = () => {
    return (
        <div className="grid grid-cols-1 space-y-5 justify-center lg:grid-flow-row gap-16">
           <h1  className="text-center">Lorem ipsum dolor sit amnisi asperente minima.</h1>
            <div className="flex flex-col w-full gap-4 justify-between lg:flex-row">
                <div className="w-full"><h2>Seulement les phases de groupe</h2><img src="" className="w-full h-full mt-5" /></div>
                <div className="w-full"><h2>Phase de poules et phase éliminatoire</h2><img src="" className="w-full h-full mt-5"/></div>
                <div className="w-full"><h2>Phase éliminatoire seulement</h2><img src="" className="w-full h-full mt-5"/></div>
            </div>
            <h1 className="text-center">Lorem ipsum dolor sit amnisi asperente minima.</h1>
            <div className="grid grid-cols-1 w-full gap-4 items-center justify-center lg:grid-cols-3">
                <button className="border-2 border-gray-400  rounded-sm w-full ">+ Ajouter</button>
                <button className="border-2 border-gray-400  rounded-sm">+ Supprimer</button>
                <button className="border-2 border-gray-400 rounded-sm ">+ Assurer </button>
            </div>
            
        </div>
    )
}
