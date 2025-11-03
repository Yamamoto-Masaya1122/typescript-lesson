FROM node:22.21-alpine
WORKDIR /usr/src
COPY ./src/package.json ./
RUN npm install
CMD ["npm", "start"]