const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = 8080

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.listen(PORT,() => console.log("listening on port:  " +PORT));