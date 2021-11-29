## Description

Origin backend assignment by Claudiney Junior.

## Installation

Important: You must have node.js and npm installed on you machine.

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode (WIP)
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Personal Notes

In this project I choose to use node.js based on the Nest.js famework usign TypeScript.
My goal was to make this project as simple enough without losing quality, code readability or maintainability.

I choose to focus on e2e tests but I've also done some unit tests on the risk services. I made this decision because of the simplicity of the controllers and services.

Most of the validations are being done by the Dtos using a package called 'class-validator', this makes the code easier to understand and give us velocity in the development.

There's no need of any kind of database in this project, so I choose to not implement any kind of infrastructure layer or entities.

## Stay in touch

- Author - [Claudiney Junior](https://www.linkedin.com/in/claudiney-junior/)
