# USPY 🕵️ - Frontend

This is the official repository for the [USPY](https://uspy.me) Frontend! The code uses React with Typescript for the development of the website, along with [Material UI](https://mui.com/) for the majority of the components.

## Code organization

The code is organized as follows:

```
.
├── build/              -> HTML files
├── index.html
├── favicon.gif
|
├── cypress/            -> Cypress testing
├── cypress.json
├── cypress.local.json
|
├── package.json        -> Local development/building configuration files
├── webpack.config.js
├── tsconfig.json
├── .eslintrc.json
├── .babelrc
├── .prettierrc
|
├── app.yaml            -> Deployment configuration files
├── cloudbuild.yaml
├── deploy.sh
|
├── src/                --> The source code
|  ├── index.tsx            - entrypoint
|  ├── global.css           - CSS main file
|  |
|  ├── utils/               - misc util functions
|  ├── reducer/             - for redux
|  ├── hooks/               - custom react hooks
|  ├── API/                 - code for communication with backend
|  ├── images/              - application set of images
|  ├── routes/              - custom React components for routes
|  ├── actions/             - redux actions
|  ├── components/          - set of react components
|  ├── contexts/            - set of react contexts
|  ├── types/               - custom typescript types
|  ├── HOCs/                - react HOCs
|  ├── pages/               - react components used for pages
|  ├── theme/               - MUI theme

```

## Running locally

There are two ways to run this project locally. One is installing dependencies on your machine with `nodejs`, and the other is using a container with [Docker](https://www.docker.com/).

### 1. Traditional way

You must do the following installations:

- Install [Node JS](https://nodejs.org/en/download/) (last version tested: v16.6.0). I recommend installing via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).
- Install yarn by running `npm install --global yarn`

Then, clone this repo and enter it:
```sh
git clone https://github.com/Projeto-USPY/uspy-frontend
cd uspy-frontend
```
Install the dependencies with:
```sh
yarn install
```
Then, run the app with:
```sh
sudo yarn start --port=80
```
Here, `sudo` is necessary because we are opening port 80. You can also run this command with a root user or using something like [authbind](https://superuser.com/questions/710253/allow-non-root-process-to-bind-to-port-80-and-443#:~:text=Option%202%3A%20Use%20authbind%20to%20grant%20one%2Dtime%20access%2C%20with%20finer%20user/group/port%20control).

Finally, you can see the website by visiting `127.0.0.1` in your browser. (Not `localhost`!)

### 2. Using a container

For this one, you should [install docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/).

Then, clone this repo and enter it:
```sh
git clone https://github.com/Projeto-USPY/uspy-frontend
cd uspy-frontend
```
Run docker-compose:
```
sudo docker-compose up --build
```
Done! You now should be able to visit `127.0.0.1` in your browser and see USPY!


### Configure the backend

Although it looks good, the website is still not able to communicate with the backend yet, so some funcionality will not work.

See [USPY Backend - Running locally](https://github.com/Projeto-USPY/uspy-backend/tree/local_development#running-locally) to learn how to put it up.

You will also have to create a `.env` with your backend URL:
```sh
echo 'API_URL=http://127.0.0.1:8080' > .env
``` 

Have it running at the same time you run your frontend and they should communicate gracefully, as long as you set the `API_URL` correctly (with the same port used by the backend) and visit 127.0.0.1 in your browser instead of localhost.

## Testing

To run the tests, you can run either `yarn cypress` or `yarn cypress-ui`. The first will run all of the available tests and show which are failing (if any). The second will open a UI where you can select which test to run and see a simulation of what's going on.

All of the test files are under `cypress/integration`

You can learn more about cypress [here](https://www.cypress.io/).

## How to contribute

### Features, requests, bug reports

If this is the case, please submit an issue through the contributions repository.

### Actual code

If you'd to directly contribute, fork this repository and create a pull request to merge on `dev` branch. Please do not submit pull requests to the main branch as they will be denied. The main branch is used for releases and we try not to directly push to it other than through the `deploy.sh` script.

We really appreciate any contributors! This project is from USP students and for USP students! If you have any questions or would simply like to chat, contact us on Telegram @preischadt @lucsturci
