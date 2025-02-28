# Build nest application
FROM node:alpine AS nest-builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Build the node_modules
FROM node:alpine AS node-modules-builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev


# Build the final image
FROM node:alpine

WORKDIR /usr/src/app

COPY --from=nest-builder /usr/src/app/dist ./dist
COPY --from=node-modules-builder /usr/src/app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/main"]
