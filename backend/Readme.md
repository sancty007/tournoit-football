

Assurez-vous que vous avez un Dockerfile dans le répertoire de votre application Django. Voici un exemple de Dockerfile pour une application Django :

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

Dans le terminal, naviguez vers le répertoire contenant le Dockerfile et construisez l'image Docker :

docker build -t my-django-app .//construire l'application




