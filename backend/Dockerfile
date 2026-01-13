# ---------- Stage 1: Install deps ----------
FROM node:18-alpine AS deps

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

# ---------- Stage 2: Runtime ----------
FROM node:18-alpine

WORKDIR /app

# Copy only production deps
COPY --from=deps /app/node_modules ./node_modules

# Copy only required app files
COPY index.js ./
COPY routes ./routes
COPY controller ./controller
COPY models ./models
COPY middleware ./middleware
COPY helpers ./helpers
COPY config ./config

EXPOSE 8080

CMD ["node", "index.js"]

