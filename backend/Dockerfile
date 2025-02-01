# Use Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy the rest of the backend files
COPY . .

# Expose port (e.g., 5000)
EXPOSE 5000

# Run the server
CMD ["node", "server.js"]
