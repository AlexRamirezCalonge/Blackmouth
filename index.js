const express = require("express");
const app = express();

require('./services/applist')(app);
require('./services/users')(app);

//First Service - Hello World
app.get('/', function (req, res) {
    res.send('Hello World!!!');
  });

app.listen(3000, () => {
 console.log("Service iniciated. Localhost 3000");
});