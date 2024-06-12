FROM node:lts-alpine
ENV NODE_ENV=production
ENV KC_URL=https://auth.simplizio.com/
ENV SERVICE_URL=https://dev.simplizio.com/api/
WORKDIR /usr/src/app
#COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY package*.json ./
#RUN npm install --production --silent && mv node_modules ../
RUN npm install
COPY . .
EXPOSE 9090
#RUN chown -R node /usr/src/app
#USER node
CMD ["npm", "start"]
