# Utiliza una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos del proyecto (asegúrate de tener un archivo .dockerignore)
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src/
COPY database ./database/
COPY .env ./.env

# Instala las dependencias
RUN npm install

# Compila la aplicación (asegúrate de haber configurado tu proyecto para transpilar TypeScript)
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación (ajusta según las necesidades de tu proyecto)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "dist/src/main"]