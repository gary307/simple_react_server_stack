const express = require("express");
const webpack = require("webpack");
const app = express();
const React = require("react");
const App = require("../dist/indexServer.js");

const router = require("./routes/routes.js");

console.log("Initializing server application...");

console.log("Compiling bundle...");

app.use("/static", express.static(__dirname + "./../dist"));

app.use("/", router);

app.get("/*", App.default);

app.listen(3001);
console.log(`Listening on port 3001`);
