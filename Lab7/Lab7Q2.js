var MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');

var express = require('express');


// 2-instantiation
var app = express();

let port = 4477;


// 3-Configuration
app.set('env', 'development');
app.enable('trust proxy');
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);

//4- middleware


app.use(express.json());


MongoClient.connect('mongodb://127.0.0.1:27017/library', function (err, client) {
    if (err) {
        throw err;
    }
    const db = client.db('library');
    let decrypted = '';
    db.collection('homework7').findOne({}, function (err, doc) {
        if (err) {
            throw err;
        }
        decipher.on('readable', () => {
            const data = decipher.read();
            if (data)
                decrypted += data.toString('utf8');
        });
        decipher.on('end', () => {
            console.log(decrypted);

        });

        const encrypted = doc['message'];
        decipher.write(encrypted, 'hex');
        decipher.end();
        app.get('/secret', function (req, res, next) {



            res.send(decrypted);
        });
        //7-BootUp
        app.listen(port, function () {
            console.log('The Server is running on port %s', port);
        });
        client.close();
    });
}


);

