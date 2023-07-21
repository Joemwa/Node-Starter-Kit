const express = require("express");
const app = express();


app.get("/", function (req, res) {
    res.send("Yay node!");
  });

  app.get("/node", function (req, res) {
    res.send("Node found!");
  });
  
  app.get("/codeyourfuture", function (req, res) {
    res.send("I am CodeYourFuture student");
  });

  app.get("/chocolate", function (req, res) {
    let chocolateSearch = req.query.amount;
    res.send("The amount of chocolate you searched for is " + chocolateSearch);
  } )
 
  app.get("/multiply", function (req, res) {
    let value1 = req.query.value1;
    let value2 = req.query.value2;
    let value3 = req.query.value3;
let multiplyResult = value1 * value2 * value3;
    res.send(`This should return value of: ${multiplyResult}`);
  });

  
  app.listen(3000, () => {
    console.log ("server is listening on port 3000. Ready to accept requests!")
})