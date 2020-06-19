FROM node:lts-slim

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

EXPOSE 3000

CMD [ "npm", "start"]
