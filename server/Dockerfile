FROM node:latest
WORKDIR /usr/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --production=true
COPY . .
EXPOSE 8080
CMD [ "node", "app.js"]
