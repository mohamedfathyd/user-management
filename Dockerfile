FROM node:14.19.1 as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
ARG ENV
RUN npm install
RUN npm run build

FROM nginx:1.20.0-alpine
COPY --from=build /usr/local/app/dist/* /usr/share/nginx/html/
EXPOSE 80
