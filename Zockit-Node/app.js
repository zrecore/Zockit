const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const hostname = '127.0.0.1';
const port = 6969;

app.use(cors());
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.post('/', function(req, res){
    if(req.body.username === 'goodusername'){
        res.send('SUCCESS');
    }
    else{
        res.send('FAILED');
    }
});

app.listen(port, () => {
    console.log('Started Express Listener');
});

/*MONGO DB CONNECTION*/
const MongoSetup = async() => {
    try{
        const mongo_host = 'mongodb+srv://dev-user:Password@pfifl-dev-cluster-guufd.mongodb.net/test?retryWrites=true&w=majority';
        const db = await MongoClient.connect(mongo_host, {useNewUrlParser: true});
        const dbo = db.db('t_logins')
        const t_accounts = dbo.collection('t_accounts');

        t_accounts.findOne({}, function(err, result){
            if(!err){
                console.log('Result: '+result._email);
                db.close();
            }
            else{
                throw err;
            }
        });
    }
    catch(e){
        console.log(e);
    }
};