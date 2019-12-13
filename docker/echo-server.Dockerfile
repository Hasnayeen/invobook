FROM node:12

LABEL Description="This image is part of Goodwork application setup"

RUN npm install -g laravel-echo-server

# Set the WORKDIR to /usr/src/app so all following commands run in /usr/src/app
WORKDIR /usr/src/app