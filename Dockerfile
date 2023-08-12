FROM node:16
WORKDIR /micro-blog-app
COPY package.json .

ARG NODE_ENV

# RUN npm run build

RUN if [ "$NODE_ENV" = "development" ]; then \
        npm install; \
    else \
        npm install --only=production; \
    fi

COPY . ./
ENV PORT 4000
EXPOSE $PORT

CMD ["npm", "run", "apollo"]



