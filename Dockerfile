FROM node:18-alpine

# Рабочая директория
WORKDIR /app

# Копируем package-файлы
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем весь проект
COPY . .

# Билдим приложение (если Next.js)
RUN npm run build

# Render ожидает, что сервис слушает порт из $PORT
ENV PORT=3000
EXPOSE 3000

# Запуск приложения
CMD ["npm", "start"]