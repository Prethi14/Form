# Use official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all the frontend source code into the container
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight web server (e.g., serve)
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 3000

# Serve the build directory with the 'serve' command
CMD ["serve", "-s", "build"]
