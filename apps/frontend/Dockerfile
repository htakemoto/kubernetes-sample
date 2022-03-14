FROM node:14-slim as builder
WORKDIR /app
ADD ./apps/frontend/package.json ./apps/frontend/package-lock.json /app/
RUN npm install
COPY ./apps/frontend /app
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html