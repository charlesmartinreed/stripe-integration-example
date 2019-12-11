const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`Server now runnning on port number ${port}`);
});
