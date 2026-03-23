FROM node:22-alpine

WORKDIR /app

COPY package.json .
RUN npm install --production --ignore-scripts

COPY server.mjs .

ENV PORT=3100
EXPOSE 3100

CMD ["node", "server.mjs"]
