const app = require("http")
const fs = require("fs")


let port = process.env.PORT || 4040

app.createServer( (req, res) => {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Acess-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000,
      "Access-Control-Request-Headers": "Content-Type"
    });

    fs.readFileSync("./data.json" ,"utf8", (err, data) => {
        if(err) throw err;
        res.write(JSON.stringify(data))
        res.end()
    })
})
.listen(port)