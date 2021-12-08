# USPY 🕵️ - Frontend

This is the official repository for the [USPY](https://uspy.me) Frontend! The code uses React with Typescript for the development of the website, along with [Material UI](https://mui.com/) for the majority of the components.

## Code organization

The code is organized as follows:

```
.
├── index.html          -> HTML files
├── favicon.gif
├── build
|
├── cypress             -> Cypress testing
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
├── src                 --> The source code
|  ├── index.tsx            - entrypoint
|  ├── utils                - misc util functions
|  ├── reducer              - for redux
|  ├── global.css           - CSS main file
|  ├── hooks                - custom react hooks
|  ├── API                  - code for communication with backend
|  ├── images               - application set of images
|  ├── routes               - custom React components for routes
|  ├── actions              - redux actions
|  ├── components           - set of react components
|  ├── contexts             - set of react contexts
|  ├── types                - custom typescript types
|  ├── HOCs                 - react HOCs
|  ├── pages                - react components used for pages
|  ├── theme                - MUI theme

```

## Deployment & Execution

To run this project, you must do the following installations:

- Install [Node JS](https://nodejs.org/en/download/) (last version tested: v16.6.0). I recommend using [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
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

### Configure the backend

Although it works, the website is still not able to communicate with the backend yet, so some funcionality will not work. 

See [USPY Backend - Running locally](https://github.com/Projeto-USPY/uspy-backend/tree/local_development#running-locally) to learn how to put it up.

You will also have to create a `.env` with your backend network address:
```sh
echo 'API_URL=http://127.0.0.1:8080' > .env
``` 

## Testing

To run the tests, you can run either `yarn cypress` or `yarn cypress-ui`. The first will run all of the available tests and show which are failing. The second will open a UI where you can select which test to run.

All of the test files are under `cypress/integration`

You can learn more about cypress [here](https://www.cypress.io/).

## How to contribute

### Features, requests, bug reports

If this is the case, please submit an issue through the contributions repository.

Actual code
Although we are not yet ready for community contributions, you could submit a pull requests and we'll analyze it through =).