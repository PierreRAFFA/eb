FROM node:carbon

WORKDIR /app

# Install app dependencies
COPY package*.json /app/

# Bundle app source
COPY . /app

RUN npm install && \
    npm run build

CMD ["npm", "start"]
