const describe = require("./src/description")
const express = require("express")
const app = express()

app.get("/", function (req, res) {
    res.send("☕️ It has " + describe.mainFlavor() + " with " + describe.withFlavor())
})

app.listen(8080, function() {console.log("started")})