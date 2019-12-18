# simple-weather-app

The weather forecast application.

## Technologies & Patterns Used

- react - view library
- redux - state management
- redux-thunk - async actions
- MaterialUI - styling
- CSS in JSS pattern for styling components

## Installation

```
$ yarn
```

## Starting the Application

| `yarn ...` | Description                                                        |
| ---------- | ------------------------------------------------------------------ |
| start:dev  | Builds the application in development mode and starts a dev server |
| start      | Builds the application in production mode and starts a dev server  |
| build      | Builds the application in production mode                          |

### Make sure to create a secrets.js file outside the `src` directory and add

```
export const API_KEY = "*****"
```

## Running unit tests

| `yarn ...` | Description                                   |
| ---------- | --------------------------------------------- |
| test       | uses jest to run the unit tests               |
| test:watch | uses jest to run the unit tests in watch mode |
