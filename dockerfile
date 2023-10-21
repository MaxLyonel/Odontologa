FROM node:18

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src/
COPY database ./database/
COPY .env ./.env

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/src/main"]