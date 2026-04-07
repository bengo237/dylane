FROM node:22-alpine

# Apply latest security patches
RUN apk update && apk upgrade --no-cache

WORKDIR /app

# Install packages
COPY package.json .

RUN npm install --legacy-peer-deps

# Copy website files
COPY . .

# Build the project
RUN npm run build

# Run as non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose Next.js default port
EXPOSE 3000

# Start the server
CMD ["npm", "run", "start"]
