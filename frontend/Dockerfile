# Utilisez l'image officielle Node.js
FROM node:20

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances de l'application
RUN npm install

# Copiez le reste du code de votre application dans le répertoire de travail
COPY . .

# Exposez le port pour que l'application React puisse communiquer
EXPOSE 5173

# Démarrez votre application React
CMD ["npm", "run", "dev"]
