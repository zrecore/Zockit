const http = require('http');
const MongoClient = require('mongodb').MongoClient;

const hostname = '127.0.0.1';
const port = 6969;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/JSON');
    res.end('Worked');
});

server.listen(port, hostname, () => {
    MongoSetup();
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