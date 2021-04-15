var fs = require('fs');

exports.rootHandler = (req, resp) => {
    resp.status(200);
    resp.send(`
    <h1>Hello Everybody This is my first express js proejct.</h1>
    `);
};

exports.greetHandler = (req, resp) => {
    var userName = req.query.unm;
    var fileName = "./public/greet.htm";
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            resp.status(404);
            resp.end();
        } else {
            resp.status(200);
            var result = data.toString().replace("{{userName}}", userName);
            resp.send(result);
        }
    });
};