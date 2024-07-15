export const TournoiForm = () => {
	return (
		<div>
			<form className="border">
				<div>
					<h2 className="text-lg font-semibold">Indiqué le lieu</h2>
					<p className="text-sm text-justify ">
						Inscrivez le nom du club du parc sportif ou de la sall .Vous pouvez
						ajouter les terraiins plus tard
					</p>
				</div>
				<div>
					<label>
						Lieu
						<input
							type="text"
							name="Lieu"
							className="border-b-2 focus:border-b-blue-500"
						/>
					</label>
					<button type="submit" className="">
						AJOUTER UN AUTRE LIEU
					</button>
				</div>

				<div className="flex flex-row gap-2 mt-8">
					<input
						type="submit"
						value="RETOUR VERS"
						className="text-bold text-sm font-semibold"
					/>
					<input
						type="submit"
						value="Suivant"
						className="text-sm text-bold text-white bg-blue-400 "
					/>
				</div>
			</form>
		</div>
	);
};
