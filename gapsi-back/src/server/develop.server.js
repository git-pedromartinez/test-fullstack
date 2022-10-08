const express = require("express");
var morgan = require("morgan");
require("../env/develop.env"); //is necessary start before all

const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan("dev"));
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "../static")));

app.listen(port, function () {
    console.log("server listen on port", port);
});

const routes = require("../routes/routes.routes");
routes(app);
