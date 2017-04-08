var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req, res, next) {
    console.log("/" + req.method + " - " + req.statusMessage);;
    next();
});

router.get("/", function (req, res) {
    res.sendFile(path + "/index.html");
});

router.get("/hermes", function(req, res) {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.sendFile(path + "/index.html");
console.log("app = " + fullUrl);
})

app.use("/", router);

app.use("/img", express.static(__dirname + "/img"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/vendor", express.static(__dirname + "/vendor"));
app.use("/js", express.static(__dirname + "/js"));

app.listen(8080, function () {
    console.log("Live at port 8080.");
});