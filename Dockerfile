# FROM node:alpine as nodeapp

# WORKDIR /app

# COPY package.json .

# RUN npm install

# COPY . .

# RUN npm run build


# FROM nginx

# WORKDIR /usr/share/nginx/html

# RUN rm -rf ./*

# COPY --from=nodeapp /app/buid .

# ENTRYPOINT [ "nginx","-g","daemon off;" ]




# FROM node:16-alpine as builder
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build
# FROM nginx:1.21.0-alpine as production
# ENV NODE_ENV production
# COPY --from=builder /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]


FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]