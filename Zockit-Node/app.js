const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const zocket = require('zocket');

const app = express();
const comm = zocket();
const port = 6969;

app.use(cors());
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.post('/', function(req, res){
    CheckLogin(req.body.username, '').then(function(result){
        console.log(result);
        res.send(result);
    });
});

app.listen(port, () => {
    console.log('Started Express Listener');
});

/*MONGO DB CONNECTION*/
function CheckLogin(username, password){
    let promise = new Promise(async function(resolve, reject){
        const mongo_host = 'mongodb+srv://dev-user:Password@pfifl-dev-cluster-guufd.mongodb.net/test?retryWrites=true&w=majority';
        const db = await MongoClient.connect(mongo_host, {useNewUrlParser: true});
        const dbo = db.db('t_logins');
        const t_accounts = dbo.collection('t_accounts');
        let data = 'NO DATA';
        try{
            console.log('MONGO');
            t_accounts.findOne({_email: username}, {_email: 1, _password: 1}, function(err, result){
                if(!err){
                    data = 'WE HAVE DATA';
                    resolve(data);
                }else{
                    data = 'WE DO NOT HAVE DATA';
                    resolve(data);
                }
            });
        }catch(err){
            data = 'WE DONT HAVE DATA';
            resolve(data);
        }
    });
    return promise;
}