FROM node:20.3.0-alpine3.18
WORKDIR /app
EXPOSE 8080
ARG URL_ARG
ENV URL=$URL_ARG
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]