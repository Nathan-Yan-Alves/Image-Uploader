const express = require("express");
const route = express.Router();
const path = require("path");
const pageHandler = require("./controllers/pageHandler");
const getImg = require("./controllers/getImage");

route
    .get("/upload/:imgId", (req, res) => {
        if (req.params.imgId < 6) {
            res.send("<h1>Código inválido</h1>");
        } else {
            res.sendFile(path.join(__dirname, "views/upload.html"));
        }
    })
    .get("/success", (req, res) => {
        res.sendFile(path.join(__dirname, "views/success.html"));
    })
    .get("/photo-:imgId", getImg.openImageUrl)
    .get("/success/photo-:imgId", getImg.resImageURL)
    .post("/api/images", pageHandler.upload);

module.exports = route;
