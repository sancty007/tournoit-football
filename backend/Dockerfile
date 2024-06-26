# Utilisez l'image officielle Python comme base
FROM python:3.10

# Définissez le répertoire de travail dans le conteneur
WORKDIR /backend

# Installer les dépendances nécessaires pour Oracle Instant Client
RUN apt-get update && apt-get install -y libaio1 wget unzip

# Télécharger et installer Oracle Instant Client
RUN wget https://download.oracle.com/otn_software/linux/instantclient/1910000/instantclient-basiclite-linux.x64-19.10.0.0.0dbru.zip \
    && unzip instantclient-basiclite-linux.x64-19.10.0.0.0dbru.zip -d /opt/oracle \
    && rm instantclient-basiclite-linux.x64-19.10.0.0.0dbru.zip \
    && echo /opt/oracle/instantclient_19_10 > /etc/ld.so.conf.d/oracle-instantclient.conf \
    && ldconfig

# Définir les variables d'environnement pour Oracle Instant Client
ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_19_10:$LD_LIBRARY_PATH

# Copier les fichiers requirements.txt et installer les dépendances Python
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier le reste de l'application
COPY . .

# Exposez le port utilisé par l'application Django
EXPOSE 8000

# Démarrez l'application
CMD ["bash", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
