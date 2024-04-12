# create a dockerfile to build the image

FROM node:20.12.2-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=80

EXPOSE 80

CMD ["npm", "start"]