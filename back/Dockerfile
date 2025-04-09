FROM node:23-slim

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto por defecto de Vite o React
EXPOSE 5173 3000

# Comando para ejecutar el servidor en modo desarrollo
CMD ["npm", "run", "dev"]
