FROM node:14-slim

WORKDIR /app

ADD ./apps/backend/package.json ./apps/backend/package-lock.json /app/
RUN npm install

ADD apps/backend/src ./src

ENTRYPOINT [ "node", "/app/src/index.js" ]
