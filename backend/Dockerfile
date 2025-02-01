# pull official base image
FROM node:20

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent && npm cache clean --force

# add app
COPY . ./

# start app

EXPOSE 5000
CMD [ "node" , "server.js" ]
