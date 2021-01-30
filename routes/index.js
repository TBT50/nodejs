const path = require("path");

const express = require("express");

const router = express.Router();

const addProductData = require("./add-product");

router.get("/", (req, res, next) => {
  console.log(addProductData.products);
  res.render("index", { products: addProductData.products, docTitle: "Shop" });
  // res.sendFile(path.join(__dirname, "../", "views", "index.pug"));
});

module.exports = router;
