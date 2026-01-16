# ---------- Stage 1: Build ----------
FROM node:18-alpine AS build

WORKDIR /app

ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=2048

ENV npm_config_cache=/tmp/npm-cache
RUN mkdir -p /tmp/npm-cache

COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

# ---------- Stage 2: Nginx ----------
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

