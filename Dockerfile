FROM node:alpine as base

WORKDIR /usr/api

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD ["npm", "run", "dinamic"]
