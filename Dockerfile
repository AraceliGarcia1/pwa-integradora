# Primera etapa: Usa una imagen de Node.js para compilar la aplicación
FROM node:17.2.0 as builder

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Compila la aplicación React
RUN npm run build

# Segunda etapa: Usa una imagen de NGINX para servir la aplicación construida
FROM nginx:1.21.3-alpine

# Copia los archivos generados desde la etapa de compilación
COPY --from=builder /app/build /usr/share/nginx/html

# Expone el puerto en el que se ejecutará el servidor NGINX (por defecto es el puerto 80)
EXPOSE 80

# No es necesario especificar un comando CMD, ya que la imagen de NGINX tiene un valor por defecto
