FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
# en /app/build esta el build que se genero con el comando npm run build
# esa carpet se copia al directorio /usr/share/nginx/html que es la que se lee por el nginx 
COPY --from=builder /app/build /usr/share/nginx/html