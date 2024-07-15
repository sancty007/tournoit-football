



export const TournoiForm = () => {
    return (
        <div>
            <form className="border">
                <div>
                <h2 className="text-lg font-semibold">Nouveau tournoi</h2>
                <p className="text-sm text-justify ">Toutes les données peuvent  être modifiées ultérieurement</p>
                </div>
             <div>
                <label>
                    Nom du tournoi:
                    <input type="text" name="nom" />
                </label>
                <label>
                    Date de début:
                    <input type="date" name="dateDebut" />
                </label>
                <label>
                    Date de fin:
                    <input type="date" name="dateFin" />
                </label>
                <input type="submit" value="Annuler" className="text-bold text-sm font-semibold"/>
                <input type="submit" value="Suivant" className="text-sm text-bold bg-gray-400 "/>
             </div>
            </form>
            
            
        </div>
    )
}
