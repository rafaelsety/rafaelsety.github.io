FROM node:20-slim

WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
