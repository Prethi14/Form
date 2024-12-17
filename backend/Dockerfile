# Use official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the backend source code into the container
COPY . .

# Expose the port the app will run on
EXPOSE 5000

# Run the application when the container starts
CMD ["node", "server.js"]

