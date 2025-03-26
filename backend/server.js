const express = require('express');
require('dotenv').config();
const scoreRouters = require('./src/routes/scores');

class App {
    constructor(port) { 
        this.app = express();
        this.middlewares();
        this.routes();
        this.port = port;
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', scoreRouters);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`Server is running: http://localhost:${this.port}`);
        });
    }
}

const port = process.env.PORT || 3000;
const app = new App(port);
app.start();