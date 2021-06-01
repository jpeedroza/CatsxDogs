FROM node:15-alpine
LABEL maintainer="Jpeedroza" \
  version="1.0" \
  description="Server with node and express to communicate to another container mysql"

EXPOSE 3001/tcp

RUN npm i npm@latest -g && \
  apk --no-cache add curl &&\
  mkdir /opt/node-server && \
  chown node:node /opt/node-server

USER node
COPY --chown=node:node ./package*.json /opt/node-server

WORKDIR /opt/node-server
RUN npm install --no-optional && npm cache clean --force
COPY --chown=node:node . .
ENV PATH /opt/node_app/node_modules/.bin:$PATH

HEALTHCHECK --interval=30s \
  --timeout=30s \
  --start-period=10s \
  CMD [ "curl", "localhost:3001" ]

CMD [ "npm", "start" ]