# Notes

## General Notes

- Redux is the 'defacto go to Flux implementation'
- Demo is written in the ES6 standard
- Will use React Router for routing
- Will use Babel for transpiling
- Will use Webpack for bundling
- NPM scripts will be used for builds
- ESLINT for linting
- Mocha, React Test Utils, and Enzyme for testing
- You can run `npm start -s` instead of `npm start` for less console noise (dev)
- You can build the project with command => `npm run build -s` or `npm run build` (prod)
- WARNING: The source code for this demo is a bit out of date.

## Why Redux?

- Defacto standard Flux 'flavor'
- Used by Facebook now
- One store
- Reduced boilerplate
- Isomorphic/Universal Friendly
- Immutable store
- Hot Reloading
- Time-travel debugging
- Small

## Environment Setup

### Notes:

- This Demo will use the following redux starter:
  - [Cory House Redux Starter](https://github.com/coryhouse/pluralsight-redux-starter)
- Will use Babel-polyfill (large)
  - Consider pulling in only the polyfills you need instead
- Using babel-preset-react-hmre for hot reloading
  - WARNING
    - Experimental
    - doesn't reload functional components
    - doesn't reload functions like mapStateToProps
    - Other options exist

### Versions:

- React: 15.0.2
- Redux: 3.5.2
- React Router: 2.4.0
- Webpack: 1.13
- Babel: 6.\*

### Webstorm Extensions:

- react
- terminal-plus

### Setup Process:

- Make sure you have Node.js installed
- Make sure you have the package.json file
- Install dependencies => `npm install`
- Setting up Webpack (bundling):
  - create 'webpack.config.dev.js' in app root dir
    - See source code for configuration definitions
- Create the '.editorconfig' file (See Source Code)
- Setting up Babel
  - create a '.babelrc' file
  - See source code for file details
- Setting up Express as Dev Server
  - create a folder called 'tools'
  - create the 'srcServer.js' file in 'tools'
    - See source for file contents
- Create the start script
  - This script will be defined in 'package.json' under "scripts"
    - See source code for full script definitions
- Create a descriptive start message
  - This is defined in 'package.json' (See Source Code)
  - Also, need to create 'startMessage.js' in 'tools' (See Source Code)
- Setup ESLINT
  - Create the '.eslintrc' file in the app root dir
    - See source code for exact rule definitions
    - Add the npm script in 'package.json' to enable running a lint command
    - To run linting => `npm run lint`
    - Add the npm script in 'package.json' to enable eslint to watch our files (See Source Code)
    - To run linting that watches files => `npm run lint:watch`
- Create parallel npm scripts in 'package.json'
  - Updating the "start" script (See Source Code)
  - Now you can run the code on the dev server and have eslint running with a single command
    - This is all under the command => `npm start`
- Setup Testing (Mocha)
  - Create the 'testSetup.js' file in 'tools' (See Source Code)
  - Add a "test" script to 'package.json'
  - Add a the 'index.test.js' test file to 'src'
  - You can manually run test with => `npm test`
  - Create a file watching test script in 'package.json'
  - Update the "start" script in 'package.json' to run the file watching test script
  - Now file watching tests are also accomplished with => `npm start`

#### Reminder: If you clone this app to your local machine you only have to run `npm install` and `npm start` to get the project up and running.
