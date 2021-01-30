const bodyParser = require("body-parser");
const express = require("express");

const path = require("path");

const app = express();

const indexRoutes = require("./routes/index");
const addProductData = require("./routes/add-product");
const errorRoutes = require("./routes/error");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(indexRoutes);
app.use(addProductData.routes);
app.use(errorRoutes);

app.listen(8000);
