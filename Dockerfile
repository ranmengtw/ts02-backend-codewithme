# Dependencies Image
ARG NODE_VERSION=20
# Have to use non-slim version of node to install dependancies
FROM node:$NODE_VERSION-alpine AS build

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY tsconfig.* ./
COPY src ./src
RUN yarn build

# Production Image
ARG NODE_VERSION
FROM node:$NODE_VERSION-alpine

RUN apk update && apk add --purge dumb-init curl bash

WORKDIR /usr/src/app
RUN chown -R node:node ./

USER node

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

CMD ["dumb-init", "node", "dist/index.js"]
