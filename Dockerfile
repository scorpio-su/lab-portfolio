FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
COPY package-lock.json ./

# Bundle app source
COPY . .

# RUN apt-get update && \
#     apt-get upgrade -y && \
#     apt-get install -y curl && \
#     npm install
RUN npm install

Volume [ "./" ]

EXPOSE 3000

CMD [ "node", "start" ]
