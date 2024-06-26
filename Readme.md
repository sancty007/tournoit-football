Pour configurer complètement Docker Compose afin de faire communiquer le frontend (React) avec le backend (Django) et d'utiliser une base de données Oracle comme mentionné précédemment, voici comment structurer et configurer votre projet :

### Structure des Répertoires et Fichiers :

```
project-root/
│
├── backend/
│   ├── Dockerfile             # Dockerfile pour l'application Django
│   ├── requirements.txt       # Fichier requirements.txt pour les dépendances Python
│   ├── manage.py              # Fichier de gestion Django
│   ├── myapp/                 # Dossier de l'application Django (nom de votre choix)
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── ...                # Autres fichiers Django
│   └── env/                   # Dossier de l'environnement virtuel Django
│
├── frontend/
│   ├── Dockerfile             # Dockerfile pour l'application React
│   ├── package.json           # Fichier package.json pour les dépendances React
│   ├── public/                # Dossier public de React
│   ├── src/                   # Dossier source de React
│   └── ...                    # Autres fichiers de configuration spécifiques à React
│
├── docker-compose.yml         # Fichier docker-compose pour définir les services Docker
└── README.md                  # Documentation du projet
```

### Configuration Docker pour le Backend Django (`backend/Dockerfile`):

```dockerfile
# Utiliser une image officielle Python comme image de base
FROM python:3.10

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers de l'application dans le conteneur
COPY . .

# Installer les dépendances
RUN pip install -r requirements.txt

# Exposer le port sur lequel l'application Django s'exécute
EXPOSE 8000

# Démarrer l'application Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

### Configuration Docker pour le Frontend React (`frontend/Dockerfile`):

```dockerfile
# Utiliser une image officielle Node.js comme image de base
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application dans le conteneur
COPY . .

# Exposer un port pour communiquer avec l'application React
EXPOSE 3000

# Démarrer l'application React en mode de développement
CMD ["npm", "start"]
```

### Configuration Docker Compose (`docker-compose.yml`):

```yaml
version: "3.8"

services:
  backend:
    build:
      context: ./backend # Répertoire où se trouve le Dockerfile du backend
    ports:
      - "8000:8000" # Port pour accéder au serveur Django
    volumes:
      - ./backend:/app # Monter le répertoire du backend dans le conteneur
    environment:
      - PYTHONUNBUFFERED=1 # Variables d'environnement Django (optionnel)
    command: >
      bash -c "python manage.py makemigrations &&
               python manage.py migrate &&
               python manage.py runserver 0.0.0.0:8000"

  frontend:
    build:
      context: ./frontend # Répertoire où se trouve le Dockerfile du frontend
    ports:
      - "3000:3000" # Port pour accéder au serveur de développement React
    volumes:
      - ./frontend:/app # Monter le répertoire du frontend dans le conteneur
    environment:
      - REACT_APP_BACKEND_URL=http://backend:8000 # URL du backend pour la communication avec React

  oracle-db:
    image: container-registry.oracle.com/database/express
    container_name: oracle-db
    ports:
      - "1521:1521" # Port pour accéder à la base de données Oracle

# Réseau commun pour permettre la communication entre les services
networks:
  default:
    external:
      name: bridge
```

### Explication de la Configuration Docker Compose :

1. **Services Backend Django (`backend`)**:

   - Utilise le Dockerfile défini dans `backend/`.
   - Expose le port 8000 pour accéder au serveur Django.
   - Montre le répertoire `backend` dans le conteneur sous `/app`.
   - Utilise un environnement pour configurer Django (`PYTHONUNBUFFERED=1`) et démarrer le serveur Django après les migrations.

2. **Services Frontend React (`frontend`)**:

   - Utilise le Dockerfile défini dans `frontend/`.
   - Expose le port 3000 pour accéder au serveur de développement React.
   - Montre le répertoire `frontend` dans le conteneur sous `/app`.
   - Utilise une variable d'environnement (`REACT_APP_BACKEND_URL`) pour spécifier l'URL du backend (dans ce cas, `http://backend:8000`).

3. **Service Base de Données Oracle (`oracle-db`)**:

   - Utilise l'image Oracle Express Database depuis un registre.
   - Expose le port 1521 pour accéder à la base de données Oracle.
   - Utilise le nom de conteneur `oracle-db`.

4. **Réseau (`networks`)**:
   - Utilise le réseau bridge par défaut pour permettre la communication entre les services (`backend`, `frontend`, `oracle-db`).

### Utilisation :

1. Assurez-vous que Docker est installé et fonctionnel sur votre machine.
2. Placez-vous dans le répertoire `project-root` où se trouve le fichier `docker-compose.yml`.
3. Lancez les services avec la commande suivante :

   ```bash
   docker-compose up --build
   ```

   - L'option `--build` est utilisée pour reconstruire les images Docker si nécessaire.
   - Les conteneurs pour le backend Django, le frontend React et la base de données Oracle seront démarrés et configurés pour communiquer entre eux.

4. Accédez à votre application React via `http://localhost:3000`.
5. Votre backend Django sera accessible via `http://localhost:8000`.
6. Utilisez l'image Oracle en utilisant la commande appropriée dans Docker pour effectuer les opérations souhaitées, comme expliqué précédemment.

Cette configuration devrait vous permettre de développer et de tester votre application frontend React avec un backend Django et une base de données Oracle, le tout géré de manière isolée et portable grâce à Docker Compose.

---

Pour que votre frontend React utilise les données du backend Django dans le contexte de Docker Compose, vous avez déjà configuré une variable d'environnement dans votre service frontend (`docker-compose.yml`) pour spécifier l'URL du backend :

```yaml
services:
  frontend:
    build:
      context: ./frontend # Répertoire où se trouve le Dockerfile du frontend
    ports:
      - "3000:3000" # Port pour accéder au serveur de développement React
    volumes:
      - ./frontend:/app # Monter le répertoire du frontend dans le conteneur
    environment:
      - REACT_APP_BACKEND_URL=http://backend:8000 # URL du backend pour la communication avec React
```

Cette configuration utilise `REACT_APP_BACKEND_URL=http://backend:8000` pour définir l'URL du backend comme `http://backend:8000`. Maintenant, dans votre application React, vous pouvez accéder à cette variable d'environnement pour communiquer avec le backend.

### Exemple d'utilisation dans votre application React :

Dans votre application React, vous pouvez utiliser Axios ou fetch pour effectuer des requêtes HTTP vers votre backend Django. Voici un exemple simple pour illustrer comment vous pouvez accéder à une API Django depuis votre application React :

1. **Installer Axios** (si vous ne l'avez pas encore fait) :

   Assurez-vous que Axios est installé dans votre projet React pour faciliter les requêtes HTTP :

   ```bash
   npm install axios
   ```

2. **Utiliser Axios pour appeler l'API Django** :

   Par exemple, supposons que vous avez une route dans votre backend Django qui renvoie une liste d'objets. Voici comment vous pourriez récupérer ces données dans votre frontend React :

   ```javascript
   // Dans votre composant React où vous souhaitez récupérer les données du backend
   import React, { useState, useEffect } from "react";
   import axios from "axios";

   const BackendDataComponent = () => {
     const [data, setData] = useState([]);

     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await axios.get(
             `${process.env.REACT_APP_BACKEND_URL}/api/data/`
           );
           setData(response.data);
         } catch (error) {
           console.error("Error fetching data from backend:", error);
         }
       };

       fetchData();
     }, []);

     return (
       <div>
         <h1>Data from Backend:</h1>
         <ul>
           {data.map((item) => (
             <li key={item.id}>{item.name}</li>
           ))}
         </ul>
       </div>
     );
   };

   export default BackendDataComponent;
   ```

   - Dans cet exemple, `process.env.REACT_APP_BACKEND_URL` est utilisé pour récupérer l'URL du backend que vous avez défini dans `docker-compose.yml`.
   - `axios.get()` est utilisé pour effectuer une requête GET vers une API Django hypothétique (`/api/data/`), et les données récupérées sont mises à jour dans l'état local (`data`).

### Points Importants à Garder à l'Esprit :

- **CORS (Cross-Origin Resource Sharing)** : Assurez-vous que votre backend Django est configuré pour autoriser les requêtes en provenance du domaine où votre frontend React est hébergé. Vous pouvez configurer cela dans Django en ajoutant les bonnes options à `CORS_ORIGIN_WHITELIST` dans `settings.py` ou en utilisant un middleware approprié.
- **Gestion des Variables d'Environnement** : Assurez-vous que `REACT_APP_BACKEND_URL` est correctement configuré dans votre environnement de développement ou de production. Dans Docker Compose, cette valeur est définie dans le fichier `docker-compose.yml` et peut être remplacée par des valeurs spécifiques à chaque environnement si nécessaire.

En suivant ces étapes, votre frontend React devrait pouvoir communiquer efficacement avec votre backend Django via Docker Compose, en utilisant l'URL configurée dans les variables d'environnement pour accéder aux données et services fournis par le backend.

---

docker exec -it oracle-test sqlplus sys/welcome123@localhost:1521/XEPDB1 as sysdba
