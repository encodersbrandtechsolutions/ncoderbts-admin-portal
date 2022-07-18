FROM node:14-alpine as build

WORKDIR /var/lib/jenkins/workspace/encoders-brandtech-web-admin
COPY . .

RUN rm -rf /var/lib/jenkins/workspace/encoders-brandtech-web-admin/node_modules

RUN npm i
RUN npm run build --project=astro-pujeets-web-admin

EXPOSE 3004

CMD ["ng", "serve", "--project=astro-pujeets-web-admin"]
