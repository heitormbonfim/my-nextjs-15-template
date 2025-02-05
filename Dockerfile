FROM node:20 AS base
WORKDIR /app
RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./
# COPY .env ./

RUN pnpm install

COPY . .
RUN pnpm build

FROM node:20-alpine3.19 AS release
WORKDIR /app
RUN npm i -g pnpm

COPY --from=base /app/ ./

EXPOSE 5000

CMD ["pnpm", "start"]