# nicolas-pianiste-frontend/Dockerfile
FROM node:22-alpine

# Enable Corepack to use pnpm seamlessly
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package configuration and lockfile
COPY package.json pnpm-lock.yaml* ./

# Install dependencies allowing build scripts in an isolated Docker context
RUN pnpm install --dangerously-allow-all-builds

# Copy the rest of the application code
COPY . .

# Build the Remix application
RUN pnpm run build

# Set production environment variables
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start the Remix SSR server
CMD ["pnpm", "run", "start"]
