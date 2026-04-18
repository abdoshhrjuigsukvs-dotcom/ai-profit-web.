FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
