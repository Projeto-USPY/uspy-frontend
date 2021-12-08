# Built following https://mherman.org/blog/dockerizing-a-react-app/

FROM node:16

WORKDIR /app

# so that package search will include node_modules
ENV PATH /app/node_modules/.bin:$PATH

# install dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# copy source
COPY . ./

# Run webpack
# --host=0.0.0.0 is necessary to access it externaly 
CMD ["yarn", "start", "--port=80", "--host=0.0.0.0"]