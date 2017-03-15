FROM ubuntu:yakkety
WORKDIR /src
ADD . .
RUN npm run start:prod
EXPOSE 80
CMD ["npm", "run", "start:prod"]
