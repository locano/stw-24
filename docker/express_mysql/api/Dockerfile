FROM node:18-alpine

# Create app directory
WORKDIR /app
# Install app dependencies
COPY package*.json ./
# Run npm install
RUN npm install
# Bundle app source
COPY . .
# Expose port 3000
EXPOSE  3000

CMD ["npm", "start"]