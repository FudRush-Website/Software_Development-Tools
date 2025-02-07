FROM node:18.19.1-alpine

WORKDIR /app

COPY package*.json ./

RUN echo "Server is starting"


COPY . .


EXPOSE 5173


CMD ["npm", "run", "dev"]
