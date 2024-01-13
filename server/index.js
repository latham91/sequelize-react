const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./models");

require("dotenv").config();
require("colors");

const app = express();

app.use(morgan("dev"));

db.sequelize.sync({ alter: true }, () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`.yellow.bold);
    });
});
