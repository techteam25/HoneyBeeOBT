FROM node:18

WORKDIR /HoneyBeeOBT

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "run", "start"]