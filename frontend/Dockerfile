FROM node:23

# Create app directory
WORKDIR /scores-frontend

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5173

# Run the application
CMD ["npm", "run", "dev"]
