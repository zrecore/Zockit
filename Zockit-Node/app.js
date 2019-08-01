const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ZocketClient = require('zockit-node');
const CookieParser = require('cookie-parser');

const app = express();
const port = 6969;

app.use(cors({origin: 'http://localhost:8080', credentials: true}));
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());
app.use(CookieParser());

app.post('/create', function(req, res){
    ZocketClient.SubmitAccount(req.body.email, req.body.password).then(function(result){
        res.send(result);
    });
});

app.post('/login', function(req, res){
    ZocketClient.AttemptLogin(req.body.email, req.body.password).then(function(result){
        if(result[0] === 'validLogin'){
            let cookieAge = (1000 * 3600 * 24 * 7);
            let cookieData = {
                globalID: req.body.email,
                tokenString: result[1]
            };
            res.set('Access-Control-Allow-Credentials', true);
            res.cookie('loginToken', cookieData, {httpOnly: true, maxAge: cookieAge});
            res.send(result[0]);
        }else{
            res.send(result[0]);
        }
    });
});

app.post('/check-token', function(req, res){
    if(req.cookies['loginToken']){
        ZocketClient.CheckToken(req.cookies['loginToken']['globalID'], req.cookies['loginToken']['tokenString'])
            .then(function(result){
                if(result === 'validToken'){
                    res.send('validToken');
                }else if(result === 'invalidToken'){
                    res.set('Access-Control-Allow-Credentials', true);
                    res.cookie('loginToken', 'NULL', {httpOnly: true, maxAge: 1});
                    res.send('invalidToken');
                }else{
                    res.send('tokenError');
                }
            });
    }else{
        res.send('Result: No Cookie');
    }
});

app.listen(port, () => {
    console.log('Node Server Started');
});