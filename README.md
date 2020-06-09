# Study Now

Study now is a responsive mobile first web application suited towards students to help organise their studies at whatever level of education they are at. This application includes features such as a To-do list, a calendar, a Pomodoro Timer, a Flashcard system.

The deployed final product can be found **[HERE](https://blooming-savannah-59517.herokuapp.com/)**

## Getting Started

### Prerequisites

- You **_must_** have NPM installed as well as Node.js

- You **_must_** create your own MongoDB database (There is a free tier). This is for security reasons as the account username and password is omitted.
### Setup

Install server dependencies
```bash
npm install
```

Install client dependencies
```bash
cd client
npm install
```

### Mongo Connection Setup

Edit the /config/default.json.sample and /config/production.json.sample files to include the correct MonogoDB URI your own database and then **_remove_ the .sample extention** from each file.

## Running the client and server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```
