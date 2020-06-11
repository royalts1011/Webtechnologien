const express = require("express");
const app = express();
const port = 3000;

const PouchDB = require("pouchdb");
const bodyParser = require("body-parser");
const cors = require("cors");
const pouchdbfind = PouchDB.plugin(require("pouchdb-find"));

var db = new PouchDB("blah");

db.createIndex({
  index: {
    fields: ["user"],
  },
})
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(cors());
/**
(app.get("/", (req, res) => res.send("Hello World!"));
 **/

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

app.get("/Aufgabe_4", function (request, response) {
  var tmp = request.query.user;
  var res = db.find({
    selector: {
      user: tmp,
    },
  });
  res.then(function (r) {
    console.log(r);
    response.send(r);
  });
});

app.post("/Aufgabe_4", function (request, response) {
  var data = request.body;
  var res = db.post(data);
  res.then(function (r) {
    console.log(r);
    response.send(r);
  });
});
