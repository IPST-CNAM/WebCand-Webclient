# Utilisez une image de base Node.js avec un environnement de production
FROM node:14-alpine

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json dans le répertoire de travail
COPY ./package*.json ./

COPY ./ ./

# Installe les dépendances du projet
RUN npm update -g
RUN npm install

EXPOSE 3000

# Construit l'application React
CMD ["npm","start"]