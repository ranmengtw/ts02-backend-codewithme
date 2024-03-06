# Dependencies Image
ARG NODE_VERSION=20
# Have to use non-slim version of node to install dependancies
FROM node:$NODE_VERSION-bullseye-slim AS dependencies

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN yarn install

# Build TypeScript Image
FROM dependencies AS build

WORKDIR /usr/src/app

COPY tsconfig.* ./
COPY src ./src

RUN yarn build

# Production Image
ARG NODE_VERSION
FROM node:$NODE_VERSION-bullseye-slim

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init curl ca-certificates && apt-get clean

WORKDIR /usr/src/app
RUN chown -R node:node ./

USER node

COPY --chown=node:node --from=dependencies /usr/src/app/node_modules ./node_modules

COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD ["dumb-init", "node", "dist/index.js"]
