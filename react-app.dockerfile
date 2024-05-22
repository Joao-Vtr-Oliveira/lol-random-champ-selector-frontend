FROM node:20.3.0-alpine3.18
WORKDIR /app
EXPOSE 8080
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]