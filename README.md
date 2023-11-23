# *EAN Stack Starter

Starter boilerplate for **\*EAN** stack:
* \* (Your choice of DB)
* Express
* Angular
* Node

This starter includes:

* Angular 17
  * SCSS
  * Standalone Components
  * Strict
  * Jest replaces Karma 
  * Added ESLint
  * [normalize.css](github.com/necolas/normalize.css)
* Express
  * Typescript
  * CORS
* Example:
  * Tasks List with CRUD operations:
  
    ![Image of the example tasks page from this EAN example](./tasks-example.png?raw=true)

What's not included:

* No default database, hence the "*EAN" stack, where the `*` marks your choice of DB tool (MongoDB, Firebase, etc').

## Installation

To install both client and server, run from the root directory:
```
pnpm run install:all
```

## Start
Run both processes (using two terminals or your own parallel solution):
```
pnpm run start:client
pnpm run start:server
```
Once both of these processes are running, open your browser on `https://localhost:4200`.

## Thank You
* [Christopher Glikpo](https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln) - for basic express configuration
