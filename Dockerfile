FROM node:13 AS build

RUN mkdir /workdir
WORKDIR /workdir

COPY package.json yarn.lock ./

RUN yarn install --verbose

COPY . .

RUN yarn build

FROM halverneus/static-file-server:v1.7.2

COPY --from=build --chown=1000 /workdir/public /web