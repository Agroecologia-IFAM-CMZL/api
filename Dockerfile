FROM node:alpine as base

WORKDIR /usr/api

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
