FROM node:16-alpine
LABEL maintainer="Jpeedroza" \
  version="1.0" \
  description="Front-end from application with react and typescript"

EXPOSE 3000/tcp

RUN npm i npm@latest -g && \
  apk --no-cache add curl &&\
  mkdir /opt/node-app && \
  chown node:node /opt/node-app

USER node
COPY --chown=node:node ./package*.json /opt/node-app

WORKDIR /opt/node-app
RUN npm install --force && npm cache clean --force
COPY --chown=node:node . .
RUN rm -rf back-end/
ENV PATH /opt/node_app/node_modules/.bin:$PATH

HEALTHCHECK --interval=30s \
  --timeout=30s \
  --start-period=10s \
  CMD [ "curl", "localhost:3000" ]

CMD [ "npm", "start" ]