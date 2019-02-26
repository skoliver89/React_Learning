# Notes

## General Notes

- WARNING: This Demo is a little out of date as of this README
- Testing React apps could be done with Jest, but will not be utilized in this Demo.
- This Demo uses ES5; however, consider using ES6 in current projects and transpiling it via Babel
  - ES5 is being used in this demo for simplicity.
- The Tech-Stack used in this Demo is not specifically required to create React Apps with flux. I personally recommend Node.js and NPM using the create-react-app command if you are creating a pure React application; however, there are many other options. See the official React documentation for further details on solutions that fits your needs.
- Node.js is installed via an installer from their homepage
- After you have node, if you want to run this source code run '''npm install''' and it will install the required dependencies.

## Tech-Stack Used In This Demo

- Node & NPM -> Package Manager
- React (version 0.13.3) -> Components
- React-Router (Version 0.13.3) -> Routing
- Flux (2.0.3) -> Data Flows
- Browserify -> Bundler
- Gulp -> Builds
  ### Note: These have been updated and there may be some breaking changes to this Demo's code due to those updates.

## What Gulp Will Do

- Compile React JSX
- Lint JSX and JS via ESLINT
- Bundle JS and CSS files
- Migrate the built app to the dist folder
- run a dev webserver
- Open the browser at your dev URL
- Reload the browser upon save

## Setup The Environment (commands in console of choice)

1. Check that Node is installed
   - Command: node -v
1. Navigate to directory where the app source code will live
1. Initialize NPM
   - Command: npm init
1. Install Gulp
   - Command: npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0
1. Configure Gulp
   - Add a new file in root of app folder called: gulpfile.js
   - See source code for configuration code.
   - Test the setup (make sure you have created the index.html in the src folder!)
     - Command: npx gulp
1. Configure Browserify
   - uses CommonJS pattern
   - command: npm install --save browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0
   - update the gulp config js file to work with these packages (see source code)
1. Install Bootstrap, jQuery, and gulp-concat
   - command: npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0
   - update gulp config file js (see source code)
1. Configure ESLint
   - command: npm install --save gulp-eslint@0.15.0
   - Update the gulp config file js (see source code)
   - Create eslint.config.json file (same dir as gulp file)
     - WARNING: we are using an old version of eslint, the new versions use different syntax for rules
1. Install React, React-Router, and Flux
   - command: npm install --save react@0.13.3 react-router@0.13.0 flux@2.0.3
1. To update packages installed
   - command: npm update
   - WARNING: Remember, this Demo's source code may be affected by breaking changes in newer versions of React, React-Router, and Flux
