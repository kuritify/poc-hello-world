FROM node:4.2.2-slim

COPY package.json /opt/package.json
WORKDIR /opt
#RUN npm install
COPY index.js /opt/index.js

CMD ["/opt/index.js"]

