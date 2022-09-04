FROM --platform=linux/amd64 node:alpine 

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]