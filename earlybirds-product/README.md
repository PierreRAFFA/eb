# EarlyBirds

This repository contains:
- a microservice related to the products
- the docker infrastructure

## Technical Overview
- NodeJS  
- Typescript  
- Express
- MongoDB
- Cucumber
- Winston
  
  
## Environment variables

- **NODE_ENV** (production|development)
- **HTTP_PORT** (ex: 80)
- **LOG_LEVEL** (from 1 to 5)
  
## Setup

```bash
$ npm i
$ npm run build
```
  
## Start the app
```bash
$ npm start
```

### Commands

| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `start`                   | Starts the app. if NODE_ENV is not production, nodemon will watch the files                       |
| `build`                   | Full build.|
| `tslint`                  | Runs TSLint on project files                                                                      |

## Project Structure

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **build**                | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **src**                  | Contains your source code that will be compiled to the dist dir                               |
| **src/controllers**      | Controllers define functions that respond to an event                                         |
| **src/types**            | Holds .d.ts files not found on DefinitelyTyped.|
| **src**/server.ts        | Entry point to the app                                                               |
| **test**                 | Contains your tests. Seperate from source because there is a different build process.         |
| .env.example             | Creates .env base on this one |
| package.json             | File that contains npm dependencies                         |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| tslint.json              | Config settings for TSLint code style checking                                                |

