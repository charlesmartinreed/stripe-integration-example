if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const fs = require("fs");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// API KEYS
const stripePublicKey = process.env.STRIPE_API_KEY;
const stripeSecretKey = process.env.STRIPE_API_KEY_SECRET;

/*
===================
SET VIEW ENGINE
for rendering our views
===================
 */
app.set("view engine", "ejs");

/*
===================
DEFINE STATIC/PUBLIC FOLDER
===================
 */
app.use(express.static("public"));

/*
===================
ROUTES
===================
 */

app.get("/store", (req, res) => {
  fs.readFile("items.json", (err, data) => {
    if (err) {
      res.status(500).end();
    } else {
      // pass down the file variables to our template file
      res.render("store.ejs", {
        items: JSON.parse(data)
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server now runnning on port number ${port}`);
});
