const express = require("express");
const server = express();
const path = require("path");
const route = require("./route");

server
    .use(express.json({ limit: "50mb", extend: true }))
    .use(express.urlencoded({ limit: "50mb", extended: true }))
    .use(express.static(path.join(__dirname, "../public")))
    .use(express.static(path.join(__dirname, "views")))
    .use(route)
    .listen(8080);
