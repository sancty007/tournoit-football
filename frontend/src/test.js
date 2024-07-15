import axios from 'axios';



/*  axios.get('http://localhost:8000/users/')
    .then(response => {
        console.log(response.data);  // Traitez les données retournées ici
        console.log('Success'); 
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
    }); 
  */

    axios.post('http://localhost:8000/users/users/', {
       username: 'oracle',
       email: 'oracle@example.com',
       password: 'oracle1234',
       role: 'player',  // Assurez-vous que le rôle correspond à vos choix dans le modèle
   })
   .then(response => {
       console.log('Utilisateur créé avec succès:', response.data);
   })
   .catch(error => {
       console.error('Erreur lors de la création de l\'utilisateur:', error);
   });  