FROM node:16.14-alpine

WORKDIR /app-backend

EXPOSE 3001

COPY . .

RUN ["npm", "install"]
RUN ["npm", "run", "build"]

ENTRYPOINT ["npm", "start"]