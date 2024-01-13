const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./models");
require("dotenv").config();
require("colors");

const app = express();
app.use(express.json());

// Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Route imports
const postsRouter = require("./routes/Posts");

// Route middleware
app.use("/api/posts", postsRouter);

db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`.bgWhite.black);
    });
});
