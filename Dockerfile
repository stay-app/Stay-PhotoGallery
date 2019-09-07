# photogallery

FROM node:8.15

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install && node ./seed/seed.js

EXPOSE 5000

CMD ["npm", "start"]