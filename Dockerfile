FROM node:lts-alpine AS build

WORKDIR /app

ARG domain

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN mkdir -p /home/node/.cache/yarn && chown -R node:node /home/node/.cache/yarn && chown -R node:node .

USER node

RUN yarn build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
