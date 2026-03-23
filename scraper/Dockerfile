FROM mcr.microsoft.com/playwright:v1.52.0-noble

WORKDIR /app

COPY package.json .
RUN npm install --production

COPY server.mjs .

ENV PORT=3100
EXPOSE 3100

CMD ["node", "server.mjs"]
