FROM node:latest

MAINTAINER Jonathan Robic<hello@jonathanrobic.fr>

EXPOSE 8080

ADD . ./app
WORKDIR /app

RUN npm install


