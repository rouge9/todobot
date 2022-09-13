FROM node:16-alpine as builder

RUN npm install -g dotenv

RUN mkdir /bulid

WORKDIR /build

COPY package*.json ./
COPY tsconfig.json ./
COPY assets ./assets

RUN npm ci

COPY src ./src
COPY .env ./

RUN npm run build

CMD npm dev

# production Image
FROM node:16-alpine

WORKDIR /app

COPY --from=builder /build/package.json .
COPY --from=builder /build/package-lock.json .
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/dist ./dist
COPY --from=builder /build/assets ./assets


# Run this command when starting the container 
CMD npm start

