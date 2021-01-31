const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const keys = require("./config/keys");

const path = require("path");

const app = express();

const port = process.env.PORT || 8000;

const indexRoutes = require("./routes/index");
const addProductData = require("./routes/add-product");
const errorRoutes = require("./routes/error");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.use(indexRoutes);
app.use(addProductData.routes);
app.use(errorRoutes);

app.listen(port);
