var app = require('express')();

port = process.env.PORT || 3000

app.get('/r', function (req, res) {
 res.status(200).json({"message": "Z"});
});

var server = app.listen(port)
console.log('Listening on http://localhost:' + port);
