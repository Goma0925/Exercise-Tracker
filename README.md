# Exercise Tracker

Live Demo running at: [https://exercise-tracker-2021-01-08.herokuapp.com/app/](https://exercise-tracker-2021-01-08.herokuapp.com/app/)

This app is a practice full stack app with MERN stack. The project is inspired by the following sources:

- [Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)](https://youtu.be/7CqJlxBYj-M)
- [Node.js Tutorial For Absolute Beginners](https://youtu.be/U8XF6AFGqlc)

## Deploy Instruction (Heroku)

1. Clone the repository and create a Heroku account
2. Create a database with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and get the [Mongo Atlas ConnectionString](https://docs.mongodb.com/guides/cloud/connectionstring/) to allow the application to connect the db. The db schema follows the tutorial on [Learn the MERN Stack - Full Tutorial (MongoDB, Express, React, Node.js)](https://youtu.be/7CqJlxBYj-M)
3. Set the connection string to the server's environment variable in 'Exercise-Tracker/.env'.

    ```bash
    //In Exercise-Tracker/
    touch .env
    //In .env
    ATLAS_URI = mongodb+srv://user:example@project.????.mongodb.net/<dbname>?retryWrites=true&w=majority
    ```

3. Follow the steps on [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app)

## Deploy Note (Heroku)

- Add heroku post build script to build React app. Reference: [Heroku Help](https://help.heroku.com/P5IMU3MP/heroku-node-js-build-script-change-faq)

    ```json
    //package.json
    "scripts": {
      "start": "node index.js",
      "build": "webpack",
      "heroku-postbuild": "echo Skip build on Heroku"
    }
    ```

- Do not expose DB credentials and store it in .env. Make sure NOT to commit it on git.

## React Tips

- Use [React Router](https://reactrouter.com/web/guides/quick-start) to simplify control navigation with React.
- Environment variables available by using "[dotenv](https://www.npmjs.com/package/dotenv)" for regular Node.js and "[react-dotenv](https://www.npmjs.com/package/react-dotenv)" for React. Use these for credential variables and API root URL.
