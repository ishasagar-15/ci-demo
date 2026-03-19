FROM node:20-alpine AS builder

WORKDIR /App

COPY package*.json ./

RUN npm install --only=production

COPY . . 

FROM node:20-alpine

WORKDIR /App

COPY --from=builder /App .

CMD ["node", "index.js"]
