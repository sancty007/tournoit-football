# Utiliser l'image Oracle Database Express Edition comme base
FROM container-registry.oracle.com/database/express:latest

# Variables d'environnement
ENV ORACLE_HOME=/opt/oracle/product/18c/dbhomeXE
ENV PATH=$ORACLE_HOME/bin:$PATH

# Copier les fichiers nécessaires pour installer le client Oracle
COPY instantclient-basic-linux.x64-19.8.0.0.0dbru.zip /tmp/
COPY instantclient-sqlplus-linux.x64-19.8.0.0.0dbru.zip /tmp/

# Décompresser les fichiers
RUN unzip /tmp/instantclient-basic-linux.x64-19.8.0.0.0dbru.zip -d /opt/oracle/ && \
    unzip /tmp/instantclient-sqlplus-linux.x64-19.8.0.0.0dbru.zip -d /opt/oracle/ && \
    rm /tmp/instantclient-basic-linux.x64-19.8.0.0.0dbru.zip /tmp/instantclient-sqlplus-linux.x64-19.8.0.0.0dbru.zip

# Ajouter les bibliothèques instantclient à la variable d'environnement LD_LIBRARY_PATH
ENV LD_LIBRARY_PATH=/opt/oracle/instantclient_19_8:$LD_LIBRARY_PATH

# Création d'un lien symbolique pour le client SQL*Plus
RUN ln -s /opt/oracle/instantclient_19_8/sqlplus /usr/bin/sqlplus

# Définir le point d'entrée (entrypoint) ou le CMD si nécessaire
CMD ["tail", "-f", "/dev/null"]
