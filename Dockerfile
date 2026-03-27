FROM node:18-alpine
WORKDIR /app
COPY server.js .
# Uygulamanın 3000 portunu kullanacağını belirtiyoruz
EXPOSE 3000
CMD ["node", "server.js"]