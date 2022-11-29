import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/tuiter'; 

mongoose.connect(CONNECTION_STRING);

import cors from 'cors';
const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://a9--startling-sopapillas-34c6a4.netlify.app/");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(cors());
app.use(express.json());

HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000); 
