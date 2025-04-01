
```bash

const [entries, setEntries] = useState({
    equipes: [],
    arbitres: [],
    administrateurs: []
});

const handleSave = (value: string, logo: string, joueurs: string[]) => {
    setEntries((prev) => ({
        ...prev,
        [modalType]: [
            ...prev[modalType],
            { nom: value, logo: logo, joueurs: joueurs }
        ]
    }));
};



<div className={toggle === 1 ? "block" : "hidden"}>
    <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="">
            <Controller
                titre="Ajouter une équipe"
                content="Contenu de la boîte modale"
                image={admin_image}
                btitre="Ajouter une équipe"
                onclick={() => handleOpenModal("equipes")}
            />
        </div>
        <Modal
            isOpen={showModal}
            onClose={handleCloseModal}
            onSave={handleSave}
            titre="Ajouter une équipe"
            content="Contenu de la boîte modale"
            placeholder="Nom de l'équipe"
        />
        <div className="w-full mt-4">
            <h3 className="text-lg font-semibold mb-2">Liste des équipes</h3>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Nom
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Logo
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Joueurs
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {entries.equipes.map((equipe, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {equipe.nom}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <img src={equipe.logo} alt="Logo" className="h-8 w-8" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {equipe.joueurs.join(", ")}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {/* Ajouter les boutons CRUD ici */}
                                <button className="text-indigo-600 hover:text-indigo-900">Éditer</button>
                                <button className="text-red-600 hover:text-red-900 ml-2">Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
</div>



```