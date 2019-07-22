const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ZocketClient = require('zockit-node');

const app = express();
const port = 6969;

app.use(cors());
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.post('/create', function(req, res){
    ZocketClient.SubmitAccount(req.body.email, req.body.password).then(function(result){
        res.send(result);
    });
});

app.post('/login', function(req, res){
    ZocketClient.AttemptLogin(req.body.email, req.body.password, req.body.remember, 0).then(function(result){
        res.send(result);
    });
});

app.listen(port, () => {
    console.log('Node Server Started');
});